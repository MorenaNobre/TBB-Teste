import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/theme";
import Fonts from "../components/Fonts";


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App;
