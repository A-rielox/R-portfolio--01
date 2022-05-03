import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutLink = ({ click }) => {
   return (
      <Wrapper to="/about" click={+click}>
         <motion.h2
            // onClick={() => setpath('about')}
            initial={{
               y: 200,
               transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1,
               },
            }}
            animate={{
               y: 0,
               transition: {
                  type: 'spring',
                  duration: 1.5,
                  delay: 1,
               },
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
         >
            about
         </motion.h2>
      </Wrapper>
   );
};

export default AboutLink;

const Wrapper = styled(NavLink)`
   position: absolute;
   bottom: 1rem;
   left: 50%;
   transform: translateX(-50%);

   width: min-content;
   text-transform: capitalize;

   color: ${props => (props.click ? props.theme.body : props.theme.text)};
   text-decoration: none;
   z-index: 1;
`;
