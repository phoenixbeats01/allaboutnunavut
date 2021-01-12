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

import mountain from '../images/new5.jpg';

export default function Section6() {
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
        id="attractions"
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
            Tourist attractions in Nunavut
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
            The most popular tourist attraction in Nunavut is Baffin Island.The
            island is the fifth largest in the world with a coastline and
            landscape that vary considerably. It has multiple national parks,
            the most notable being Auyuittuq National Park. Top sights in
            Auyuittuq National Park are Thor Peak, Mount Asgard and Akshayuk
            Pass. Each of these sights have a beautiful scene with different
            activities such as hiking, camping and sightseeing.{' '}
          </Heading>
          <Link to="research#attractions">
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
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mt={{ base: 12, md: 0 }}>
          <Image src={mountain} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
      <Arrow to="government" />
    </>
  );
}
