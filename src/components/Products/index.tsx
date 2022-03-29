import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <Flex mt={["40px", "60px", "80px", "120px"]} align="center" direction="column" mb={["60px", "120px"]} w="100%">
        <Heading color="blue" fontSize={["31px", "39px"]}>
          our products
        </Heading>
        <Grid
          templateColumns={["1fr", "1fr", "1fr 1fr", "repeat(3, 1fr)"]}
          gap={["20px", "33px"]}
          alignItems="center"
          justifyContent="center"
          mt="80px"
          px="12px"
          display={["none", "none", "none", "flex"]}
        >
          <ProductCard />
        </Grid>
      </Flex>

      {/* Carousel */}
      <Flex
        w="100%"
        mx="auto"
        mb="80px"
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
              <Box
                boxShadow="2xl"
                rounded="md"
                bg="white"
                overflow="hidden"
                w="356px"
              >
                <Image src="/images/wellness.png" h="351px" w="100%" />
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
              <Box
                boxShadow="2xl"
                rounded="md"
                bg="white"
                overflow="hidden"
                w="356px"
              >
                <Image src="/images/active.png" h="351px" w="100%" />
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
              <Box
                boxShadow="2xl"
                rounded="md"
                bg="white"
                overflow="hidden"
                w="356px"
              >
                <Image src="/images/agecare.png" h="351px" w="100%" />
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
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
