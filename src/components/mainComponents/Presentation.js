import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Me from '../../assets/Images/yo1.svg';
// import Me from '../../assets/Images/profile-img.png';

const Intro = () => {
   return (
      <Box
         initial={{ height: 0, width: 0 }}
         animate={{ height: '50vh', width: '55vw' }}
         transition={{ type: 'spring', duration: 2, delay: 1 }}
      >
         <SubBox>
            <Text
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
            >
               <div className="top">
                  <h1>Hi,</h1>
                  <h3>I'm A-rielox.</h3>
               </div>

               <div className="bottom">
                  <h6>And I really enjoy making full-stack web aplications.</h6>
               </div>
            </Text>
         </SubBox>

         <SubBox>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 2 }}
            >
               <img className="pic" src={Me} alt="Profile Pic" />
            </motion.div>
         </SubBox>
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

const SubBox = styled.div`
   width: 50%;
   position: relative;
   display: flex;
   justify-content: center;

   .pic {
      width: 100%;
      height: auto;

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      /* border-radius: 50px; */
   }
`;

const Text = styled(motion.div)`
   font-size: calc(1em + 1.5vw);
   padding: 0 2rem;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

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
   }
`;
