import React from "react";
import { caretDown, phoneSvg } from "@/app/base/SVG";
import Faq from "./Faq";
import Colors from "./Colors";

export default function Side() {
  return (
    <div className="side">
      <Faq />
      <div className="side__box">
        <a href="#" className="side__box-image">
          <div className="side__box-image-text">
            <strong>Betonvloer foto’s</strong>
            Het gehele portfolio
          </div>
          <img src="images/sideBox.jpg" alt="" />
        </a>
        <button type="button" className="button secondary">
          Download onze brochure
        </button>
        <button type="button" className="button primary big">
          Offerte aanvragen
        </button>
        <a href="tel:020 - 370 91 51" className="button secondary phone">
          {phoneSvg}
          020 - 370 91 51*
        </a>
      </div>
      <div className="side__note">
        * Bereikbaar op werkdagen van 09:00 tot 18:00 <br />
        voor een geheel vrijblijvend orienterend gesprek.
      </div>
      <Colors />
    </div>
  );
}
