import React, { useState, useEffect } from 'react';

import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// prettier-ignore
import {
   ContactLink, WorkLink, AboutLink, SkillsLink, Center, Presentation
} from './mainComponents';
import LogoMainPage from './subComponents/LogoMainPage';
import Loader from './Loader';

const Main = () => {
   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
      setTimeout(() => {
         setLoaded(true);
      }, 4000);
   }, []);

   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   return (
      <MainContainer>
         <AnimatePresence>{!loaded ? <Loader /> : null}</AnimatePresence>

         <BlackSquare click={click} />

         <Container>
            <LogoMainPage color="light" />

            <Center handleClick={handleClick} click={+click} />

            <ContactLink click={+click} />

            <WorkLink click={+click} />

            <AboutLink click={+click} />

            <SkillsLink click={+click} />
         </Container>

         {click ? <Presentation click={click} /> : null}
      </MainContainer>
   );
};

export default Main;

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

//en transition esta la lista de las cosas q cambian q son width y height
const BlackSquare = styled.div`
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
