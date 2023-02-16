import React from "react";
import AboutSection from "./AboutSection";
import Footer from "./global/Footer";
import HeaderSection from "./HeaderSection";
import MenuSection from "./MenuSection";
import Testmonials from "./Testmonials";

export default function Home() {
  return (
    <div className="home">
      <div>
        <HeaderSection />
        <MenuSection />
        <Testmonials />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
