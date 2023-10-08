import Link from "next/link";
import React from "react";

export default function Intro({ setColorData, setColorModal }) {
  return (
    <section className="intro">
      <div className="intro__bg">
        <img src="images/introBg.jpg" alt="" />
      </div>
      <div className="auto__container">
        <div className="intro__inner">
          <h1>
            Betonvloeren <br />
            een duurzame <br />
            en veelzijdige vloer
          </h1>
          <div className="intro__inner-scroll">
            <img src="images/introScroll.png" alt="" />
          </div>
          <div className="promo">
            <div className="promo__text">
              <strong>Best beoordeelde</strong> betonvloeren specialist met{" "}
              <a href="#">200+ reviews</a>!
            </div>
            <img src="images/starsDark.png" alt="" />
          </div>
          <div className="intro__links">
            <Link href={"offer"} className="intro__link-outer">
              <div className="intro__link">
                <div className="intro__link-inner">
                  <img src="images/icons/bill.png" alt="" />
                </div>
              </div>
              <div className="intro__link-title">Offerte aanvragen</div>
            </Link>
            <Link href={"photo"} className="intro__link-outer">
              <div className="intro__link">
                <div className="intro__link-inner">
                  <img src="images/icons/image-gallery.png" alt="" />
                </div>
              </div>
              <div className="intro__link-title">Betonvloer foto’s</div>
            </Link>
            <div
              className="intro__link-outer"
              onClick={() => {
                setColorModal(true);
                setColorData({
                  id: "1",
                  image: "images/colors/1.png",
                  mainImage: "images/latte.jpg",
                  title: "Space grey",
                });
              }}
            >
              <div className="intro__link">
                <div className="intro__link-inner">
                  <img src="images/icons/paint-palette.png" alt="" />
                </div>
              </div>
              <div className="intro__link-title">Creeer uw vloer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
