import React from 'react';
import { Heading, useColorMode } from '@chakra-ui/react';

import Arrow from '../ui/Arrow';

import Graph from './Graph';

export default function Section4() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Heading
        as="h1"
        size="2xl"
        fontWeight="bold"
        color="primary.800"
        // eslint-disable-next-line
        color={colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'}
        my={10}
        id="climate"
        align="center"
      >
        The climate of Nunavut
      </Heading>
      <Graph />
      <Arrow to="cities" />
    </>
  );
}
