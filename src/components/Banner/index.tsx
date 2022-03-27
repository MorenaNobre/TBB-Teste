import { Flex, Image } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex>
      <Image
        src="/images/banner-web.png"
        w="100%"
        h={["250px", "550px"]}
        sizes="cover"
      />
    </Flex>
  );
}
