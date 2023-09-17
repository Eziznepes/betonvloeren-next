import React from "react";
import contactBg from "@/public/images/contactBg.jpg";
import starsDark from "@/public/images/starsDark.png";
import Image from "next/image";

export default function ContactIntro() {
  return (
    <div className="contact__intro">
      <div className="contact__intro-bg">
        <Image src={contactBg} alt={"contactBg"} />
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
            <Image src={starsDark} alt={"starsDark"} />
          </div>
        </div>
      </div>
    </div>
  );
}
