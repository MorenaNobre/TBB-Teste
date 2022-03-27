import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import Products from "../components/Products";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Menu />
      <Banner />
      <Main />
      <Products />
    </Flex>
  )
}
