import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu() {
  return (
    <>
      <Flex
        bg="blue"
        color="white"
        align="center"
        justify="center"
        h="49px"
        w="100%"
        px="1rem"
        display={["none", "none", "flex", "flex"]}
      >
        <Flex maxW="744px" m="auto" gap={["10px", "32px", "78px"]}>
          <Flex align="center" gap={2} cursor="pointer">
            <Text fontSize="lg">about us</Text>
            <Icon as={IoIosArrowDown} fontSize={[14, 22]} />
          </Flex>
          <Flex align="center" gap={2} cursor="pointer">
            <Text fontSize="lg">our products</Text>
            <Icon as={IoIosArrowDown} fontSize={[14, 22]} />
          </Flex>
          <Flex align="center" gap={2} cursor="pointer">
            <Text fontSize="lg">intimate health</Text>
            <Icon as={IoIosArrowDown} fontSize={[14, 22]} />
          </Flex>
          <Flex align="center" cursor="pointer">
            <Text fontSize="lg">contact us</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
