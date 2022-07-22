import CategoriesSelector from "./CategoriesSelector";
import PriceRangeSelector from "./PriceRangeSelector";
import MinRatingSelector from "./MinRatingSelector";

import { Flex } from "@chakra-ui/react";

const FilterSubPanel = () => {
  return (
    <Flex
      direction="column"
      bgColor="#fff"
      borderRadius="4px"
      paddingX={4}
      paddingY={2}
    >
      <CategoriesSelector />
      <PriceRangeSelector />
      <MinRatingSelector />
    </Flex>
  );
};

export default FilterSubPanel;
