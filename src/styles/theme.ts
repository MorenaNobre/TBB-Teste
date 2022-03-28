import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

export const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    blue: "#389CD6",
    "dark-blue": "#286e96",
    "dark-gray": "#7B7070",
    green: "#309D5F",
    pink: "#EE6381",
  },
  fonts: {
    heading: "Trebuchet MS",
    body: "Trebuchet MS",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "dark-gray",
      },
      a: {
        stylelist: "none",
      },
    },
  },
});
