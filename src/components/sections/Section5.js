import React from 'react';
// import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import { HashLink as Link } from 'react-router-hash-link';
import Arrow from '../ui/Arrow';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import city from '../images/new4.jpg';

export default function Section5() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        wrap="no-wrap"
        minH="85vh"
        px={8}
        mb={16}
        id="cities"
      >
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
          <Image src={city} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            color="primary.800"
            // eslint-disable-next-line
            color={
              colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
            }
            textAlign={['center', 'center', 'left', 'left']}
          >
            Nunavut's major cities
          </Heading>
          <Heading
            as="h2"
            size="md"
            // eslint-disable-next-line
            color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            Nunavut’s population of 35,944 residents is spread across 25
            communities. The largest community, Iqaluit is also the capital and
            only city in Nunavut, it houses 7,740 residents which is the largest
            out of the 25 communities. In a 2016 census, the population of
            Iqaluit was 7,740, an increase of 15.5 percent from the 2011 census.
          </Heading>
          <Link to="research#cities">
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="primary"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
              mt={5}
            >
              Read More
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Arrow to="attractions" />
    </>
  );
}
