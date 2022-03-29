import { Flex, Image } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex w="100%">
      <Image
        src="/images/banner-web.png"
        w="100%"
        sizes="cover"
        display={["none", "none", "flex", "flex"]}
        alt="Banner"
      />
      <Image 
        src="/images/banner-mobile.png"
        w="100%"
        sizes="cover"
        display={["flex", "flex", "none", "none"]}
        alt="Banner"
      />
    </Flex>
  );
}
