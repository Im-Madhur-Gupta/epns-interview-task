type FilterType = {
  searchKey: string;
  categories: string[];
  price: {
    min: number;
    max: number;
  };
  minRating: number;
};

export default FilterType;
