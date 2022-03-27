import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import {VscSearch} from "react-icons/vsc"

export default function Header() {
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={["70px", "80px"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1090px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        <Image
          src="images/logo-mb.png"
          alt="O logo é o nome da marca em cinza escuro e azul que se chama Intibiome e abaixo tem o dizer (em inglês) que foi desenvolvida em parceria com ginecologistas"
          w={["143px", "195px"]}
          h={["48px", "79px"]}
          justifySelf="center"
          gridColumn="2"
        />
        <Icon as={VscSearch} fontSize={22} gridColumn="3" justifySelf="end" />
      </Grid>
    </Flex>
  );
}
