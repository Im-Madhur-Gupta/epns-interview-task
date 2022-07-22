import SortSubPanel from "./SortSubPanel";
import FilterSubPanel from "./FilterSubPanel";

import { Flex, Divider } from "@chakra-ui/react";

const SidePanel = () => {
  return (
    <Flex
      h="90vh"
      w="18vw"
      direction="column"
      justify="space-around"
      position="sticky"
      top="5%"
      bgColor="#3e3d43"
      marginY={3}
      padding={4}
      borderRadius="4px"
      overflow="scrollY"
    >
      <SortSubPanel />
      <Divider />
      <FilterSubPanel />
    </Flex>
  );
};

export default SidePanel;
