import React from 'react';
import { Link } from 'react-scroll';
import { HashLink as PageLink } from 'react-router-hash-link';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Divider,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../ui/Logo';

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';

const MenuItem = ({ children, to = '/' }) => {
  const { colorMode } = useColorMode();
  return (
    <Heading
      color={colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'}
      as="h2"
      size="md"
      fontWeight="normal"
      lineHeight={2}
      _hover={{ opacity: '0.8' }}
    >
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1500}
        to={to}
        style={{ cursor: 'pointer' }}
      >
        {children}
      </Link>
    </Heading>
  );
};

const Header = props => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
      </Flex>
      <Flex display={{ base: 'flex' }} direction={['row']}>
        <Box>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            // color='white'
            // bg={["white", "white", "primary.500", "primary.500"]}
            marginRight="2"
            onClick={toggleColorMode}
            icon={
              colorMode === 'light' ? (
                <MoonIcon w={4} h={4} color="#2d3748" />
              ) : (
                <SunIcon w={5} h={5} color="#b9bbbe" />
              )
            }
          />
        </Box>
        <Box onClick={toggleMenu}>
          {show ? (
            <IconButton variant="ghost">
              <CloseIcon
                fontSize={15}
                color={colorMode === 'light' ? '#2d3748' : '#b9bbbe'}
              />
            </IconButton>
          ) : (
            <IconButton variant="ghost">
              <HamburgerIcon
                fontSize={20}
                color={colorMode === 'light' ? '#2d3748' : '#b9bbbe'}
              />
            </IconButton>
          )}
        </Box>
      </Flex>
      <Box
        display={show ? 'block' : 'none'}
        flexBasis={{ base: '100%' }}
        minH="100vh"
      >
        <Stack direction="column" spacing="24px" align="center" pt={5}>
          <MenuItem to="home">Home</MenuItem>
          <MenuItem to="history">History</MenuItem>
          <MenuItem to="economy">Economy</MenuItem>
          <MenuItem to="people">People</MenuItem>
          <MenuItem to="climate">Climate</MenuItem>
          <MenuItem to="cities">Cities</MenuItem>
          <MenuItem to="attractions">Attractions</MenuItem>
          <MenuItem to="government">Government</MenuItem>
          <MenuItem to="landforms">Landforms</MenuItem>

          <Divider w="50%" />
          <PageLink to="research">
            <Heading
              color={
                colorMode === 'light' ? 'text.lightHeader' : 'text.darkHeader'
              }
              as="h2"
              size="md"
              fontWeight="normal"
              lineHeight={2}
              _hover={{ opacity: '0.8' }}
            >
              Research
            </Heading>
          </PageLink>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
