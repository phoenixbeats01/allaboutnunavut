import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  useColorMode
} from "@chakra-ui/react";
import Arrow from '../ui/Arrow'

import { FaUserTie } from 'react-icons/fa';


export default function Hero() {
  const { colorMode } = useColorMode();
  return (
      <Box bg={colorMode === 'light' ? "section.light" : "section.dark"}>
        <Flex
            justify={{ base: "center" }}
            wrap="no-wrap"
            minH="85vh"
            px={8}
            py={16}
            id="government"
            w="100%"

            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
          >  
              <Heading
                  as="h1"
                  size="2xl"
                  fontWeight="bold"
                  color="primary.800"
                  align="center"
                  // eslint-disable-next-line
                  color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                  mb={16}
              >
                Nunavut's government
              </Heading>
              <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="2xl" borderRadius="0.75rem">
                <FaUserTie size={52} color="gold" />
                <Heading
                  as="h3"
                  size="lg"
                  fontWeight="bold"
                  color="primary.800"
                  mt={4} 
                  mb={3}
                  // eslint-disable-next-line
                  color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                  textAlign={"center"}
                >
                  Joe Savikataaq
                </Heading>
                <Heading
                    as="h5"
                    size="sm"
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                    fontWeight="normal"
                    lineHeight={1.5}
                    textAlign={"center"}
                  >
                  Premier                    
                </Heading>
              </Box>
              <SimpleGrid 
                columns={[3, 1, 3]}
                spacing={7}
                mt={6}
                align="center"
              >
                <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="lg" borderRadius="0.75rem">
                  <FaUserTie size={32} style={{ color: colorMode === 'light' ? "darkHeader" : "lightHeader" }} />
                  <Heading
                    as="h4"
                    size="md"
                    fontWeight="bold"
                    color="primary.800"
                    mt={4} 
                    mb={3}
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                    textAlign={"center"}
                  >
                    David Akeeago
                  </Heading>
                  <Heading
                      as="h5"
                      size="sm"
                      // eslint-disable-next-line
                      color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                      fontWeight="normal"
                      lineHeight={1.5}
                      textAlign={"center"}
                    >
                    Cabinet                    
                  </Heading>
                </Box>
                <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="lg" borderRadius="0.75rem">
                  <FaUserTie size={32} style={{ color: colorMode === 'light' ? "darkHeader" : "lightHeader" }} />
                  <Heading
                    as="h4"
                    size="md"
                    fontWeight="bold"
                    color="primary.800"
                    mt={4} 
                    mb={3}
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                    textAlign={"center"}
                  >
                    Elisapee Sheutiapik
                  </Heading>
                  <Heading
                      as="h5"
                      size="sm"
                      // eslint-disable-next-line
                      color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                      fontWeight="normal"
                      lineHeight={1.5}
                      textAlign={"center"}
                    >
                    Cabinet                    
                  </Heading>
                </Box>
                <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="lg" borderRadius="0.75rem">
                  <FaUserTie size={32} style={{ color: colorMode === 'light' ? "darkHeader" : "lightHeader" }} />
                  <Heading
                    as="h4"
                    size="md"
                    fontWeight="bold"
                    color="primary.800"
                    mt={4} 
                    mb={3}
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                    textAlign={"center"}
                  >
                    Jeannie Ehaloak
                  </Heading>
                  <Heading
                      as="h5"
                      size="sm"
                      // eslint-disable-next-line
                      color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                      fontWeight="normal"
                      lineHeight={1.5}
                      textAlign={"center"}
                    >
                    Cabinet                    
                  </Heading>
                </Box>
                <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="lg" borderRadius="0.75rem">
                  <FaUserTie size={32} style={{ color: colorMode === 'light' ? "darkHeader" : "lightHeader" }} />
                  <Heading
                    as="h4"
                    size="md"
                    fontWeight="bold"
                    color="primary.800"
                    mt={4} 
                    mb={3}
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                    textAlign={"center"}
                  >
                    George Hickes
                  </Heading>
                  <Heading
                      as="h5"
                      size="sm"
                      // eslint-disable-next-line
                      color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                      fontWeight="normal"
                      lineHeight={1.5}
                      textAlign={"center"}
                    >
                    Cabinet                    
                  </Heading>
                </Box>
                <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="lg" borderRadius="0.75rem">
                  <FaUserTie size={32} style={{ color: colorMode === 'light' ? "darkHeader" : "lightHeader" }} />
                  <Heading
                    as="h4"
                    size="md"
                    fontWeight="bold"
                    color="primary.800"
                    mt={4} 
                    mb={3}
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                    textAlign={"center"}
                  >
                    David Joanasie
                  </Heading>
                  <Heading
                      as="h5"
                      size="sm"
                      // eslint-disable-next-line
                      color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                      fontWeight="normal"
                      lineHeight={1.5}
                      textAlign={"center"}
                    >
                    Cabinet                    
                  </Heading>
                </Box>
                <Box w="100%" bg={colorMode === 'light' ? "card.lightCard" : "card.darkCard"} align="center" p={10} boxShadow="lg" borderRadius="0.75rem">
                  <FaUserTie size={32} style={{ color: colorMode === 'light' ? "darkHeader" : "lightHeader" }} />
                  <Heading
                    as="h4"
                    size="md"
                    fontWeight="bold"
                    color="primary.800"
                    mt={4} 
                    mb={3}
                    // eslint-disable-next-line
                    color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}
                    textAlign={"center"}
                  >
                    Lorne Kusugak
                  </Heading>
                  <Heading
                      as="h5"
                      size="sm"
                      // eslint-disable-next-line
                      color={colorMode === 'light' ? "text.lightText" : "text.darkText"}
                      fontWeight="normal"
                      lineHeight={1.5}
                      textAlign={"center"}
                    >
                    Cabinet                    
                  </Heading>
                </Box>
              </SimpleGrid >
          </Flex>
        <Flex
          justify={{ base: "center" }}
          wrap="no-wrap"
          id="economy"
          w="100%"

          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
        >
          <Arrow
             to="landforms"
          />
        </Flex>
    </Box>
  )
}