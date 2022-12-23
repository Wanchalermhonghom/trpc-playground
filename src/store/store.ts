import { Categories } from "@prisma/client";
import create from "zustand";

type CategoryStore = {
    selectedCategory: Categories;
    homes: any;
    setSelectedCategory: (category: Categories) => void;
    setHomes: (homes: any) => void;
}

export const categoryStore = create<CategoryStore>((set, get) => ({
  selectedCategory: {} as any,
  homes: [],
  setSelectedCategory: (category: Categories) =>
    set({ selectedCategory: category }),
  setHomes: (homes: any) => set({ homes: homes }),
}));
