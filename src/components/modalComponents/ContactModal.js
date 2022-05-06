import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Backdrop from './ContactModalBackdrop';

import TheContent from './Content';
import ContactModalParticleComponent from './ContactModalParticleComponent';

const dropIn = {
   hidden: {
      // y: '-100vh',
      opacity: 0,
      scale: 0,
   },
   visible: {
      // y: 0,
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.5,
         delay: 0.5,
      },
   },
   exit: {
      /* x: '-100vw', */ opacity: 0,
      scale: 1,
   },
};

const ContactModal = ({ isContactModal, contactModalToggler }) => {
   return (
      <Backdrop onClick={contactModalToggler}>
         <Content
            onClick={e => e.stopPropagation()}
            // className="modal orange-gradient"
            className="MODAL"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <ParticleWrapper
               className="PARTICLE WRAPPER"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.5 } }}
            >
               <ContactModalParticleComponent />
            </ParticleWrapper>

            <TheContent />

            <Button onClick={contactModalToggler}>Close</Button>
         </Content>
      </Backdrop>
   );
};

export default ContactModal;

const Content = styled(motion.div)`
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   align-items: center;

   background: ${props => props.theme.body};
   position: relative;
`;

const ParticleWrapper = styled(motion.div)``;

const Button = styled.button`
   z-index: 999;

   position: absolute;
   top: 20px;
   right: 20px;

   display: flex;
   justify-content: center;
   align-items: center;

   background-color: ${props => props.theme.body};
   padding: 0.5rem;
   border-radius: 12px;

   &:hover {
      background-color: ${props => props.theme.text};
      color: ${props => props.theme.body};
      /* border: 3px solid var(--red-light); */
   }
`;

/* 
button {
   width: auto;
   height: 3rem;
   border: none;
   outline: none;
   -webkit-appearance: none;
   border-radius: 4px;
   font-weight: 600;
   font-size: 1.25rem;
   letter-spacing: 1.25px;
   cursor: default;
   font-family: 'Montserrat', sans-serif;
}
*/
