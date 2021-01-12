import React from "react";
import { Flex, Heading, useColorMode } from "@chakra-ui/react";
import Header from "../sections/Header";

export default function ResearchLayout(props) {
    const { colorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      align="left"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header />
      <Heading
        as="h2"
        size="3xl"
        fontWeight="bold"
        color="primary.800"
        // eslint-disable-next-line
        color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
        textAlign={"center"}
      >
        Research
      </Heading>
      {props.children}
    </Flex>
  );
}