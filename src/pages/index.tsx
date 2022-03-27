import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Menu />
    </Flex>
  )
}
