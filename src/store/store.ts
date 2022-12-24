import { Category } from "@prisma/client";
import create from "zustand";

type CategoryStore = {
  selectedCategory: Category;
  homes: any;
  setSelectedCategory: (category: Category) => void;
  setHomes: (homes: any) => void;
};

export const categoryStore = create<CategoryStore>((set, get) => ({
  selectedCategory: {} as any,
  homes: [],
  setSelectedCategory: (category: Category) =>
    set({ selectedCategory: category }),
  setHomes: (homes: any) => set({ homes: homes }),
}));
