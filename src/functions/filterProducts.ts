import FilterType from "../types/FilterType";
import ProductType from "../types/ProductType";

const filterProducts = (
  products: ProductType[],
  filterObject: FilterType
): ProductType[] => {
  const newProducts: ProductType[] = [];

  // using simple for loop inorder to utilize "continue" keyword.
  for (let product of products) {
    // checking for search key filter
    // simply by checking whether the key is present in the title or not
    // note - advanced searching can be implmented using fuzzysort package.
    if (
      !product.title
        .toLocaleLowerCase()
        .includes(filterObject.searchKey.toLocaleLowerCase())
    ) {
      // title of product doesnt include search key
      continue;
    }

    // checking for categories filter
    if (
      filterObject.categories.length !== 0 &&
      !filterObject.categories.includes(product.category)
    ) {
      // category of product is invalid
      continue;
    }

    // checking for price filter
    if (
      filterObject.price.min > product.price ||
      (filterObject.price.max !== -1 && filterObject.price.max < product.price)
    ) {
      // price of product is not in range
      continue;
    }

    // checking for min rating filter
    if (filterObject.minRating > product.rating) {
      // rating of product is not in range
      continue;
    }

    newProducts.push(product);
  }
  return newProducts;
};

export default filterProducts;
