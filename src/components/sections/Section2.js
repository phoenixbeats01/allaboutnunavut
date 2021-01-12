import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { GiMining } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa';
import { RiBuildingLine } from 'react-icons/ri';

import Arrow from '../ui/Arrow';

export default function Section2() {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === 'light' ? 'section.light' : 'section.dark'}>
      <Flex
        justify={'center'}
        wrap="no-wrap"
        minH="85vh"
        px={8}
        py={10}
        id="economy"
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color="primary.800"
          align="center"
          // eslint-disable-next-line
          color={colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'}
          pb={16}
        >
          The economy of Nunavut
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing={5} align="center" mb={5}>
          <Box
            bg={colorMode === 'light' ? 'card.lightCard' : 'card.darkCard'}
            p={10}
            boxShadow="lg"
            borderRadius="0.75rem"
          >
            <GiMining size={72} color="white" style={icons} />
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
              color="primary.800"
              mt={4}
              mb={3}
              // eslint-disable-next-line
              color={
                colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
              }
              textAlign={'center'}
            >
              Mining
            </Heading>
            <Heading
              as="h5"
              size="sm"
              // eslint-disable-next-line
              color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={'center'}
            >
              The Mining industry is the biggest contributor to Nunavut’s GDP.
              In 2019 the Mining industry brought in $876.1 million and employed
              over 2000 people.
            </Heading>
            <Link to="research#economy">
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
          </Box>
          <Box
            bg={colorMode === 'light' ? 'card.lightCard' : 'card.darkCard'}
            p={10}
            boxShadow="lg"
            borderRadius="0.75rem"
          >
            <FaTools size={72} color="white" style={icons} />
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
              color="primary.800"
              mt={4}
              mb={3}
              // eslint-disable-next-line
              color={
                colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
              }
              textAlign={'center'}
            >
              Construction
            </Heading>
            <Heading
              as="h5"
              size="sm"
              // eslint-disable-next-line
              color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={'center'}
            >
              The Construction industry is the second largest contributor to
              Nunavut’s GDP. In 2019 the Construction industry brought in $585.1
              million and employed 969 people.
            </Heading>
            <Link to="research#economy">
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
          </Box>
          <Box
            bg={colorMode === 'light' ? 'card.lightCard' : 'card.darkCard'}
            p={10}
            boxShadow="lg"
            borderRadius="0.75rem"
          >
            <RiBuildingLine size={72} color="white" style={icons} />
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
              color="primary.800"
              mt={4}
              mb={3}
              // eslint-disable-next-line
              color={
                colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
              }
              textAlign={'center'}
            >
              Government
            </Heading>
            <Heading
              as="h5"
              size="sm"
              // eslint-disable-next-line
              color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={'center'}
            >
              The Government is the third largest contributor to Nunavut’s GDP.
              In 2019 the Government brought in $561.5 million and employed
              6,762 people.
            </Heading>
            <Link to="/research#economy">
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
          </Box>
          <Box
            bg={colorMode === 'light' ? 'card.lightCard' : 'card.darkCard'}
            p={10}
            boxShadow="lg"
            borderRadius="0.75rem"
          >
            <RiBuildingLine size={72} color="white" style={icons} />
            <Heading
              as="h4"
              size="md"
              fontWeight="bold"
              color="primary.800"
              mt={4}
              mb={3}
              // eslint-disable-next-line
              color={
                colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
              }
              textAlign={'center'}
            >
              Real Estate
            </Heading>
            <Heading
              as="h5"
              size="sm"
              // eslint-disable-next-line
              color={colorMode === 'light' ? 'text.lightText' : 'text.darkText'}
              fontWeight="normal"
              lineHeight={1.5}
              textAlign={'center'}
            >
              The Real Estate industry is the third largest contributor to
              Nunavut’s GDP. In 2019 the Real Estate industry brought in $271.6
              million and employed 888 people.{' '}
            </Heading>
            <Link to="/research#economy">
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
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex
        justify={{ base: 'center' }}
        wrap="no-wrap"
        id="economy"
        w="100%"
        direction="column"
        align="center"
        maxW={{ xl: '1200px' }}
        m="0 auto"
      >
        <Arrow to="people" />
      </Flex>
    </Box>
  );
}

const icons = {
  borderRadius: '100%',
  padding: '1rem',

  background:
    'linear-gradient(120deg, rgba(44,122,123,1), rgba(79,209,197,1) 100%)',
};
