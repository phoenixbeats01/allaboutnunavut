import React from "react";

import Hero from "../components/sections/Hero";
// Sections 
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/Section2";
import Section3 from "../components/sections/Section3";
import Section4 from "../components/sections/Section4";
import Section5 from "../components/sections/Section5";
import Section6 from "../components/sections/Section6";
import Section7 from "../components/sections/Section7";
import Section8 from "../components/sections/Section8";

import LandingLayout from "../components/layouts/LandingLayout";
import { Flex } from "@chakra-ui/react";

export default function Landing() {
  return (
    <>
    <LandingLayout>
      <Hero />
      <Section1 />
    </LandingLayout>

    <Section2 />

    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Flex>

    <Section7 />

    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Section8 />
    </Flex>
    </>
  );
}
