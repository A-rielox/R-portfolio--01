import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// prettier-ignore
import {
   ContactLink, WorkLink, AboutLink, SkillsLink, Center, Presentation, 
} from './mainComponents';
import LogoMainPage from './subComponents/LogoMainPage';
import Loader from './Loader';
import ContactModal from './modalComponents/ContactModal';

const Main = ({ loaded }) => {
   // --------------- para presentation
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);

   // --------------- para ContactModal
   const [isContactModal, setIsContactModal] = useState(false);
   const contactModalToggler = () => {
      setIsContactModal(!isContactModal);
   };

   // --------------- para dirección de la transición
   const [path, setpath] = useState(''); // 🥊
   const goY = { y: '-100%' }; // 🥊
   const goX = { x: `${path === 'work' ? '100%' : '-100%'}` }; // 🥊

   return (
      <MainContainer
         key="modal"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={path === 'about' ? goY : goX}
         transition={{ duration: 0.5 }}
      >
         <AnimatePresence>{!loaded ? <Loader /> : null}</AnimatePresence>

         <BlackSquare click={click} />

         <Container>
            <LogoMainPage color="light" />

            <Center handleClick={handleClick} click={+click} />

            <ContactLink
               click={+click}
               contactModalToggler={contactModalToggler}
            />

            <WorkLink click={+click} setpath={setpath} />

            <AboutLink click={+click} setpath={setpath} />

            <SkillsLink click={+click} setpath={setpath} />
         </Container>

         {click ? <Presentation click={click} /> : null}

         {/* CONTACT-MODAL */}
         <AnimatePresence>
            {isContactModal && (
               <ContactModal
                  isContactModal={isContactModal}
                  contactModalToggler={contactModalToggler}
               />
            )}
         </AnimatePresence>
      </MainContainer>
   );
};

export default Main;

const MainContainer = styled(motion.div)`
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
   background-color: #36254e;

   height: ${props => (props.click ? '100%' : '0')};
   width: ${props => (props.click ? '100%' : '0')};
   transform: ${props => (props.click ? 'rotate(360deg)' : '0')};
   z-index: 1;
   transition: all 1s ease;
`;
