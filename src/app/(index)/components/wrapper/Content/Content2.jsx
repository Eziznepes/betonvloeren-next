import React from "react";
import Info from "./components/Info";
import ButtonRow from "./components/ButtonRow";
import Type from "./components/Type";
import Detail from "./components/Detail";
import Adv from "./components/Adv";
import Choose from "./components/Choose";
import Faq from "../Side/components/Faq";

export default function Content2() {
  return (
    <div className="content">
      <ButtonRow type={"type1"} />
      <div className="content__about">
        <h3 className="sm">
          Wat zijn betonvloeren en waarom zijn ze populair?
        </h3>
        <div className="content__about-inner">
          <p className="extrasm">
            <strong>Betonvloeren</strong> zijn gemaakt van een sterk, natuurlijk
            en duurzaam mengsel van cement, water, zand en grind.
          </p>
          <p className="extrasm">
            <span>Betonvloeren</span> zijn verkrijgbaar in diverse kleuren,
            texturen en afwerkingen en geven elke ruimte een unieke look & feel.
          </p>
        </div>
      </div>
      <Faq />
      <Type />
      <Detail />
      <Adv />
      <Choose />
    </div>
  );
}
