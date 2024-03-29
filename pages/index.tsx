import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skils from "@/components/Skils";
import Testimonial from "@/components/Testimonial";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
         {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero section */}
        <Hero />
        <div className="relative z-[30]">
          <About />
          {/* Services */}
          <Services />
          <Skils />
          <Projects />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
