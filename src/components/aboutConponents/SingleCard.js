import React, { useState } from 'react';

import styled from 'styled-components';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

const SingleCard = ({ id, title, position, desc }) => {
   const [isHover, setIsHover] = useState(false);

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
         <Name layout>{title}</Name>

         <Title layout>{position}</Title>

         <AnimatePresence>
            {isHover && (
               <Email
                  layout
                  initial={{ opacity: 0, width: 165 }}
                  animate={{ opacity: 1, width: 265 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  exit={{ opacity: 0 }}
               >
                  {desc}
               </Email>
            )}
         </AnimatePresence>

         <CardFront layout />

         {/* <CardBack layout /> */}
      </Card>
   );
};

export default SingleCard;

const Card = styled(motion.div)`
   position: relative;
   color: black;

   /* width: 165px; */
   height: min-content;
   padding: 2rem;
   border-radius: 10px;
   background-color: ${props => props.theme.text};

   display: flex;
   flex-direction: column;

   &:not(:last-child) {
      margin-right: 1rem;
   }

   /* &::after { */
   /* content: ''; */
   /* ... */
   /* posion: all 0.3s ease; */
   /* } */
   /*  */
   /* &:hover::after { */
   /* ... */
   /* right: 10px; */
   /* } */
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

   transition: all 0.3s ease;
   ${Card}:hover & {
      border: solid 2px yellow;
      top: -10px;
      bottom: 10px;
      left: 10px;
      right: -10px;
   }
`;

const CardBack = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   z-index: -10;
   /* opacity: 0.5; */

   padding: 30px;
   border-radius: 10px;
   background-color: transparent;

   transition: all 0.3s ease;
   ${Card}:hover & {
      background-color: lightgreen;
      top: 10px;
      bottom: -10px;
      left: -10px;
      right: 10px;
   }
`;

const Name = styled(motion.div)`
   font-size: 28px;
   /* margin: 15px auto 0px auto; */
   width: 165px;
`;

/* hr
      border: 0
      height: 1px
      background-color: #d4d4d4 
      animation: card-ani2 1s
      animation-delay: 0.1s
      animation-fill-mode: forwards */

const Title = styled(motion.div)`
   font-size: 14px;
   width: 165px;
   /* margin-bottom: 2rem; */
`;

const Email = styled(motion.div)`
   font-size: 14px;
   /* margin: 160px auto 6px auto; */
`;

const Phone = styled(motion.div)`
   font-size: 14px;
`;
