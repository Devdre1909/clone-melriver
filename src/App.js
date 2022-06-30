import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Cases from "./components/Cases";

import "./styles/App.scss";
import IntroOverlay from "./components/IntroOverlay";

function App() {
  useEffect(() => {
    setVH();
    window.addEventListener("resize", setVH);

    return () => {
      window.removeEventListener("resive", setVH);
    };
  }, []);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });

    tl.from(".line span", {
      duration: 1.5,
      ease: "power4.out",
      opacity: 0.5,
      delay: 1,
      skewY: 7,
      y: 100,
      stagger: {
        amount: 0.8,
      },
    })
      .to(".overlay-top", {
        duration: 1.6,
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        stagger: 0.4,
        delay: -0.8,
      })
      .to(".intro-overlay", {
        duration: 0,
        css: {
          display: "none",
        },
      })
      .from(".case-image img", {
        duration: 1,
        scale: 1.4,
        rotateZ: 15,
        ease: "expo.inOut",
        delay: -2,
        stagger: 0.4,
      });

    return () => {
      tl.kill();
    };
  }, []);

  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  return (
    <div>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
