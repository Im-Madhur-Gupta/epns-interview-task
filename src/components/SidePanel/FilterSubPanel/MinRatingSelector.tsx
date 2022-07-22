import { useEffect, useState } from "react";

import useStore from "../../../store";

import {
  Heading,
  Stack,
  Flex,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

const MinRatingSelector = () => {
  const setMinRatingFilter = useStore((state) => state.setMinRatingFilter);

  const [minRating, setMinRating] = useState("0");

  useEffect(() => {
    setMinRatingFilter(+minRating);
  }, [minRating, setMinRatingFilter]);

  return (
    <Flex direction="column" marginY={3}>
      <Flex justify="space-between" align="center">
        <Heading size="md" marginBottom={2}>
          Ratings
        </Heading>
        <Button
          size="xs"
          width="fit-content"
          onClick={() => {
            setMinRating("0");
          }}
          colorScheme="yellow"
        >
          clear
        </Button>
      </Flex>
      <RadioGroup
        value={minRating}
        onChange={setMinRating}
        colorScheme="yellow"
      >
        <Stack direction="column">
          <Radio value="4">4 Star and Up</Radio>
          <Radio value="3">3 Star and Up</Radio>
          <Radio value="2">2 Star and Up</Radio>
          <Radio value="1">1 Star and Up</Radio>
        </Stack>
      </RadioGroup>
    </Flex>
  );
};

export default MinRatingSelector;
