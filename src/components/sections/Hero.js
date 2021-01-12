import React from 'react';
// import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import Arrow from '../ui/Arrow';

import moose from '../images/new1.jpg';

export default function Hero() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        wrap="no-wrap"
        minH="70vh"
        id="home"
        px={8}
        mb={16}
      >
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
            Explore the history rich province of{' '}
            <span as="h2" size="2xl" style={{ color: '#38B2AC' }}>
              Nunavut
            </span>
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
            From the history to the breathtaking landmarks, come visit today and
            see what Nunavut has to offer.
          </Heading>
        </Stack>
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mt={{ base: 12, md: 0 }}>
          <Image src={moose} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
      <Arrow to="history" />
    </>
  );
}
