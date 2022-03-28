import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Discoveries from "../components/Discoveries";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Menu from "../components/Menu";
import MiddleBanner from "../components/MiddleBanner";
import Products from "../components/Products";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Menu />
      <Banner />
      <Main />
      <Products />
      <MiddleBanner />
      <Discoveries />
      <Footer />
    </Flex>
  )
}
