import React from "react";
import { Link } from 'react-router-dom';
import { Text, useColorMode} from "@chakra-ui/react";


export default function Logo() {
  const { colorMode } = useColorMode();
  return (
      <Link to={{ pathname: '/' }}>
        <Text fontSize="2xl" fontWeight="bold" color={colorMode === 'light' ? "text.lightHeader" : "text.darkHeader"}>
          AllAbout<span fontSize="2xl" fontWeight="bold" style={{color: '#38B2AC'}}>Nunavut</span>
        </Text>
      </Link>
  );
}
