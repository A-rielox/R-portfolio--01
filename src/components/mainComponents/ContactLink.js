import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactLink = ({ click, contactModalToggler }) => {
   return (
      <Wrapper click={+click} onClick={contactModalToggler}>
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
            // whileTap={{ scale: 0.9 }}
         >
            contact me
         </motion.h2>
      </Wrapper>
   );
};

export default ContactLink;

const Wrapper = styled(motion.button)`
   transition: all 1s ease;

   position: absolute;
   top: ${props => (props.click ? '10%' : '2rem')};
   right: calc(1rem + 2vw);
   text-transform: capitalize;
   z-index: 1;
   cursor: pointer;

   border: none;
   outline: none;
   background-color: transparent;

   color: ${props => props.theme.text};
`;
