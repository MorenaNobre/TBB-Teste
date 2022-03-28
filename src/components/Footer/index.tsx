import { Divider, Flex, Grid, Icon, Image, Link, Text } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <Flex
      direction="column"
      w="100%"
      h="242px"
      bg="blue"
      alignItems="center"
      justifyContent="center"
      py="56px"
    >
      <Flex gap="10">
        <Text color="white" fontSize="16px">
          <a href="#">contact us</a>
        </Text>
        <Divider orientation="vertical" color="white" h="24px" />
        <Text color="white" fontSize="16px">
          <a href="#">faq</a>
        </Text>
        <Divider orientation="vertical" color="white" h="24px" />
        <Text color="white" fontSize="16px">
          <a href="#">site map</a>
        </Text>
        <Divider orientation="vertical" color="white" h="24px" />
        <Text color="white" fontSize="16px">
          <a href="#">privacy policy</a>
        </Text>
        <Divider orientation="vertical" color="white" h="24px" />
        <Text color="white" fontSize="16px">
          <a href="#">cookies policy</a>
        </Text>
        <Divider orientation="vertical" color="white" h="24px" />
        <Text color="white" fontSize="16px">
          <a href="#">legal notice</a>
        </Text>
      </Flex>
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1090px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        mt="12px"
      >
        <Image
          src="/images/u-labs.png"
          h="29px"
          gridColumn="1"
          justifySelf="start"
        />
        <Link href="https://www.instagram.com/intibiome/" target="_blank" gridColumn="3" justifySelf="end">
          <Icon as={BsInstagram} fontSize="48px" color="white" />
        </Link>
      </Grid>
    </Flex>
  );
}
