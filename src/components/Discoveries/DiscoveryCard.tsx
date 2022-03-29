import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function DiscoveryCard() {
  return (
    <>
      <Flex direction="column" boxShadow="2xl" rounded="md" bg="white" overflow="hidden" w="356px">
        <Image src="/images/young-lady.png" h="232px" w="100%" />
        <Flex align="center" justify="space-between" bg="white">
          <Flex direction="column" w="100%">
            <Text p="9" fontSize="20px" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" boxShadow="2xl" rounded="md" bg="white" overflow="hidden" w="356px">
        <Image src="/images/old-lady.png" h="232px" w="100%" />
        <Flex align="center" justify="space-between" bg="white">
          <Flex direction="column" w="100%">
            <Text p="9" fontSize="20px" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction="column" boxShadow="2xl" rounded="md" bg="white" overflow="hidden" w="356px">
        <Image src="/images/bubbles.png" h="232px" w="100%" />
        <Flex align="center" justify="space-between" bg="white">
          <Flex direction="column" w="100%">
            <Text p="9" fontSize="20px" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
