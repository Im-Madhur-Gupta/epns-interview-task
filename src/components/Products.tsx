import { useState, useEffect } from "react";
import axios from "axios";

import Product from "./Product";
import SidePanel from "./SidePanel";

import { Center, Flex, Spinner } from "@chakra-ui/react";

import ProductType from "../types/ProductType";

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productData, setProductData] = useState<ProductType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    // loading the products from third-party API
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        setProductData(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Center
          width="100vw"
          height="100vh"
          position="absolute"
          top="0"
          left="0"
        >
          <Spinner size="xl" thickness="4px" speed="0.65s" />
        </Center>
      ) : (
        <Flex justify="space-between" paddingX={8}>
          <SidePanel />
          <Flex direction="column" w="73vw">
            {productData.map((product: ProductType) => (
              <Product product={product} key={product.id} />
            ))}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Products;
