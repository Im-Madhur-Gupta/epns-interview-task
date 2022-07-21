import Products from "./components/Products";

import { Flex, Heading } from "@chakra-ui/react";

const App = () => {
  return (
    <Flex direction="column" bgColor="#FEFBF6">
      <Heading
        paddingX={8}
        paddingY={3}
        marginBottom={6}
        textDecoration="underline"
        fontFamily="'Edu VIC WA NT Beginner', cursive"
        bgColor="#f9e5c6"
      >
        Products - Sort & Filter
      </Heading>
      <Products />
    </Flex>
  );
};

export default App;
