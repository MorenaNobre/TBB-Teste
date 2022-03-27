import { Flex, Grid, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
    <Flex mt="120px" align="center" direction="column">
      <Heading color="blue">our products</Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
        gap={["20px", "33px"]}
        alignItems="center"
        justifyContent="center"
        // px={["30px", "0"]}
        mt="80px"
      >
        <ProductCard />
      </Grid>
      </Flex>
    </>
  );
}