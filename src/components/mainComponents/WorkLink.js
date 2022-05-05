import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const WorkLink = ({ click, setpath }) => {
   return (
      <Wrapper to="/work" click={+click} onClick={() => setpath('work')}>
         <motion.h2
            initial={{
               y: -200,
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
            work
         </motion.h2>
      </Wrapper>
   );
};

export default WorkLink;

const Wrapper = styled(NavLink)`
   color: ${props => props.theme.text};
   position: absolute;
   top: ${props => (props.click ? '45%' : '50%')};
   left: calc(1rem + 2vw);
   // tiene q ir cambiado el orden de translate y rotate con el BLOG para q queden a la misma altura
   transition: all 1s ease;
   transform: ${props =>
      props.click
         ? 'translate(0%, 0%) rotate(360deg)'
         : 'translate(-50%, -50%) rotate(-90deg)'};
   text-decoration: none;
   z-index: 1;
   text-transform: capitalize;

   /* @media only screen and (max-width: 50em) {
      text-shadow: ${props => (props.click ? '0 0 4px #000' : 'none')};
   } */
`;
