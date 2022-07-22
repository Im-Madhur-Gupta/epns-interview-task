import SortSubPanel from "./SortSubPanel";

import { Flex, Divider } from "@chakra-ui/react";

import SortType from "../../types/SortType";

type SidePanelComponentType = {
  setSortObject: React.Dispatch<React.SetStateAction<SortType>>;
};

const SidePanel = ({ setSortObject }: SidePanelComponentType) => {
  return (
    <Flex
      h="80vh"
      w="18vw"
      direction="column"
      justify="space-around"
      position="sticky"
      top="10%"
      bgColor="#3e3d43"
      marginY={3}
      padding={6}
      borderRadius="4px"
    >
      <SortSubPanel setSortObject={setSortObject} />
      <Divider />
    </Flex>
  );
};

export default SidePanel;
