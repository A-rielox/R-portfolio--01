import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';

import LogoMainPage from './subComponents/LogoMainPage';
import { LogoCenter } from './AllSvgs';

const Main = () => {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   return (
      <MainContainer>
         <DarkDiv click={click} />

         <Container>
            <LogoMainPage color="light" />

            {/* falta el fade inicial */}
            <Center click={click} onClick={handleClick}>
               <LogoCenter fill="#000" /* width="150" */ />
               <span>click here</span>
            </Center>

            {/* x ver el click */}
            <ContactLink click={+click}>
               <h2>contact me</h2>
            </ContactLink>

            <WorkLink to="/work" click={+click}>
               <h2>work</h2>
            </WorkLink>

            <AboutLink
               // onClick={() => setClick(false)}
               // click={mq ? +false : +click}
               click={+click}
               to="/about"
            >
               <h2>About</h2>
            </AboutLink>

            <SkillsLink to="/skills" click={+click}>
               <h2>Skills</h2>
            </SkillsLink>
         </Container>
      </MainContainer>
   );
};

export default Main;

const rotate = keyframes`
   from{
      transform: rotateY(0);
   }
   to{
      transform: rotateY(360deg);
   }
`;

const MainContainer = styled.div`
   background: ${props => props.theme.body};
   width: 100vw;
   height: 100vh;
   overflow: hidden;

   position: relative;

   h2,
   h3,
   h4,
   h5,
   h6 {
      font-family: 'Karla', sans-serif;
      font-weight: 500;
   }
`;

const Container = styled.div`
   padding: 2rem;
`;

const Center = styled.button`
   position: absolute;
   top: ${props => (props.click ? '5%' : '50%')};
   left: ${props => (props.click ? '90%' : '50%')};
   transform: translate(-50%, -50%);
   border: none;
   outline: none;
   background-color: transparent;
   cursor: pointer;
   transition: all 1s ease;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   svg {
      width: ${props => (props.click ? '80px' : '150px')};
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

const ContactLink = styled.button`
   transition: all 1s ease;

   position: absolute;
   top: ${props => (props.click ? '10%' : '2rem')};
   right: calc(1rem + 2vw);
   text-transform: capitalize;
   z-index: 1;
   cursor: pointer;

   border: none;
   outline: none;
   background-color: transparent;
`;

const WorkLink = styled(NavLink)`
   color: ${props => props.theme.text};
   position: absolute;
   top: ${props => (props.click ? '45%' : '50%')};
   left: calc(1rem + 2vw);
   // tiene q ir cambiado el orden de translate y rotate con el BLOG para q queden a la misma altura
   transition: all 1s ease;
   transform: ${props =>
      props.click
         ? 'translate(0%, 0%) rotate(360deg)'
         : 'translate(-50%, -50%) rotate(-90deg)'};
   text-decoration: none;
   z-index: 1;
   text-transform: capitalize;

   /* @media only screen and (max-width: 50em) {
      text-shadow: ${props => (props.click ? '0 0 4px #000' : 'none')};
   } */
`;

const AboutLink = styled(NavLink)`
   position: absolute;
   bottom: 1rem;
   left: 50%;
   transform: translateX(-50%);

   width: min-content;

   color: ${props => (props.click ? props.theme.body : props.theme.text)};
   text-decoration: none;
   z-index: 1;
`;

const SkillsLink = styled(NavLink)`
   color: ${props => props.theme.text};
   position: absolute;
   top: ${props => (props.click ? '45%' : '50%')};
   right: calc(1rem + 2vw);
   transition: all 1s ease;
   transform: ${props =>
      props.click
         ? 'rotate(-360deg) translate(0, 0)'
         : 'rotate(90deg) translate(-50%, -50%)'};
   text-decoration: none;
   z-index: 1;
`;

//en transition esta la lista de las cosas q cambian q son width y height
const DarkDiv = styled.div`
   position: absolute;
   top: ${props => (props.click ? '50%' : '50%')};
   right: ${props => (props.click ? '0' : '50%')};
   background-color: #000;

   height: ${props => (props.click ? '100%' : '0')};
   width: ${props => (props.click ? '100%' : '0')};
   transform: ${props => (props.click ? 'rotate(360deg)' : '0')};
   z-index: 1;
   transition: all 1s ease;
`;
