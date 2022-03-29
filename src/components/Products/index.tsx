import { Flex, Grid, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <Flex mt="120px" align="center" direction="column" mb="120px" w="100%">
        <Heading color="blue" fontSize={["31px", "39px"]}>
          our products
        </Heading>
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(3, 1fr)"]}
          gap={["20px", "33px"]}
          alignItems="center"
          justifyContent="center"
          mt="80px"
          px="12px"
        >
          <ProductCard />
        </Grid>
      </Flex>
    </>
  );
}
