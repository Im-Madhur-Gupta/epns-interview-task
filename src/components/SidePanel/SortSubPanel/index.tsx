import { Select } from "@chakra-ui/react";
import useStore from "../../../store";

import sortOptions from "./sortOptions";

const SortSubPanel = () => {
  const setSortObject = useStore((state) => state.setSortObject);

  const sortOptionChangeHandler: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    setSortObject(sortOptions[e.target.value].sortObject);
  };

  return (
    <Select
      placeholder="Sort By"
      variant="filled"
      bg="white"
      _focus={{ border: "none", bg: "white" }}
      onChange={sortOptionChangeHandler}
    >
      {Object.keys(sortOptions).map((optionIdentifier) => {
        const { text } = sortOptions[optionIdentifier];
        return (
          <option key={text} value={optionIdentifier}>
            {text}
          </option>
        );
      })}
    </Select>
  );
};

export default SortSubPanel;
