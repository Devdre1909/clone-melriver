import React, { useEffect } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";

import "./styles/App.scss";

function App() {
  useEffect(() => {
    setVH();
    window.addEventListener("resize", setVH);

    return () => {
      window.removeEventListener("resive", setVH);
    };
  }, []);

  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
