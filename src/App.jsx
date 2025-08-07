import { useState } from "react";
import React from "react";
import "./App.css";
import NavSlider from "./components/NavSlider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LatestTweets from "./components/latestTweets";
import Minting from "./components/Minting";
import Roadmap from "./components/RoadMap";
import Team from "./components/Team";
import Faq from "./components/Faq";
import BreakingNews from "./components/BreakingNews";


function App() {
  return (
    <>
      <NavSlider />
      <Header />
      <Hero />
      <BreakingNews />
      <LatestTweets />
      <Minting />
      <Roadmap />
      <Team />
      <Faq />
    </>
  );
}
export default App;