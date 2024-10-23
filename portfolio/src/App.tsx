import React from 'react';
import './App.css';
import ContextTree from "./components/contexts/ContextTree/ContextTree";
import MainSection from "./components/sections/MainSection/MainSection";

function App() {
  return (
    <div className="App">
      <ContextTree>
        <MainSection />
      </ContextTree>
    </div>
  );
}

export default App;
