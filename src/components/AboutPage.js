import { useEffect, useRef, useState } from 'react';

import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';
import LogoMainPage from './subComponents/LogoMainPage';
import Plane from './aboutConponents/Plane';
import Wind from './aboutConponents/Wind';

import items from './aboutConponents/textItems';

const AboutPage = () => {
   const ref = useRef(null);
   const refPlane = useRef(null);
   const [contentWidth, setContentWidth] = useState(null);
   /*  */
   // para la cantidad de viento
   const [numbers, setNumbers] = useState(0);

   useEffect(() => {
      let num = (window.innerWidth - 100) / 25;
      setNumbers(parseInt(num));
   }, []);
   /*  */

   useEffect(() => {
      console.log(contentWidth);
      let element = ref.current;
      setContentWidth(element.getBoundingClientRect().width);

      const moveX = () => {
         // para el content
         element.style.transform = `translateX(-${window.pageYOffset}px)`;

         // para el avion
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
      <MainContainer
         contentwidth={contentWidth}
         className="MAIN CONTAINER"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { duration: 1.5 } }}
         exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
         <LogoMainPage color="light" />

         <Content className="COOOOONTENT" ref={ref}>
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
         </Content>

         <Svg ref={refPlane}>
            {[...Array(numbers)].map((x, id) => {
               return (
                  <Wind key={id} width={25} height={40} fill="currentColor" />
               );
            })}

            <Plane width={70} height={70} />
         </Svg>
      </MainContainer>
   );
};

export default AboutPage;

const Bounce = keyframes`
   from {  transform:translateY( 15%) scale(1.2);   }
   to {  transform: translateY( -15%) scale(1);   }
`;

const MainContainer = styled(motion.div)`
   min-width: 100vw;
   min-height: 100vh;
   /* height: 300vh; */
   height: calc(100vh + (${props => `${props.contentwidth}px`} - 100vw));
   position: relative;
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
`;

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
   }
`;

/* 

import React from 'react';
import styled, { keyframes } from 'styled-components';

import { motion } from 'framer-motion';
import LogoMainPage from './subComponents/LogoMainPage';
import UpArrow from './mySkillsComponents/UpArrow';

const AboutPage = () => {
   const scrollTop = () => {
      return window.scroll({
         top: 0,
         left: 0,
         behavior: 'smooth',
      });
   };

   return (
      <MainContainer
         className="MAIN CONTAINER"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1, transition: { duration: 1.5 } }}
         exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
         <LogoMainPage color="light" />

         <Content className="COOOOONTENT">
            <Timeline>
               <Item>
                  <h4>2020</h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi aliquam recusandae beatae molestiae exercitationem
                     laudantium consectetur, debitis repellat perspiciatis!
                     Beatae!
                  </p>

                  <span>1</span>
               </Item>

               <Item>
                  <h4>2019</h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi aliquam recusandae beatae molestiae exercitationem
                     laudantium consectetur, debitis repellat perspiciatis!
                     Beatae!
                  </p>

                  <span>2</span>
               </Item>

               <Item>
                  <h4>2018</h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi aliquam recusandae beatae molestiae exercitationem
                     laudantium consectetur, debitis repellat perspiciatis!
                     Beatae!
                  </p>

                  <span>3</span>
               </Item>

               <Item>
                  <h4>2017</h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi aliquam recusandae beatae molestiae exercitationem
                     laudantium consectetur, debitis repellat perspiciatis!
                     Beatae!
                  </p>

                  <span>4</span>
               </Item>

               <Item>
                  <h4>2016</h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi aliquam recusandae beatae molestiae exercitationem
                     laudantium consectetur, debitis repellat perspiciatis!
                     Beatae!
                  </p>

                  <span>5</span>
               </Item>

               <Item>
                  <h4>2015</h4>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Quasi aliquam recusandae beatae molestiae exercitationem
                     laudantium consectetur, debitis repellat perspiciatis!
                     Beatae!
                  </p>

                  <span>6</span>
               </Item>
            </Timeline>
         </Content>

         <Svg
            onClick={scrollTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: false, amount: 0.7 }}
         >
            <UpArrow width={70} height={70} />
         </Svg>
      </MainContainer>
   );
};

export default AboutPage;

const Bounce = keyframes`
   from {  transform:translate(-50%, -50%) rotate(-90deg)  scale(1.2);   }
   to {  transform: translate(-50%, -50%) rotate(-90deg) scale(1);   }
`;

const MainContainer = styled(motion.div)`
   min-width: 100vw;
   min-height: 100vh;
   position: relative;
`;

const Timeline = styled.div`
   width: 80vw;
   max-width: 40rem;

   & p {
      margin-bottom: 0;
      padding-right: 2rem;
      font-size: calc(1em + 0.5vw);
   }
`;

const Item = styled.article`
   border-top: 2px dashed ${props => props.theme.text};
   margin: 0;
   padding: 4rem 2rem;
   position: relative;

   &:nth-child(even) {
      border-left: 2px dashed ${props => props.theme.text};
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      margin-right: 2rem;
      padding-right: 0;

      span {
         left: 0;
      }
   }

   &:nth-child(odd) {
      border-right: 2px dashed ${props => props.theme.text};
      border-top-right-radius: 2rem;
      border-bottom-right-radius: 2rem;
      margin-left: 2rem;
      padding-right: 0;

      span {
         right: 0;
         transform: translate(50%, -50%);
      }
   }

   &:first-child {
      border-top: 0;
      border-top-right-radius: 0;
   }
   &:last-child {
      border-bottom-left-radius: 0;
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

const Content = styled.div`
   display: flex;
   justify-content: space-between;

   gap: 5vw;
   position: relative;

   margin-top: 10rem; // padding top 💥
   padding-left: 5vw;
   padding-right: 5vw;
   `;

   const Svg = styled(motion.div)`
      position: absolute;
      bottom: -20px;
      left: 50%;
      cursor: pointer;
      z-index: 10;
   
      svg {
         fill: ${props => props.theme.text};
      }
   
      animation: ${Bounce} 0.5s linear infinite alternate;
   `;
   
*/
