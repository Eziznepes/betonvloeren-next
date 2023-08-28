import React from "react";
import { caretDown, phoneSvg } from "@/app/base/SVG";
import Faq from "./Faq";


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
      <div className="side__colors">
        <div className="side__colors-title">
          <h3 className="sm">
            Betonvloer designer <span>TM</span>
          </h3>
          <h6>Ontwerp uw eigen betonvloer</h6>
        </div>
        <div className="side__colors-items">
          <div className="side__colors-item">
            <div className="side__colors-item-image">
              <img src="images/colors/1.png" alt="" />
            </div>
          </div>
          <div className="side__colors-item">
            <div className="side__colors-item-image">
              <img src="images/colors/2.png" alt="" />
            </div>
          </div>
          <div className="side__colors-item">
            <div className="side__colors-item-image">
              <img src="images/colors/3.png" alt="" />
            </div>
          </div>
          <div className="side__colors-item">
            <div className="side__colors-item-image">
              <img src="images/colors/4.png" alt="" />
            </div>
          </div>
          <div className="side__colors-item">
            <div className="side__colors-item-image">
              <img src="images/colors/5.png" alt="" />
            </div>
          </div>
          <div className="side__colors-item">
            <div className="side__colors-item-image">
              <img src="images/colors/6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
