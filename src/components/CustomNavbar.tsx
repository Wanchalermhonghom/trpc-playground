import { Avatar, Button, Navbar, Stack } from "@mantine/core";
import { Category } from "@prisma/client";
import { categoryStore } from "../store/store";

const CustomNavbar = ({ categories }: { categories: Category[] }) => {
  const setSelectedCategory = categoryStore(
    (state) => state.setSelectedCategory
  );
  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      {/* Navbar content */}
      <Stack>
        {categories?.map((category) => {
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
        MK
      </Avatar>
    </Navbar>
  );
};

export default CustomNavbar;
