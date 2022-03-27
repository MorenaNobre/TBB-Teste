import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Menu />
      <Banner />
      <Main />
    </Flex>
  )
}
