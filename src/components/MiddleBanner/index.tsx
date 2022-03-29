import { Flex, Image } from "@chakra-ui/react";

export default function MiddleBanner() {
  return (
    <Flex>
      <Image
        src="/images/middle-banner.png"
        w="100%"
        sizes="cover"
        mb="120px"
        display={["none", "none", "flex", "flex"]}
      />
      <Image
        src="/images/middle-banner-mobile.png"
        w="100%"
        sizes="cover"
        mb="120px"
        display={["flex", "flex", "none", "none"]}
      />
    </Flex>
  )
}