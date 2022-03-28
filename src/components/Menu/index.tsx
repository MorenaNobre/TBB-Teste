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
      {/* <Flex display={["flex", "flex", "none", "none"]} w="100%">
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<GiHamburgerMenu />}
          bg="transparent"
        />
        <Flex
          w="100vw"
          bg="blue"
          color="white"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          direction="column"
        >
          <Flex direction="column" align="flex-start">
            <Text>brand philosophy</Text>
            <Text>product tecnology</Text>
            <Text>all products</Text>
            <Text>intibione wellness</Text>
            <Text>intibione active</Text>
            <Text>intibione agecare</Text>
            <Text>article 1</Text>
            <Text>article 2</Text>
            <Text>article 3</Text>
            <Text>faq</Text>
            <Text>contact us</Text>
          </Flex>
        </Flex>
      </Flex> */}
    </>
  );
}
