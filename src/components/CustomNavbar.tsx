import { Avatar, Button, Navbar, Stack } from "@mantine/core";
import { Category } from "@prisma/client";
import { useSession } from "next-auth/react";
import { categoryStore } from "../store/store";
import { trpc } from "../utils/trpc";

const CustomNavbar = () => {
  const setSelectedCategory = categoryStore(
    (state) => state.setSelectedCategory
  );

  const { data: categories } = trpc.home.getAll.useQuery();

  const { data: session } = useSession();

  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      {/* Navbar content */}
      <Stack>
        {categories?.map((category: Category) => {
          return (
            <Button
              variant="subtle"
              color="dark"
              onClick={() => {
                setSelectedCategory(category);
              }}
              key={category.id}
            >
              {category.name}
            </Button>
          );
        })}
      </Stack>
      <Avatar color="cyan" radius="xl">
        {session?.user?.image ? <img src={session.user.image} /> : " MK"}
      </Avatar>
    </Navbar>
  );
};

export default CustomNavbar;
