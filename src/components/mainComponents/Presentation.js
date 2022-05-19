import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Me from '../../assets/Images/yo1.svg';

import MainSvg from './MainSvg';
const Intro = () => {
   return (
      <Box
         initial={{ height: 0, width: 0 }}
         animate={{ height: '50vh', width: '55vw' }}
         transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
         <SubBox1>
            <Text
               className="teeeeeeext"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
            >
               <div className="top">
                  <h1>Hi,</h1>
                  <h3>I'm Ariel Godoy.</h3>
               </div>

               <div className="bottom">
                  <h5>And I really enjoy making full-stack web aplications.</h5>
               </div>
            </Text>
         </SubBox1>

         <SubBox2 className="leftBox">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
            >
               {/* <img className="pic" src={Me} alt="Profile Pic" /> */}
               <MainSvg width={'100%'} height={'100%'} />
            </motion.div>
         </SubBox2>
      </Box>
   );
};

export default Intro;

const Box = styled(motion.div)`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);

   /* width: 65vw; */
   /* height: 55vh; */
   width: 55vw;
   display: flex;
   /* flex-direction: column; */

   /* el marco */
   background-image: linear-gradient(
         ${props => props.theme.text} 50%,
         ${props => props.theme.body} 50%
      ),
      linear-gradient(
         ${props => props.theme.text} 50%,
         ${props => props.theme.body} 50%
      );
   background-size: 2px 100%; // 100% en "y", 2px en "x"
   background-position: 0 0, 100% 0;
   background-repeat: no-repeat;

   border-top: 2px solid ${props => props.theme.text};
   border-bottom: 2px solid ${props => props.theme.body};
   /* el marco */

   z-index: 1;
   right: 0;

   /* @media only screen and (max-width: 50em) {
      background: none;
      border: none;
      border-top: 2px solid ${props => props.theme.body};
      border-bottom: 2px solid ${props => props.theme.text};
      background-image: linear-gradient(
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%
         ),
         linear-gradient(
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%
         );
      background-size: 2px 100%;
      background-position: 0 0, 100% 0;
      background-repeat: no-repeat;
   } */
`;

const SubBox1 = styled.div`
   width: 50%;
   position: relative;
   display: flex;
   justify-content: center;

   @media screen and (max-width: 700px) {
      width: 100%;
   }

   /* .pic {
      width: 100%;
      height: auto;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   } */
`;

const SubBox2 = styled.div`
   width: 50%;
   position: relative;
   display: flex;
   justify-content: center;

   @media screen and (max-width: 700px) {
      display: none;
   }
`;

const Text = styled(motion.div)`
   font-size: calc(1em + 1.5vw);
   padding: 0 2rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 900px) {
      padding: 0 0.5rem 0 2rem;
   }

   .top {
      height: 50%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      color: ${props => props.theme.text};
   }

   .bottom {
      height: 50%;
      width: 70%;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
      font-size: calc(0.5rem + 1.5vw);
      font-weight: 300;

      @media screen and (max-width: 700px) {
         font-size: calc(0.8rem + 1.5vw);
      }
   }
`;
