import gsap, { Expo } from "gsap";
import React, { useEffect, useState } from "react";
// import { useNavigate, NavLink } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

const tl = gsap.timeline();

const Header = ({ windowDimension }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // run open menu animation
      gsap.to("nav", {
        duration: 0,
        css: {
          display: "block",
        },
      });

      gsap.to("body", {
        duration: 0,
        css: {
          overflow: "hidden",
        },
      });

      console.log(windowDimension);

      tl.to(".App", {
        duration: 1,
        y:
          windowDimension.width <= 654
            ? "70vh"
            : `${windowDimension.height / 2}`,
        ease: "expo.inOut",
      })
        .to(".hamburger-menu span:nth-child(1)", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          rotate: 180,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span:nth-child(2)", {
          duration: 0.6,
          delay: -1.7,
          scaleX: 0,
          rotate: -180,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .set(gsap.utils.toArray(["#Path_1", "#Path_2", "#Line_1", "#circle"]), {
          css: {
            strokeDashoffset: 1,
            strokeDasharray: 1,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.8,
          strokeDashoffset: 0,
        })
        .to(".hamburger-menu-close", {
          duration: -0.8,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      tl.to(".App", {
        duration: 1,
        y: 0,
        ease: Expo.easeInOut,
      })
        .to(".hamburger-menu span:nth-child(1)", {
          duration: 0.6,
          delay: -1,
          scaleX: 1,
          rotate: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span:nth-child(2)", {
          duration: 0.6,
          delay: -1.7,
          scaleX: 1,
          rotate: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        });
    }
  }, [isMenuOpen, windowDimension]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <div className="nav-toggle">
            <div onClick={() => setIsMenuOpen(true)} className="hamburger-menu">
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setIsMenuOpen(false)}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
