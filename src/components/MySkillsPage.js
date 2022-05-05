import React from 'react';
import styled from 'styled-components';

import { useViewportScroll } from 'framer-motion';

import LogoMainPage from './subComponents/LogoMainPage';
import LeftContent from './mySkillsComponents/LeftContent';
import RightContent from './mySkillsComponents/RightContent';
import TheEndSign from './mySkillsComponents/TheEndSign';

const MySkillsPage = () => {
   const { scrollYProgress } = useViewportScroll();

   return (
      <MainContainer className="MAIN CONTAINER">
         <LogoMainPage color="light" />

         <Content className="COOOOONTENT">
            <LeftContent />

            <RightContent />
         </Content>

         <TheEndSign scrollprogress={scrollYProgress} />
      </MainContainer>
   );
};

export default MySkillsPage;

const MainContainer = styled.div`
   min-width: 100vw;
   min-height: 100vh;
`;

const Content = styled.div`
   display: flex;
   justify-content: space-between;

   gap: 5vw;
   position: relative;

   margin-top: 10rem; // padding top 💥
   /* margin-left: 2vw;
   margin-right: 2vw; */

   padding-left: 5vw;
   padding-right: 5vw;
`;
