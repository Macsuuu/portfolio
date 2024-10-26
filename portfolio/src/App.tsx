import React from 'react';
import './App.css';
import ContextTree from "./components/contexts/ContextTree/ContextTree";
import MainSection from "./components/sections/MainSection/MainSection";
import AboutMe from "./components/sections/AboutMe/AboutMe";
import RelaxSection from "./components/sections/RelaxSection/RelaxSection";
import FooterSection from "./components/sections/Footer/FooterSection";

function App() {
  return (
    <div className="App">
      <ContextTree>

          <MainSection />
          <AboutMe/>
            <RelaxSection/>

          <FooterSection/>
      </ContextTree>
    </div>
  );
}

export default App;
