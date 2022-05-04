import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Logo as MainLogo } from './AllSvgs';

const pathVariants = {
   hidden: {
      opacity: 0,
      pathLength: 0,
   },
   visible: {
      opacity: 1,
      pathLength: 1,

      transition: {
         duration: 3,
         ease: 'easeInOut',
      },
   },
};

const textVariants = {
   hidden: {
      opacity: 0,
      x: -150,
   },
   visible: {
      opacity: 1,
      x: -50,

      transition: {
         duration: 2,
         delay: 2,
         ease: 'easeInOut',
      },
   },
};

const bottomAnimation = {
   hidden: { opacity: 0 },
   show: {
      opacity: 1,

      transition: {
         //delayChildren: 0.3, // 2
         staggerChildren: 0.3,
      },
   },
};
const singleLetter = {
   hidden: {
      opacity: 0,
   },
   show: {
      opacity: 1,
   },
};

const Loader = () => {
   return (
      <Wrapper
         initial={{
            y: 0,
            opacity: 1,
         }}
         exit={{
            y: '100%',
            opacity: 0,
         }}
         transition={{
            duration: 2,
         }}
      >
         <Top>
            <MainLogo
               /* width, height y fill en styled.div */
               variants={pathVariants}
               initial="hidden"
               animate="visible"
            />

            <Text
               // color={color}
               variants={textVariants}
               initial="hidden"
               animate="visible"
            >
               -rielox
            </Text>
         </Top>

         <Bottom variants={bottomAnimation} initial="hidden" animate="show">
            <Letter variants={singleLetter}>W</Letter>
            <Letter variants={singleLetter}>e</Letter>
            <Letter variants={singleLetter}>b</Letter>
            &nbsp;&nbsp;&nbsp;
            <Letter variants={singleLetter}>D</Letter>
            <Letter variants={singleLetter}>e</Letter>
            <Letter variants={singleLetter}>v</Letter>
            <Letter variants={singleLetter}>e</Letter>
            <Letter variants={singleLetter}>l</Letter>
            <Letter variants={singleLetter}>o</Letter>
            <Letter variants={singleLetter}>p</Letter>
            <Letter variants={singleLetter}>e</Letter>
            <Letter variants={singleLetter}>r</Letter>
         </Bottom>
      </Wrapper>
   );
};

export default Loader;

const Wrapper = styled(motion.div)`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;

   touch-action: none;
   overflow: hidden;

   width: 100vw;
   height: 100vh;

   z-index: 69;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};

   svg {
      width: 20vw;
      height: auto;
      fill: ${props => `rgba(${props.theme.bodyRgba},0.5)`};

      overflow: visible;
      stroke-linejoin: round;
      stroke-linecap: round;

      path {
         stroke: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
      }
   }
`;

const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Text = styled(motion.span)`
   color: ${props => props.theme.body};
   font-size: 5rem;
`;

const Bottom = styled(motion.div)`
   padding-top: 2rem;
   display: flex;
   justify-content: center;
`;

const Letter = styled(motion.span)`
   font-family: 'Kaushan Script';
   font-size: 5rem;
`;
