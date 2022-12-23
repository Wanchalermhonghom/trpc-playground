import { Navbar } from "@mantine/core";
import { Categories } from "@prisma/client";
import { categoryStore } from "../store/store";

const CustomNavbar = ({ categories }: { categories: Categories[] }) => {
  const setSelectedCategory = categoryStore(
    (state) => state.setSelectedCategory
  );
  return (
    <Navbar width={{ base: 300 }} height={500} p="xs">
      {/* Navbar content */}
      {categories?.map((category) => {
        return (
          <button
            onClick={() => {
              setSelectedCategory(category);
            }}
            key={category.id}
          >
            {category.name}
          </button>
        );
      })}
    </Navbar>
  );
};

export default CustomNavbar;
