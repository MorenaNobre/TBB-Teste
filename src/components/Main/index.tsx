import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex direction="column" align="center" w="100%">
      <Flex direction="column" maxW="550px" align="center" w="100%" m="auto">
        <Heading mt="80px" fontSize="39px" color="blue">
          we're here to help
        </Heading>
        <Text justifySelf="center" textAlign="center" mt="40px" fontSize="20px">
          When it comes to caring for our most intimate areas, we’ve lost our
          connection. <br />
          Embarrassed, unwilling, or unable to communicate with others, we’re
          needlessly neglecting the parts of our bodies that need it most.{" "}
          <br /> We’re here to help. Providing you with the expertise, knowledge
          and products you need to feel confident in your personal care.
        </Text>
      </Flex>
      <Image src="/images/icons.png" w="1132px" h="259px" mt="40px" />
      <Flex direction="column" maxW="744px" align="center" w="100%" m="auto">
        <Heading mt="80px" fontSize="39px" color="blue">
          whatever your age. whatever your lifestyle. whatever your interests.
        </Heading>
        <Text justifySelf="center" textAlign="center" mt="40px" fontSize="20px">
          Co-created with gynaecologists, our revolutionary products have been
          expertly developed to support your intimate microbiome and pH balance,
          and strengthen overall natural health. <br /> As the experts in
          intimate hygiene, we want to bring discussion about intimate wellness
          care out of the dark and demystify the taboos that surround it.
        </Text>
      </Flex>
    </Flex>
  );
}