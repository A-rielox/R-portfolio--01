import React, { useState } from 'react';

import styled from 'styled-components';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const SingleCard = ({ id, title, position, desc, icon, place }) => {
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
         <Left>
            <Name layout>{title}</Name>

            <Icon layout>{icon}</Icon>
         </Left>

         <Right>
            <Title>{position}</Title>

            <Place>{place}</Place>

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
                        // transition={{ duration: 0.3 }}
                        exit={{ opacity: 0 }}
                     >
                        {desc}
                     </Email>
                  </EmailWrapper>
               )}
            </AnimatePresence>
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
   padding: 2rem;
   border-radius: 10px;
   background-color: ${props => props.theme.text};

   display: flex;

   &:not(:last-child) {
      margin-right: 1rem;
   }
`;

const Left = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
`;
const Right = styled(motion.div)`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-start;
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
`;

const Name = styled(motion.div)`
   font-size: 28px;
   width: 165px;
`;
const Icon = styled.div`
   font-size: 28px;
   width: 165px;
   height: 100%;
`;

const Title = styled(motion.div)`
   font-size: 20px;
   width: min-content;
   white-space: nowrap;
   align-self: flex-start;
   justify-self: flex-start;

   transition: all 0.3s linear;
   ${Card}:hover & {
      font-weight: bold;
      align-self: center;
   }
`;

const Place = styled(motion.div)`
   font-size: 20px;
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
`;

const Email = styled(motion.div)`
   font-size: 14px;
   width: 300px;
   padding-top: 2rem;
`;
const EmailWrapper = styled(motion.div)`
   /* font-size: 14px; */
   /* width: 165px; */
   /* padding-top: 2rem; */
`;
