import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Background from './Components/Background/Background';
import Navbar from "./Components/Navbar/Navbar";
import Hero from './Components/Hero/Hero';
import Calculator from './Components/Calculator/Calculator';
import About from './Components/About/About';

const App = () => {
  let heroData = [
    { text1: "Coal Emission is Rising", text2: "Take Action Now!" },
    { text1: "Sustainable Mining is Possible", text2: "Join the Change" },
    { text1: "Reduce Your Carbon Footprint", text2: "Start Tracking Today" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
            <Background playStatus={playStatus} heroCount={heroCount} />
          </>
        } />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/background" element={<Background />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/hero" element={
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;
