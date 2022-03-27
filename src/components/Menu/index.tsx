import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu() {
  return (
    <Flex
      bg="blue"
      color="white"
      align="center"
      justify="center"
      gap={["10px", "48px"]}
      h="49px"
      w="100%"
      px="1rem"
    >
      <Flex align="center" gap={2}>
        <Text fontSize="lg">about us</Text>
        <Icon as={IoIosArrowDown} fontSize={[14, 22]} />
      </Flex>
      <Flex align="center" gap={2}>
        <Text fontSize="lg">our products</Text>
        <Icon as={IoIosArrowDown} fontSize={[14, 22]} />
      </Flex>
      <Flex align="center" gap={2}>
        <Text fontSize="lg">intimate health</Text>
        <Icon as={IoIosArrowDown} fontSize={[14, 22]} />
      </Flex>
      <Flex align="center">
        <Text fontSize="lg">contact us</Text>
      </Flex>
    </Flex>
  );
}
