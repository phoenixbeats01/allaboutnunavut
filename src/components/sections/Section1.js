import React from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Arrow from '../ui/Arrow';

import book from '../images/new2.webp';

export default function Section1() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        wrap="no-wrap"
        minH="85vh"
        px={8}
        mb={16}
        id="history"
      >
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mt={{ base: 12, md: 0 }}>
          <Image src={book} size="100%" rounded="1rem" shadow="2xl" />
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
            The history of Nunavut
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
            On April 1, 1999 the map of Canada was re-drawn: the Northwest
            Territories was divided into two territories to allow for the
            creation of Nunavut, a homeland for Canada's Inuit. The creation of
            Nunavut is testament to the strength of Inuit political leaders and
            to the flexibility of Canadian political institutions.
          </Heading>
          <Link to="research#history">
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
      <Arrow to="economy" />
    </>
  );
}
