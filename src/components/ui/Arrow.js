import React from 'react';

import { TiArrowDown } from 'react-icons/ti';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero(props) {
  const bounceTransition = {
    y: {
      duration: 1.5,
      // eslint-disable-next-line
      yoyo: Infinity,
      ease: 'easeOut',
      delay: 1,
    },
  };
  return (
    <motion.div
      transition={bounceTransition}
      whileHover={{ scale: 1.3 }}
      animate={{
        y: ['-10%', '-100%'],
      }}
      style={{ cursor: 'pointer' }}
    >
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        duration={1000}
        {...props}
      >
        <TiArrowDown size={62} />
      </Link>
    </motion.div>
  );
}
