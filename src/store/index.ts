import create from "zustand";

import FilterType from "../types/FilterType";
import SortType from "../types/SortType";

interface ProcessingState {
  filterObject: FilterType;
  sortObject: SortType;
  setSortObject: (newSortObject: SortType) => void;
  setSearchFilter: (newSearchKey: string) => void;
  setCategoriesFilter: (newCategories: string[]) => void;
  setPriceRangeFilter: (newPriceRange: { min: number; max: number }) => void;
  setMinRatingFilter: (newMinRating: number) => void;
}

const useStore = create<ProcessingState>()((set) => ({
  // state to store the filtering config
  filterObject: {
    searchKey: "",
    categories: [],
    price: {
      min: 0,
      max: -1,
    },
    minRating: 0,
  },

  // state to store the sorting config
  sortObject: {
    order: "inc",
    orderBy: "id",
  },

  // method to set the sort object
  setSortObject: (newSortObject) => set({ sortObject: { ...newSortObject } }),

  // methods to set the filter object
  setSearchFilter: (newSearchKey: string) =>
    set((state) => ({
      filterObject: { ...state.filterObject, searchKey: newSearchKey },
    })),
  setCategoriesFilter: (newCategories) =>
    set((state) => ({
      filterObject: { ...state.filterObject, categories: newCategories },
    })),
  setPriceRangeFilter: (newPriceRange) =>
    set((state) => ({
      filterObject: { ...state.filterObject, price: newPriceRange },
    })),
  setMinRatingFilter: (newMinRating) =>
    set((state) => ({
      filterObject: { ...state.filterObject, minRating: newMinRating },
    })),
}));

export default useStore;
