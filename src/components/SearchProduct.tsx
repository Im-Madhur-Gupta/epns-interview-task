import useStore from "../store";

import { Input } from "@chakra-ui/react";

const SearchProduct = () => {
  const setSearchFilter = useStore((state) => state.setSearchFilter);

  const searchKeyChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTimeout(() => {
      setSearchFilter(event.target.value.trim());
    }, 500);
  };

  return (
    <Input
      placeholder="Search for products, brands and more"
      onChange={searchKeyChangeHandler}
      marginY={4}
    />
  );
};

export default SearchProduct;
