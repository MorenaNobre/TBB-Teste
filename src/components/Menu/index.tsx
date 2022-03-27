import { Flex, Icon, Text } from "@chakra-ui/react";
import {IoIosArrowDown} from "react-icons/io"

export default function Menu() {
  return (
    <Flex bg="blue" color="white" align="center" justify="center" gap="52px" h="49px" w="100%">
      <Flex align="center" gap={2}>
        <Text fontSize="md">about us</Text>
        <Icon as={IoIosArrowDown} fontSize={[14, 22]}/>
      </Flex>
      <Flex align="center" gap={2}>
        <Text>our products</Text>
        <Icon as={IoIosArrowDown} fontSize={[14, 22]}/>
      </Flex>
      <Flex align="center" gap={2}>
        <Text>intimate health</Text>
        <Icon as={IoIosArrowDown} fontSize={[14, 22]}/>
      </Flex>
      <Flex align="center">
        <Text>contact us</Text>
      </Flex>
    </Flex>
  );
}
