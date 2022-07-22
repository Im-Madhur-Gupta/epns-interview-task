import ProductType from "../types/ProductType";

import { Center, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

type ProductComponentType = {
  product: ProductType;
};

const Product = ({ product }: ProductComponentType) => {
  const { title, price, rating, noOfReviews, category, description, image } =
    product;
  return (
    <Grid
      templateAreas={`"image title title title title"
                      "image category rating reviews price"
                      "image description description description description"`}
      gridTemplateRows="1fr 0.75fr 0.5fr"
      gridTemplateColumns="repeat(5, 1fr)"
      h="30vh"
      rowGap={1}
      columnGap={5}
      color="blackAlpha.700"
      fontWeight="bold"
      paddingX={5}
      paddingY={5}
      marginY={3}
      borderWidth={1}
      borderColor="#aaa9b1"
      borderRadius="4px"
    >
      <GridItem area={"image"}>
        <Center h="100%">
          <Image h="90%" src={image} alt={title} />
        </Center>
      </GridItem>
      <GridItem area={"title"}>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
      </GridItem>
      <GridItem area={"category"}>{category}</GridItem>
      <GridItem area={"rating"}>{`${rating}/5`}</GridItem>
      <GridItem area={"reviews"}>{`${noOfReviews} reviews`}</GridItem>
      <GridItem area={"price"} fontSize={20}>{`$ ${price}`}</GridItem>
      <GridItem
        area={"description"}
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        {description}
      </GridItem>
    </Grid>
  );
};

export default Product;
