import React from 'react';

import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { LogoCenter } from '../AllSvgs';

const Center = ({ handleClick, click }) => {
   return (
      <Wrapper
         initial={{
            opacity: 0,
         }}
         animate={{
            opacity: 1,
            transition: {
               duration: 1,
               delay: 1,
            },
         }}
         click={click}
         onClick={handleClick}
      >
         <LogoCenter fill="#36254e" /* width="150" */ />
         <span>click here</span>
      </Wrapper>
   );
};

export default Center;

const rotate = keyframes`
   from{
      transform: rotateY(0);
   }
   to{
      transform: rotateY(360deg);
   }
`;

const Wrapper = styled(motion.button)`
   position: absolute;
   top: ${props => (props.click ? '5%' : '50%')};
   right: ${props => (props.click ? 'calc(1rem + 1vw)' : '50%')};
   transform: ${props =>
      props.click ? 'translate(-50%, -50%)' : 'translate(50%, -50%)'};
   border: none;
   outline: none;
   background-color: transparent;
   cursor: pointer;
   transition: all 1s ease;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${props => props.theme.text};

   svg {
      width: ${props => (props.click ? '80px' : '150px')};

      @media screen and (max-width: 700px) {
         width: ${props => (props.click ? '45px' : '100px')};
      }
   }

   & > :first-child {
      animation: ${rotate} infinite 2.5s linear;
   }

   & > :last-child {
      display: ${props => (props.click ? 'none' : 'inline-block')};
      padding-top: 1rem;
      text-transform: capitalize;
   }

   /* @media only screen and (max-width: 50em) {
      top: ${props => (props.click ? '90%' : '50%')};
      left: ${props => (props.click ? '90%' : '50%')};
      width: ${props => (props.click ? '80px' : '150px')};
      height: ${props => (props.click ? '80px' : '150px')};
   }
   @media only screen and (max-width: 30em) {
      width: ${props => (props.click ? '40px' : '150px')};
      height: ${props => (props.click ? '40px' : '150px')};
   } */
`;
