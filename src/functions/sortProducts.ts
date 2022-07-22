import ProductType from "../types/ProductType";
import SortType from "../types/SortType";

const getCompareFunction = (sortObject: SortType) => {
  const { order, orderBy } = sortObject;

  if (order === "inc") {
    // for ascending/increasing sequence
    return (product1: ProductType, product2: ProductType) => {
      if (product1[orderBy] < product2[orderBy]) {
        return -1;
      }
      if (product1[orderBy] > product2[orderBy]) {
        return 1;
      }
      return 0;
    };
  }

  // for descending/decreasing sequence
  return (product1: ProductType, product2: ProductType) => {
    if (product1[orderBy] > product2[orderBy]) {
      return -1;
    }
    if (product1[orderBy] < product2[orderBy]) {
      return 1;
    }
    return 0;
  };
};

const sortProducts = (newProducts: ProductType[], sortObject: SortType) => {
  // obtaining the compare function based on the sort object
  const compare = getCompareFunction(sortObject);

  // using JS in-place sort method
  newProducts.sort(compare);
};

export default sortProducts;
