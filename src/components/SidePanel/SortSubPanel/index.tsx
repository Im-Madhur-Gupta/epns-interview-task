import { Select } from "@chakra-ui/react";

import sortOptions from "./sortOptions";

import SortType from "../../../types/SortType";

type SortSubPanelComponentType = {
  setSortObject: React.Dispatch<React.SetStateAction<SortType>>;
};

const SortSubPanel = ({ setSortObject }: SortSubPanelComponentType) => {
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
