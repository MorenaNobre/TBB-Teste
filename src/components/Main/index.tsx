import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex direction="column" align="center" w="100%" px="18px">
      <Flex direction="column" maxW="550px" align="center" w="100%" m="auto">
        <Heading mt={["40px", "80px"]} fontSize={["31px", "39px"]} color="blue">
          we&apos;re here to help
        </Heading>
        <Text
          justifySelf="center"
          textAlign="center"
          mt="40px"
          fontSize={["16px", "20px"]}
        >
          When it comes to caring for our most intimate areas, we&apos;ve lost our
          connection. <br />
          Embarrassed, unwilling, or unable to communicate with others, we&apos;re
          needlessly neglecting the parts of our bodies that need it most.{" "}
          <br /> We&apos;re here to help. Providing you with the expertise, knowledge
          and products you need to feel confident in your personal care.
        </Text>
      </Flex>
      <Image
        src="/images/icons.png"
        w={["432px", "768px", "982px", "1132px"]}
        h={["120px", "150px", "232px", "350px"]}
        mt="40px"
        alt=""
      />
      <Flex direction="column" maxW="650px" align="center" w="100%" m="auto">
        <Heading
          mt={["40px", "80px"]}
          fontSize={["31px", "39px"]}
          color="blue"
          textAlign="center"
        >
          whatever your age. whatever your lifestyle. whatever your interests.
        </Heading>
        <Text
          justifySelf="center"
          textAlign="center"
          mt="40px"
          fontSize={["16px", "20px"]}
        >
          When it comes to caring for our most intimate areas, we&apos;ve lost our
          connection. <br />
          Embarrassed, unwilling, or unable to communicate with others, we&apos;re
          needlessly neglecting the parts of our bodies that need it most.
          <br /> We&apos;re here to help. Providing you with the expertise, knowledge
          and products you need to feel confident in your personal care.
        </Text>
      </Flex>
    </Flex>
  );
}
