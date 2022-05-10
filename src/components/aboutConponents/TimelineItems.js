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

                  {/* <span>{id}</span> */}
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
   /*  */
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
      /*  */
      border-bottom: 2px dashed ${props => props.theme.text};
      margin-top: 2rem;
      padding-top: 2rem;

      span {
         right: 0;
         transform: translate(50%, -50%);
      }
   }

   &:first-child {
      /* border-top: 0; */
      /* border-top-right-radius: 0; */
   }
   &:last-child {
      /* border-bottom-left-radius: 0; */
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
