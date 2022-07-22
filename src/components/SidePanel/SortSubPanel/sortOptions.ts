import SortType from "../../../types/SortType";

const sortOptions: {
  [optionIdentifier: string]: { text: string; sortObject: SortType };
} = {
  ID_INC: {
    text: "Featured",
    sortObject: {
      order: "inc",
      orderBy: "id",
    },
  },
  PRICE_INC: {
    text: "Price: Low to High",
    sortObject: {
      order: "inc",
      orderBy: "price",
    },
  },
  PRICE_DSC: {
    text: "Price: High to Low",
    sortObject: {
      order: "dsc",
      orderBy: "price",
    },
  },
  RATING_DSC: {
    text: "Avg. Customer Rating",
    sortObject: {
      order: "dsc",
      orderBy: "rating",
    },
  },
  REVIEWS_DSC: {
    text: "Number of Reviews",
    sortObject: {
      order: "dsc",
      orderBy: "noOfReviews",
    },
  },
};

export default sortOptions;
