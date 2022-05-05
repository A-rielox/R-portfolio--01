import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsLink = ({ click, setpath }) => {
   return (
      <Wrapper to="/skills" click={+click} onClick={() => setpath('skills')}>
         <motion.h2
            // onClick={() => setpath('skills')}
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
            skills
         </motion.h2>
      </Wrapper>
   );
};

export default SkillsLink;

const Wrapper = styled(NavLink)`
   color: ${props => props.theme.text};
   position: absolute;
   top: ${props => (props.click ? '45%' : '50%')};
   right: calc(1rem + 2vw);
   transition: all 1s ease;
   transform: ${props =>
      props.click
         ? 'rotate(-360deg) translate(0, 0)'
         : 'rotate(90deg) translate(-50%, -50%)'};
   text-decoration: none;
   z-index: 1;
   text-transform: capitalize;
`;
