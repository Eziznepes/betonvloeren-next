import { checkSvg } from "@/app/base/SVG";
import React from "react";

export default function InfoBar() {
  return (
    <section className="infobar">
      <div className="auto__container">
        <div className="infobar__inner">
          <div className="infobar__items">
            <div className="infobar__item">
              {checkSvg}
              <h5>7000+ betonvloeren gestort</h5>
            </div>
            <div className="infobar__item">
              {checkSvg}
              <h5>Beste prijs/kwaliteit betonvloer</h5>
            </div>
          </div>
          <div className="sponsor">
            <div className="sponsor__item">
              <img src="images/sponsors/lenova.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/ikea.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/geemente.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/dell.png" alt="" />
            </div>
            <div className="sponsor__item">
              <img src="images/sponsors/lg.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
