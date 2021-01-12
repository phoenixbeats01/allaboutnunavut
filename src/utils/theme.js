import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: '#E6FFFA', // teal 50
    100: "#B2F5EA", // teal 100
    200: "#81E6D9", // teal 200
    300: "#4FD1C5", // teal 300
    400: "#38B2AC", // teal 400
    500: "#319795", // teal 500
    600: "#2C7A7B", // teal 600
    700: "#285E61", // teal 700
    800: "#234E52", // teal 800
    900: "#1D4044" // teal 900
  },
  text: {
    darkHeader: '#ededee', // dark header
    darkText: '#A0AEC0',  // dark text
    
    lightHeader: '#2d3748', // light header
    lightText: '#4A5568',  // light text

  },
  card: {
    darkCard: '#2D3748',
    lightCard: '#fff'
  },
  section: {
    dark: '#171923',
    light: '#f7fafc'
  }
};

const customTheme = extendTheme({ 
  colors, 
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark',
  }, 
});


export default customTheme;
