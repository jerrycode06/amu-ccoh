import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "./../components/HeroSection";
import InfoSection from "../components/InfoSection";
import SuppliesInfo from "../components/SuppliesInfo";
import HelpDesk from "../components/HelpDesk";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <SuppliesInfo />
      <HelpDesk />
    </>
  );
};

export default Home;
