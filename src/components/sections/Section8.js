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
import { ArrowForwardIcon } from '@chakra-ui/icons';

import landforms from '../images/new6.jpg';

export default function Section8() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        wrap="no-wrap"
        minH="95vh"
        px={8}
        mb={16}
        id="landforms"
      >
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mt={{ base: 12, md: 0 }}>
          <Image src={landforms} size="100%" rounded="1rem" shadow="2xl" />
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
            mt={8}
          >
            Nunavut's natural landforms
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
            Nunavut comprises two distinct physiographic regions: the Canadian
            Shield, including the mainland and the islands around Hudson Bay,
            and the Arctic Archipelago in the north. The flat, often poorly
            drained lowlands of the Canadian Shield are underlain with ancient
            rock more than 1 billion years old. Much of the land in Nunavut is
            characterized as tundra, which is bare, rocky, treeless and covered
            in permafrost.{' '}
          </Heading>
          <Link to="research#landforms">
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
      {/* <Arrow to="climate"/> */}
    </>
  );
}
