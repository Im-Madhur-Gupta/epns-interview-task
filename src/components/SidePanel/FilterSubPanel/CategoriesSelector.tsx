import { useEffect } from "react";
import axios from "axios";

import useStore from "../../../store";

import {
  Checkbox,
  CheckboxGroup,
  Heading,
  Stack,
  UseCheckboxGroupProps,
  Flex,
} from "@chakra-ui/react";

let allCategories: string[] = [];

const CategoriesSelector = () => {
  const setCategoriesFilter = useStore((state) => state.setCategoriesFilter);

  const categoryChangeHandler: UseCheckboxGroupProps["onChange"] = (
    selectedCategories
  ) => {
    setCategoriesFilter(selectedCategories as string[]);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        allCategories = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Flex direction="column" marginY={3}>
      <Heading size="md" marginBottom={2}>
        Categories
      </Heading>
      <CheckboxGroup colorScheme='yellow' onChange={categoryChangeHandler}>
        <Stack spacing={[1, 3]} direction={["column"]}>
          {allCategories.map((category) => (
            <Checkbox key={category} value={category}>
              {category}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </Flex>
  );
};

export default CategoriesSelector;
