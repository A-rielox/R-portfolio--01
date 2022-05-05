import React, { useState, useEffect } from 'react';

import { Routes, Route /* , useLocation */ } from 'react-router-dom';

// import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme /* , DarkTheme */ } from './components/Themes';

// prettier-ignore
import { Main, AboutPage, MySkillsPage, BlogPage, WorkPage } from "./components";

function App() {
   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
      setTimeout(() => {
         setLoaded(true);
      }, 4000);
   }, []);

   return (
      <>
         <GlobalStyle />

         <ThemeProvider theme={lightTheme}>
            <Routes>
               <Route exact path="/" element={<Main loaded={loaded} />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/blog" element={<BlogPage />} />
               <Route path="/work" element={<WorkPage />} />
               <Route path="/skills" element={<MySkillsPage />} />
            </Routes>
         </ThemeProvider>
      </>
   );
}

export default App;
