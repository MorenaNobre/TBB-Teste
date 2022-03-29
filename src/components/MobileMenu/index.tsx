import { Flex, Icon, IconButton, Image, Text } from "@chakra-ui/react";
import { VscSearch } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function MobileMenu() {
  const [display, setDisplay] = useState("none");

  return (
    <Flex display={["flex", "flex", "none", "none"]} w="100%">
      <Flex align="center" justify="space-between" h="70px" bg="white" w="100%">
        <Flex>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<GiHamburgerMenu />}
            bg="transparent"
            onClick={() => setDisplay("flex")}
          />
        </Flex>
        <Image src="/images/logo-mb.png" alt=""/>
        <Icon as={VscSearch} color="dark-gray" fontSize="lg" mr={4} />
      </Flex>

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
        display={display}
      >
        <Flex align="center" justify="space-between" h="70px" bg="white">
          <Flex>
            <IconButton
              aria-label="Close Menu"
              size="lg"
              icon={<GrClose />}
              bg="transparent"
              onClick={() => setDisplay("none")}
            />
          </Flex>
          <Image src="/images/logo-mb.png" alt=""/>
          <Icon as={VscSearch} color="dark-gray" fontSize="lg" mr={4} />
        </Flex>
        <Flex direction="column" align="flex-start" gap={10} p={16}>
          <Text fontSize="16px">
            <a href="#">brand philosophy</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">product tecnology</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">all products</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">intibione wellness</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">intibione active</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">intibione agecare</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">article 1</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">article 2</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">article 3</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">faq</a>
          </Text>
          <Text fontSize="16px">
            <a href="#">contact us</a>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
