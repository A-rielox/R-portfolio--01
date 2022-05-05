import React from 'react';
import styled from 'styled-components';

const LeftContent = () => {
   return (
      <LeftWrapper className="RIGHT-WRAPPER">
         <Content>Lorem</Content>
      </LeftWrapper>
   );
};

export default LeftContent;

const LeftWrapper = styled.div`
   /* border: 4px solid blue; */
   width: 70vw;
   position: relative;
   z-index: 10;
`;

const Content = styled.div`
   border: 2px solid ${props => props.theme.text};
   color: ${props => props.theme.text};
   /* background-color: ${props => props.theme.body}; */
   backdrop-filter: blur(2px);

   &:hover {
      color: ${props => props.theme.body};
      background-color: ${props => props.theme.text};
      transition: all 0.3s ease;
   }
   /*  */
   /*  */
   /*  */
   position: fixed;
   width: 65vw;
   min-height: 60vh;

   font-family: 'Ubuntu Mono', monospace;
   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
`;
