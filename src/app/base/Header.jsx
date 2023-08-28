import React from "react";
import { caretDown, chevronRight, mailSvg, phoneSvg } from "./SVG";

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
            <nav className="nav">
              <div className="nav__inner">
                <div className="nav__inner-dropdown">
                  <div className="nav__inner-dropdown-title">
                    Betonvloeren
                    {caretDown}
                  </div>
                  <div className="nav__inner-dropdown-content">
                    <a href="#" className="nav__inner-dropdown-item">
                      <div className="nav__inner-dropdown-item-image">
                        <img src="images/nav/1.jpg" alt="" />
                      </div>
                      <div className="nav__inner-dropdown-item-content">
                        <div className="nav__inner-dropdown-item-content-title">
                          <h4>Beton cire</h4>
                        </div>
                        <p>
                          Beton cire is een prachtige techniek om uw woning of
                          bedrijfsruimte een stoer en robuist uiterlijk te
                          geven.
                        </p>
                      </div>
                      {chevronRight}
                    </a>
                    <a href="#" className="nav__inner-dropdown-item topSell">
                      <div className="nav__inner-dropdown-item-image">
                        <img src="images/nav/2.jpg" alt="" />
                      </div>
                      <div className="nav__inner-dropdown-item-content">
                        <div className="nav__inner-dropdown-item-content-title">
                          <h4>Gietvloer beton</h4>
                          <div className="nav__inner-dropdown-item-content-tag">
                            meest verkocht
                          </div>
                        </div>
                        <p>
                          Beton cire is een prachtige techniek om uw woning of
                          bedrijfsruimte een stoer en robuist uiterlijk te
                          geven.
                        </p>
                      </div>
                      {chevronRight}
                    </a>
                  </div>
                </div>
                <div className="nav__inner-dropdown">
                  <div className="nav__inner-dropdown-title">
                    Betonvloeren afwerking
                    {caretDown}
                  </div>
                  <div className="nav__inner-dropdown-content">
                    <a href="#" className="nav__inner-dropdown-item">
                      <div className="nav__inner-dropdown-item-image">
                        <img src="images/nav/1.jpg" alt="" />
                      </div>
                      <div className="nav__inner-dropdown-item-content">
                        <div className="nav__inner-dropdown-item-content-title">
                          <h4>Beton cire</h4>
                        </div>
                        <p>
                          Beton cire is een prachtige techniek om uw woning of
                          bedrijfsruimte een stoer en robuist uiterlijk te
                          geven.
                        </p>
                      </div>
                      {chevronRight}
                    </a>
                    <a href="#" className="nav__inner-dropdown-item topSell">
                      <div className="nav__inner-dropdown-item-image">
                        <img src="images/nav/2.jpg" alt="" />
                      </div>
                      <div className="nav__inner-dropdown-item-content">
                        <div className="nav__inner-dropdown-item-content-title">
                          <h4>Gietvloer beton</h4>
                          <div className="nav__inner-dropdown-item-content-tag">
                            meest verkocht
                          </div>
                        </div>
                        <p>
                          Beton cire is een prachtige techniek om uw woning of
                          bedrijfsruimte een stoer en robuist uiterlijk te
                          geven.
                        </p>
                      </div>
                      {chevronRight}
                    </a>
                  </div>
                </div>
                <a href="#" className="nav__inner-link">
                  Betonvloeren prijs
                </a>
                <a href="#" className="nav__inner-link">
                  Foto’s
                </a>
                <a href="#" className="nav__inner-link">
                  Contact
                </a>
              </div>
            </nav>
            <button type="button" className="button primary">
              Offerte aanvragen
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
