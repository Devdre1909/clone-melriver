import gsap from "gsap";

import { Routes, Route } from "react-router";
import React, { useEffect, useLayoutEffect, useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Approach from "./pages/approach";
import CaseStudies from "./pages/case-studies";
import Services from "./pages/services";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

import debounce from "./utils/debounce";

import "./styles/App.scss";
const routes = [
  {
    path: "/",
    name: "Home",
    Component: Home,
  },
  {
    path: "/case-studies",
    name: "CaseStudies",
    Component: CaseStudies,
  },
  {
    path: "/approach",
    name: "Approach",
    Component: Approach,
  },
  {
    path: "/services",
    name: "Services",
    Component: Services,
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
];

function App() {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const debounceHandleResize = debounce(() => {
    setDimension((prevState) => ({
      ...prevState,
      height: window.innerHeight,
      width: window.innerWidth,
    }));
  }, 1000);

  useEffect(() => {
    setVH();
    debounceHandleResize();
    window.addEventListener("resize", setVH);
    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", setVH);
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [debounceHandleResize]);

  useLayoutEffect(() => {
    gsap.to("body", {
      duration: 0,
      css: {
        visibility: "visible",
      },
    });
  }, []);

  return (
    <>
      <div className="App">
        <Header windowDimension={dimension} />
        <Routes>
          {routes.map(({ Component, name, path }) => (
            <Route key={name} exact path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
      <Navigation />
    </>
  );
}

export default App;
