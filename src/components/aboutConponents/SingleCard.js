import React, { useState } from 'react';

import styled from 'styled-components';

import { motion, AnimatePresence } from 'framer-motion';

const SingleCard = ({ id, title, position, desc, icon, place }) => {
   const [isHover, setIsHover] = useState(false);

   const medQ = window.matchMedia('(min-width: 700px)').matches;

   return (
      <Card
         className="caaaaaaaaard"
         layout
         transition={{
            duration: 0.5,
         }}
         onMouseOver={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
      >
         <Left>
            <Name layout>{title}</Name>

            <Icon layout>{icon}</Icon>
         </Left>

         <Right>
            <Title>{position}</Title>

            <Place>{place}</Place>

            {medQ ? (
               <AnimatePresence>
                  {isHover && (
                     <EmailWrapper
                        layout
                        initial={{ width: 165, height: 0 }}
                        animate={{ width: 300, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        exit={{ width: 165, height: 0 }}
                     >
                        <Email
                           layout
                           initial={{ opacity: 0 }}
                           animate={{
                              opacity: 1,
                              transition: { duration: 0.3, delay: 0.2 },
                           }}
                           exit={{ opacity: 0 }}
                        >
                           {desc}
                        </Email>
                     </EmailWrapper>
                  )}
               </AnimatePresence>
            ) : (
               <Email>{desc}</Email>
            )}
         </Right>
         <CardFront layout />
      </Card>
   );
};

export default SingleCard;

const Card = styled(motion.div)`
   position: relative;
   color: black;

   height: min-content;
   /* padding: 4rem; */
   padding: calc(2rem + 2vw);
   border-radius: 10px;
   background-color: ${props => props.theme.text};

   display: flex;
   font-family: 'Ubuntu Mono', monospace;

   &:not(:last-child) {
      margin-right: 1.5rem;
   }

   @media screen and (max-width: 700px) {
      flex-direction: column;

      margin: 1rem 0.5rem 1rem 0.5rem;

      &:not(:last-child) {
         margin-right: 0;
      }
   }

   @media screen and (max-width: 400px) {
      padding: 2rem 1rem 2rem 1rem;
   }
`;

const Left = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;

   @media screen and (max-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
   }
`;
const Right = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
   color: ${props => props.theme.body};
`;

const CardFront = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   border: solid 2px transparent;
   z-index: 10;

   padding: 30px;
   border-radius: 10px;
   background-color: transparent;

   transition: all 0.3s linear;
   ${Card}:hover & {
      border: solid 2px #cf9ce2;
      top: -10px;
      bottom: 10px;
      left: 10px;
      right: -10px;
   }

   @media screen and (max-width: 700px) {
      border: solid 2px #cf9ce2;
      top: -10px;
      bottom: 10px;
      left: 10px;
      right: -10px;
   }
`;

const Name = styled(motion.div)`
   /* font-size: 28px; */
   font-size: calc(1em + 0.7vw);
   width: 165px;
   color: ${props => props.theme.body};

   @media screen and (max-width: 700px) {
      width: min-content;
      white-space: nowrap;
      font-size: 1.7rem;
   }
`;
const Icon = styled.div`
   font-size: 28px;
   width: 165px;
   height: 100%;
   color: ${props => props.theme.body};

   @media screen and (max-width: 700px) {
      width: min-content;
      font-size: 2.7rem;
   }
`;

const Title = styled(motion.div)`
   /* font-size: 20px; */
   font-size: calc(1em + 0.5vw);
   width: min-content;
   white-space: nowrap;
   align-self: flex-start;
   justify-self: flex-start;

   transition: all 0.3s linear;
   ${Card}:hover & {
      font-weight: bold;
      align-self: center;
   }

   @media screen and (max-width: 700px) {
      font-weight: bold;
      align-self: center;
   }
`;

const Place = styled(motion.div)`
   /* font-size: 20px; */
   font-size: calc(1em + 0.5vw);
   width: min-content;
   margin-top: 1rem;
   white-space: nowrap;
   align-self: flex-start;
   justify-self: flex-start;

   transition: all 0.3s linear;
   ${Card}:hover & {
      font-weight: bold;
      align-self: center;
   }

   @media screen and (max-width: 700px) {
      font-weight: bold;
      align-self: center;
   }
`;

const EmailWrapper = styled(motion.div)``;

const Email = styled(motion.div)`
   /* font-size: 14px; */
   font-size: calc(0.8em + 0.4vw);
   width: 300px;
   padding-top: 2rem;

   @media screen and (max-width: 400px) {
      text-align: center;
   }
`;
