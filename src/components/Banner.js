import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

export default function Banner() {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div
              className="line"
              aria-label="Creating unique brand is what we do"
            >
              <div className="line-row">
                <span>Creating</span> <span>unique</span> <span>brands</span>{" "}
                <span>is</span>{" "}
              </div>
            </div>
            <div className="line">
              <div className="line-row">
                <span>what</span>
                <span>we</span>
                <span>do</span>
                <span>.</span>
              </div>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
