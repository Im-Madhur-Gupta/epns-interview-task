import { useState, useEffect } from "react";
import axios from "axios";

import ProductList from "./ProductList";
import SidePanel from "./SidePanel";

import sortProducts from "../functions/sortProducts";

import { Center, Flex, Spinner } from "@chakra-ui/react";

import ProductType from "../types/ProductType";
import SortType from "../types/SortType";

let allProducts: ProductType[] = [];

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [processedProducts, setProcessedProducts] = useState<ProductType[]>([]);

  // state to store the filtering config
  const [filterObject, setFilterObject] = useState({});

  // state to store the sorting config
  const [sortObject, setSortObject] = useState<SortType>({
    order: "inc",
    orderBy: "id",
  });

  useEffect(() => {
    setIsLoading(true);
    // loading the products from third-party API
    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => {
        // pre processing the data obtained from API
        const obtainedProducts: ProductType[] = res.data.map((product: any) => {
          const flattenProduct = { ...product };
          delete flattenProduct["rating"];
          flattenProduct.rating = product.rating.rate;
          flattenProduct.noOfReviews = product.rating.count;
          return flattenProduct;
        });

        // storing the obtained data in variables
        setProcessedProducts(obtainedProducts);
        allProducts = obtainedProducts;

        setIsLoading(false);
        // console.log(obtainedProducts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const newProducts = [...allProducts];
    // filtering
    // sorting
    sortProducts(newProducts, sortObject);

    setProcessedProducts(newProducts);
  }, [sortObject]);

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
          <SidePanel setSortObject={setSortObject} />
          <ProductList processedProducts={processedProducts} />
        </Flex>
      )}
    </>
  );
};

export default Products;
