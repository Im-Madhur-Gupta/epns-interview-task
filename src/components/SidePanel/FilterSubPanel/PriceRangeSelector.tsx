import { useState } from "react";

import useStore from "../../../store";

import { Heading, Input, Flex, Button } from "@chakra-ui/react";

const PriceRangeSelector = () => {
  const [minPrice, setMinPrice] = useState("");
  const minPriceChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setMinPrice(event.target.value);

  const [maxPrice, setMaxPrice] = useState("");
  const maxPriceChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => setMaxPrice(event.target.value);

  const setPriceRangeFilter = useStore((state) => state.setPriceRangeFilter);

  const priceRangeChangeHandler = () => {
    // -1 indicates that the value is unbounded on max side.
    setPriceRangeFilter({
      min: minPrice.trim() !== "" ? +minPrice : 0,
      max: maxPrice.trim() !== "" ? +maxPrice : -1,
    });
  };

  return (
    <Flex direction="column" marginY={3}>
      <Heading size="md" marginBottom={2}>
        Price
      </Heading>
      <Flex>
        <Input
          type="number"
          placeholder="Min"
          marginX={1}
          value={minPrice}
          onChange={minPriceChangeHandler}
        ></Input>
        <Input
          type="number"
          placeholder="Max"
          marginX={1}
          value={maxPrice}
          onChange={maxPriceChangeHandler}
        ></Input>
        <Button marginX={1} onClick={priceRangeChangeHandler} colorScheme='yellow'>
          Go
        </Button>
      </Flex>
    </Flex>
  );
};

export default PriceRangeSelector;
