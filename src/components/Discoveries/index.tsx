import { Button, Flex, Grid, Heading } from "@chakra-ui/react";
import DiscoveryCard from "./DiscoveryCard";

export default function Discoveries() {
  return (
    <>
      <Flex align="center" direction="column" mb="120px">
        <Heading color="blue">keep up to date with our discoveries</Heading>
        <Grid
          templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)"]}
          gap={["20px", "33px"]}
          alignItems="center"
          justifyContent="center"
          mt="80px"
        >
          <DiscoveryCard />
        </Grid>
        <Button
          bg="blue"
          color="white"
          _hover={{ bg: "dark-blue" }}
          size="lg"
          px="126px"
          py="32px"
          fontSize="20px"
          borderRadius="16px"
          mt="105px"
        >
          see more
        </Button>
      </Flex>
    </>
  );
}
