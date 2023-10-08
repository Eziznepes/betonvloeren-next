import React from "react";

export default function ContactIntro() {
  return (
    <div className="contact__intro">
      <div className="contact__intro-bg">
        <img src="images/contactBg.jpg" alt="" />
      </div>
      <div className="auto__container">
        <div className="contact__intro-inner">
          <h2 className="uniq">
            Persoonlijk contact gedurende de gehele project uitvoering
          </h2>
          <div className="promo">
            <div className="promo__text">
              <strong>Best beoordeelde</strong> betonvloeren specialist met{" "}
              <a href="#">200+ reviews</a>!
            </div>
            <img src="images/starsDark.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
