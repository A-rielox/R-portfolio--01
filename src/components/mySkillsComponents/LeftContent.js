import React from 'react';
import styled from 'styled-components';

const LeftContent = () => {
   return (
      <LeftWrapper className="RIGHT-WRAPPER">
         <Content>
            <Title>Full Stack Developer</Title>

            <Description>
               Me gusta desarrollar aplicaciones "FullStack", en los distintos
               sabores de Javascript, ocupo normalmente en:
            </Description>

            <Description>
               <strong>Frontend</strong>
               <p>
                  Html, Css, Js y React, dando los estilos con
                  Styled-conponents.
               </p>
            </Description>
            <Description>
               <p>
                  Me gusta utilizar el Framework MUI (V5) y las animaciones
                  hacerlas tanto con los Keyframes de styled-components o Motion
                  ( de Framer )
               </p>
            </Description>

            <Description>
               <strong>Backend</strong>
               <p>
                  Trabajo con Node y Express, ocupando mongoDB como base de
                  datos
               </p>
            </Description>

            <Divider />

            <Description>
               <strong>También ocupo frecuentemente</strong>
               <p>
                  Axios, Sass, Redux, Auth0, Jwt, Postman, Github, npm y desde
                  hace un par de años Linux
               </p>
            </Description>
         </Content>
      </LeftWrapper>
   );
};

export default LeftContent;

const LeftWrapper = styled.div`
   /* border: 4px solid blue; */
   width: 70vw;
   position: relative;
   z-index: 10;
   cursor: pointer;
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
   padding: calc(1rem + 2vw);

   font-family: 'Ubuntu Mono', monospace;
   display: flex;
   flex-direction: column;
   /* justify-content: space-between; */
`;

const Title = styled.h2`
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: calc(1em + 1vw);

   ${Content}:hover & {
      & > * {
         fill: ${props => props.theme.body};
      }
   }

   & > *:first-child {
      margin-right: 1rem;
   }
`;

const Description = styled.div`
   color: ${props => props.theme.text};
   font-size: calc(0.6em + 1vw);
   padding: 0.5rem 0;

   ${Content}:hover & {
      color: ${props => props.theme.body};
   }

   strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
   }
   ul,
   p {
      margin-left: 2rem;
   }
`;
const Divider = styled.span`
   width: 100%;
   height: 3px;
   margin-top: 1rem;
   margin-bottom: 1rem;
   background-color: ${props => props.theme.text};

   ${Content}:hover & {
      background-color: ${props => props.theme.body};
   }
`;
