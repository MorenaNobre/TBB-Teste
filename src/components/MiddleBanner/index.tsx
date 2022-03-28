import { Flex, Image } from "@chakra-ui/react";

export default function MiddleBanner() {
  return (
    <Flex>
      <Image
        src="/images/middle-banner.png"
        w="100%"
        h={["237px", "437px"]}
        sizes="cover"
        mb="120px"
      />
    </Flex>
  )
}