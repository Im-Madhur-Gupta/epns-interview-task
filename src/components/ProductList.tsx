import Product from "./Product";

import { Flex } from "@chakra-ui/react";

import ProductType from "../types/ProductType";

type ProductListComponentType = {
  processedProducts: ProductType[];
};

const ProductList = ({ processedProducts }: ProductListComponentType) => {
  return (
    <Flex direction="column" w="73vw">
      {processedProducts.map((product: ProductType) => (
        <Product product={product} key={product.id} />
      ))}
    </Flex>
  );
};

export default ProductList;
