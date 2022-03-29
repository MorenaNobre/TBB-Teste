import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

import DiscoveryCard from "./DiscoveryCard";

export default function Discoveries() {
  return (
    <>
      <Flex
        align="center"
        direction="column"
        mb={[ "60px" ,"120px"]}
        w="100%"
        justify="center"
      >
        <Heading
          color="blue"
          textAlign="center"
          fontSize={["31px", "39px"]}
          px="6"
          mb={[ "40px", "0", "40px", "0"]}
        >
          keep up to date with our discoveries
        </Heading>
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(3, 1fr)"]}
          gap={["12px", "20px", "33px"]}
          alignItems="center"
          justifyContent="center"
          mt="80px"
          display={["none", "none", "none", "flex"]}
        >
          <DiscoveryCard />
        </Grid>

        {/* Carousel */}
        <Flex
          w="100%"
          mx="auto"
          display={["flex", "flex", "flex", "none"]}
        >
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
            }}
            style={{ width: "100%", flex: "1" }}
          >
            <SwiperSlide>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
              >
                <Flex
                  direction="column"
                  boxShadow="2xl"
                  rounded="md"
                  bg="white"
                  overflow="hidden"
                  w="356px"
                >
                  <Image src="/images/young-lady.png" h="232px" w="100%" alt=""/>
                  <Flex align="center" justify="space-between" bg="white">
                    <Flex direction="column" w="100%">
                      <Text p="9" fontSize="20px" textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
              >
                <Flex
                  direction="column"
                  boxShadow="2xl"
                  rounded="md"
                  bg="white"
                  overflow="hidden"
                  w="356px"
                >
                  <Image src="/images/old-lady.png" h="232px" w="100%" alt=""/>
                  <Flex align="center" justify="space-between" bg="white">
                    <Flex direction="column" w="100%">
                      <Text p="9" fontSize="20px" textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
              >
                <Flex
                  direction="column"
                  boxShadow="2xl"
                  rounded="md"
                  bg="white"
                  overflow="hidden"
                  w="356px"
                >
                  <Image src="/images/bubbles.png" h="232px" w="100%" alt=""/>
                  <Flex align="center" justify="space-between" bg="white">
                    <Flex direction="column" w="100%">
                      <Text p="9" fontSize="20px" textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>

        <Button
          bg="blue"
          color="white"
          _hover={{ bg: "dark-blue" }}
          size="lg"
          px="126px"
          py="32px"
          fontSize="20px"
          borderRadius="16px"
          mt={["60px", "105px"]}
        >
          see more
        </Button>
      </Flex>
    </>
  );
}
