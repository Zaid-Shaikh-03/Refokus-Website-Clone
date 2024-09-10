import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marquees from "./components/Marquees";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import "./App.css";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    gsap.to(cursor, {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      duration: 0.2,
      ease: "power3.out",
      overwrite: true,
    });
  }, [mousePosition]);

  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <div className="custom-cursor bg-white h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference" />
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
