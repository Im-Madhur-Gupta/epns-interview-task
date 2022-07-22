import { useState, useEffect } from "react";
import axios from "axios";

// global store
import useStore from "../store";

// components
import SearchProduct from "./SearchProduct";
import ProductList from "./ProductList";
import SidePanel from "./SidePanel";

// functions
import sortProducts from "../functions/sortProducts";
import filterProducts from "../functions/filterProducts";

// ui
import { Center, Flex, Spinner } from "@chakra-ui/react";

// types
import ProductType from "../types/ProductType";

let allProducts: ProductType[] = [];

const Products = () => {
  const { sortObject, filterObject } = useStore((state) => ({
    filterObject: state.filterObject,
    sortObject: state.sortObject,
  }));

  const [isLoading, setIsLoading] = useState(false);
  const [processedProducts, setProcessedProducts] = useState<ProductType[]>([]);

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
    let newProducts = [...allProducts];

    // filtering
    newProducts = filterProducts(newProducts, filterObject);

    // in-place sorting of products
    sortProducts(newProducts, sortObject);

    setProcessedProducts(newProducts);
  }, [filterObject, sortObject]);

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
          <Flex direction="column">
            <SearchProduct />
            <ProductList processedProducts={processedProducts} />
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Products;
