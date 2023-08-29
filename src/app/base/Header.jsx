"use client";
import { mailSvg, phoneSvg } from "./SVG";
import Nav from "./nav/Nav";

export default function Header() {
  return (
    <header className="header">
      <div className="headerTop">
        <div className="auto__container">
          <div className="headerTop__inner">
            <div className="promo">
              <div className="promo__text">
                Best beoordeelde betonvloeren specialist met{" "}
                <a href="#">200+ reviews</a>!
              </div>
              <img src="images/stars.png" alt="" />
            </div>
            <div className="headerTop__links">
              <a href="mailto:Info@betonvloeren.nl" className="headerTop__link">
                {mailSvg}
                Info@betonvloeren.nl
              </a>
              <a href="tel:020-370-91-51" className="headerTop__link phone">
                {phoneSvg}
                020 - 370 91 51
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="headerBot">
        <div className="auto__container">
          <div className="headerBot__inner">
            <a href="index.html" className="headerBot__inner-logo">
              <img src="images/logo.png" alt="" />
            </a>
            <Nav />
            <button type="button" className="button primary">
              Offerte aanvragen
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
