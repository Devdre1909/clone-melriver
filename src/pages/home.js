import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";

import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";

const tl = gsap.timeline();

const homeAnimation = (onAnimationComplete) => {
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
      onComplete: onAnimationComplete,
    });

  return tl;
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const onAnimationComplete = () => setAnimationComplete(true);

  useLayoutEffect(() => {
    const tl = homeAnimation(onAnimationComplete);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      {!animationComplete && <IntroOverlay />}
      <Banner />
      <Cases />
    </div>
  );
};

export default Home;
