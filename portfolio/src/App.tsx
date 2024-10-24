import React from 'react';
import './App.css';
import ContextTree from "./components/contexts/ContextTree/ContextTree";
import MainSection from "./components/sections/MainSection/MainSection";
import AboutMe from "./components/sections/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <ContextTree>

          <MainSection />
          <AboutMe/>
          <MainSection />

      </ContextTree>
    </div>
  );
}

export default App;
