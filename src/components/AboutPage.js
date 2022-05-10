import { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import { DarkTheme } from './Themes';
import TimelineItems from './aboutConponents/TimelineItems';
import LogoMainPage from './subComponents/LogoMainPage';
import Plane from './aboutConponents/Plane';
import Wind from './aboutConponents/Wind';

import ContactModalParticleComponent from './modalComponents/ContactModalParticleComponent';
// import ContactModalParticleComponent from './ContactModalParticleComponent';

const AboutPage = () => {
   const ref = useRef(null);
   const refPlane = useRef(null);
   const [contentWidth, setContentWidth] = useState(null);

   // para la cantidad de viento
   const [numbers, setNumbers] = useState(0);

   useEffect(() => {
      let num = (window.innerWidth - 100) / 25;
      setNumbers(parseInt(num));
   }, []);

   // para desplazamiento del avion y contenido
   useEffect(() => {
      let element = ref.current;
      setContentWidth(element.getBoundingClientRect().width);

      const moveX = () => {
         // para mover el content
         element.style.transform = `translateX(-${window.pageYOffset}px)`;

         // para mover el avion
         let scrollPosition = window.pageYOffset;
         let windowSize = window.innerHeight;
         let bodyHeight = document.body.offsetHeight;

         let diff = Math.max(bodyHeight - (scrollPosition + windowSize));
         let diffP = (diff * 100) / (bodyHeight - windowSize);

         refPlane.current.style.transform = `translateX(${-diffP}%)`;
      };

      window.addEventListener('scroll', moveX);

      return () => {
         window.removeEventListener('scroll', moveX);
      };
   }, []);

   return (
      <ThemeProvider theme={DarkTheme}>
         <MainContainer
            contentwidth={contentWidth}
            className="MAIN CONTAINER"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
         >
            {/* mientras desarrollo */}
            <ParticleWrapper
               className="PARTICLE WRAPPER"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 1.5 } }}
            >
               <ContactModalParticleComponent config="about" />
            </ParticleWrapper>

            <LogoMainPage color="light" />

            <Content className="COOOOONTENT" ref={ref}>
               <TimelineItems />
            </Content>

            <Svg ref={refPlane}>
               {[...Array(numbers)].map((x, id) => {
                  return (
                     <Wind
                        key={id}
                        width={25}
                        height={40}
                        // fill="currentColor"
                     />
                  );
               })}

               <Plane width={70} height={70} />
            </Svg>
         </MainContainer>
      </ThemeProvider>
   );
};

export default AboutPage;

const MainContainer = styled(motion.div)`
   min-width: 100vw;
   min-height: 100vh;
   /* height: 300vh; */
   height: calc(100vh + (${props => `${props.contentwidth}px`} - 100vw));
   position: relative;

   background-color: ${props => props.theme.body};
   /* z-index: -1; */
`;

const Content = styled.div`
   display: flex;
   justify-content: flex-end;

   gap: 5vw;

   margin-top: 10rem; // padding top 💥
   padding-bottom: 10rem;
   padding-left: 5vw;
   padding-right: 5vw;

   position: fixed;
   color: ${props => props.theme.text};
`;

const ParticleWrapper = styled(motion.div)``;

const Svg = styled(motion.div)`
   position: fixed;
   top: 70vh;

   transform: translateX(-100%);

   cursor: pointer;
   z-index: 10;
   display: flex;
   align-items: center;

   svg {
      fill: ${props => props.theme.text};

      path {
         stroke: ${props => props.theme.text};
      }
   }
`;
