import React from "react";

export default function Intro() {
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
        </div>
      </div>
    </section>
  );
}
