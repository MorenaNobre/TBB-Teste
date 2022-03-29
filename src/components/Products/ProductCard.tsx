import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { SwiperSlide } from "swiper/swiper-react";

export default function ProductCard() {
  return (
    <>
      <Box boxShadow="2xl" rounded="md" bg="white" overflow="hidden" w="356px">
        <Image src="/images/wellness.png" h="351px" w="100%" alt=""/>
        <Flex align="center" justify="space-between" bg="white">
          <Flex direction="column" w="100%">
            <Text p="9" fontSize="20px" textAlign="center">
              intibiome wellness daily intimate wash
            </Text>
            <Flex bg="blue" align="center" justify="center" h="73px">
              <Heading color="white" fontSize="25px">
                wellness
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box boxShadow="2xl" rounded="md" bg="white" overflow="hidden" w="356px">
        <Image src="/images/active.png" h="351px" w="100%" alt=""/>
        <Flex align="center" justify="space-between" bg="white">
          <Flex direction="column" w="100%">
            <Text p="9" fontSize="20px" textAlign="center">
              intibiome active extra protection intimate wash
            </Text>
            <Flex bg="green" align="center" justify="center" h="73px">
              <Heading color="white" fontSize="25px">
                active
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box boxShadow="2xl" rounded="md" bg="white" overflow="hidden" w="356px">
        <Image src="/images/agecare.png" h="351px" w="100%" alt=""/>
        <Flex align="center" justify="space-between" bg="white">
          <Flex direction="column" w="100%">
            <Text p="9" fontSize="20px" textAlign="center">
              intibiome agecare dryness relief intimate wash
            </Text>
            <Flex bg="pink" align="center" justify="center" h="73px">
              <Heading color="white" fontSize="25px">
                agecare
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
