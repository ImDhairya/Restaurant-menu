import React from "react";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About";
import Qualities from "../../components/Qualities";
import Menu from "../../components/Menu";
import Reservation from "../../components/Reservation";
import Team from "../../components/Team";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <Team />
      <Reservation />
    </>
  );
}

export default Home;
