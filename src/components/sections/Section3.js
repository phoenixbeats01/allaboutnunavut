import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Button,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Arrow from '../ui/Arrow';

import people from '../images/new3.jpg';

export default function Section3() {
  const { colorMode } = useColorMode();
  return (
    <>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        wrap="no-wrap"
        minH="90vh"
        px={8}
        mb={16}
        id="people"
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
            mt={8}
          >
            The people of Nunavut
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
            The majority of people in Nunavut are Inuit, 84% in fact. Nunavut’s
            vast size and harsh climate enabled its sparse Inuit population to
            preserve their traditional nomadic lifestyle as hunters and fishers
            for centuries. Traditional Inuit religious practices include animism
            and shamanism, in which spiritual healers mediate with spirits.
            Today many Inuit follow Christianity, but traditional Inuit
            spirituality continues as part of a living, oral tradition and part
            of contemporary Inuit society.
          </Heading>
          <Link to="research#people">
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
          <Image src={people} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
      <Arrow to="climate" />
    </>
  );
}
