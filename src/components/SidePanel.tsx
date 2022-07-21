import { Flex, Select } from "@chakra-ui/react";

const SidePanel = () => {
  return (
    <Flex
      position="sticky"
      top="10%"
      w="18vw"
      bgColor="#3e3d43"
      h="80vh"
      marginY={3}
      padding={6}
      borderRadius="4px"
    >
      <Select
        placeholder="Sort By"
        variant="filled"
        bg="white"
        _focus={{ border: "none", bg: "white" }}
      >
        <option value="option1">Featured</option>
        <option value="option2">Price: Low to High</option>
        <option value="option3">Price: High to Low</option>
        <option value="option4">Avg. Customer Rating</option>
      </Select>
    </Flex>
  );
};

export default SidePanel;
