import React from 'react';
import styled from 'styled-components';
import items from './textItems';

import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'; /////

const TimelineItems = () => {
   return (
      <Timeline>
         {items.map(item => {
            const { id, title, position, desc } = item;

            return (
               // <Container key={id}>

               <Card>
                  <Name>{title}</Name>

                  <Title>{position}</Title>

                  {/* <Email>{desc}</Email> */}

                  <Phone>123142</Phone>

                  <CardFront />

                  <CardBack />
               </Card>

               // </Container>
            );
         })}
      </Timeline>
   );
};

export default TimelineItems;

const Timeline = styled.div`
   display: flex;

   & p {
      margin-bottom: 0;
      padding-right: 2rem;
      font-size: calc(1em + 0.5vw);
   }
`;

const Card = styled.div`
   position: relative;
   color: black;

   width: 165px;
   height: 280px;
   padding: 30px;
   border-radius: 10px;
   background-color: red;
`;

const CardFront = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   border: solid 2px yellow;
   z-index: 10;

   width: 165px;
   height: 280px;
   padding: 30px;
   border-radius: 10px;
   background-color: transparent;

   transition: all 0.3s ease;
   ${Card}:hover & {
      top: -10px;
      left: 10px;
   }
`;

const CardBack = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   opacity: 0.5;

   width: 165px;
   height: 280px;
   padding: 30px;
   border-radius: 10px;
   background-color: lightgreen;

   transition: all 0.3s ease;
   ${Card}:hover & {
      top: 10px;
      left: -10px;
   }
`;

const Name = styled.div`
   font-size: 28px;
   /* margin: 15px auto 0px auto; */
`;

/* hr
      border: 0
      height: 1px
      background-color: #d4d4d4 
      animation: card-ani2 1s
      animation-delay: 0.1s
      animation-fill-mode: forwards */

const Title = styled.div`
   font-size: 14px;
`;

const Email = styled.div`
   font-size: 14px;
   /* margin: 160px auto 6px auto; */
`;

const Phone = styled.div`
   font-size: 14px;
`;

/* 

import React from 'react';
import styled from 'styled-components';
import items from './textItems';

const TimelineItems = () => {
   return (
      <Timeline>
         {items.map(item => {
            const { id, title, desc } = item;

            return (
               <Item key={id}>
                  <h4>{title}</h4>

                  <p>{desc}</p>

                  <span>{id}</span> 
                  </Item>
                  );
               })}
            </Timeline>
         );
      };
      
      export default TimelineItems;
      
      const Timeline = styled.div`
         display: flex;
      
         & p {
            margin-bottom: 0;
            padding-right: 2rem;
            font-size: calc(1em + 0.5vw);
         }
      `;
      
      const Item = styled.article`
         padding: 4rem 2rem;
         position: relative;
      
         height: auto;
         width: 500px;
         border-right: 2px dashed ${props => props.theme.text};
         backdrop-filter: blur(2px);
      
         &:nth-child(even) {
            border-top-left-radius: 2rem;
            border-top-right-radius: 2rem;
      
            padding-right: 0;
            border-top: 2px dashed ${props => props.theme.text};
            margin-bottom: 2rem;
      
            span {
               left: 0;
            }
         }
      
         &:nth-child(odd) {
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
            padding-right: 0;
            border-bottom: 2px dashed ${props => props.theme.text};
            margin-top: 2rem;
            padding-top: 2rem;
      
            span {
               right: 0;
               transform: translate(50%, -50%);
            }
         }
      
         &:first-child {
         }
         &:last-child {
         }
      
         span {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            margin-bottom: 0;
            background: ${props => props.theme.text};
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: ${props => props.theme.body};
            font-weight: bold;
            font-size: calc(1em + 1vw);
         }
      `;
      

*/
