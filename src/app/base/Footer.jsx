import Link from "next/link";
import React from "react";
import {
  faceBookIcon,
  instagramIcon,
  mailSvg,
  phoneSvg,
  tiktokIcon,
  twitterIcon,
} from "./SVG";

export default function Footer() {
  return (
    <div className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footerTop">
            <div className="footerTop__inner">
              <div className="footerTop__left">
                <Link href={"/"} className="footerTop__left-logo">
                  <img src="images/footer-logo.png" alt="" />
                </Link>
                <h5 className="sm">Betonvloeren.nl</h5>
                <div className="footerTop__left-links">
                  <a
                    href="mailto:info@betonvloeren.nl"
                    className="footerTop__left-link"
                  >
                    {mailSvg} info@betonvloeren.nl
                  </a>
                  <a
                    href="tel:020 - 370 91 51"
                    className="footerTop__left-link"
                  >
                    {phoneSvg} 020 - 370 91 51
                  </a>
                </div>
                <h6>Op afspraak te bezoeken!</h6>
                <button className="button primary">Offerte aanvragen</button>
              </div>
              <div className="footerTop__right">
                <div className="footerTop__right-col">
                  <h5 className="sm">Betonvloeren</h5>
                  <div className="footerTop__right-col-links">
                    <a href="#" className="footerTop__right-col-link">
                      Woonbeton
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Beton cire
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Gietvloer beton
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Microcement
                    </a>
                  </div>
                </div>
                <div className="footerTop__right-col">
                  <h5 className="sm">Betonvloeren afwerking</h5>
                  <div className="footerTop__right-col-links">
                    <a href="#" className="footerTop__right-col-link">
                      Woonbeton
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Beton cire
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Gietvloer beton
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Microcement
                    </a>
                  </div>
                </div>
                <div className="footerTop__right-col">
                  <h5 className="sm">Betonvloeren prijs</h5>
                  <div className="footerTop__right-col-links">
                    <a href="#" className="footerTop__right-col-link">
                      Woonbeton
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Beton cire
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Gietvloer beton
                    </a>
                    <a href="#" className="footerTop__right-col-link">
                      Microcement
                    </a>
                  </div>
                </div>
                <div className="footerTop__right-col">
                  <h5 className="sm">Keurmerken</h5>
                  <div className="footerTop__right-col-images">
                    <div className="footerTop__right-col-image">
                      <img src="images/noa.png" alt="" />
                    </div>
                    <div className="footerTop__right-col-image">
                      <img src="images/tba.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="promo">
              <div className="promo__text">
                Best beoordeelde betonvloeren specialist met{" "}
                <a href="#">200+ reviews</a>!
              </div>
              <img src="images/stars.png" alt="" />
            </div>
          </div>
          <div className="footerBot">
            <div className="footerBot__inner">
              <div className="footerBot__info">
                <Link href={"/"} className="footerBot__logo">
                  <img src="images/footer-logo2.png" alt="" />
                </Link>
                <p>
                  Bekijk onze <a href="#"> privacy statement</a> en{" "}
                  <a href="#">terms & conditions</a>
                </p>
              </div>
              <div className="footerBot__socials">
                <a href="#" className="footerBot__social">
                  {twitterIcon}
                </a>
                <a href="#" className="footerBot__social">
                  {faceBookIcon}
                </a>
                <a href="#" className="footerBot__social">
                  {instagramIcon}
                </a>
                <a href="#" className="footerBot__social">
                  {tiktokIcon}
                </a>
              </div>
            </div>
            <div className="footerBot__links">
              <a href="#" className="footerBot__link">
                Beton cire
              </a>
              <a href="#" className="footerBot__link">
                Gevlinderde betonvloer
              </a>
              <a href="#" className="footerBot__link">
                Gietvloer beton
              </a>
              <a href="#" className="footerBot__link">
                Betonlook vloer
              </a>
              <a href="#" className="footerBot__link">
                Design betonvloer
              </a>
              <a href="#" className="footerBot__link">
                Betonvloer coating
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
