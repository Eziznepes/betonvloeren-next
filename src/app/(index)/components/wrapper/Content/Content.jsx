import React from "react";
import Info from "./components/Info";
import ButtonRow from "./components/ButtonRow";
import Type from "./components/Type";
import Detail from "./components/Detail";
import Adv from "./components/Adv";
import Choose from "./components/Choose";

export default function Content() {
  return (
    <div className="content">
      <div className="content__text">
        <p className="extra">
          <strong>Betonvloeren</strong> zijn niet alleen mooi en modern, maar
          ook duurzaam en hygienisch. Maar welke soort
          <strong>betonvloer</strong> past het beste bij uw project?
        </p>
        <p className="extra">
          Op deze pagina vindt u alle informatie die u nodig heeft over de
          <a href="#">verschillende soorten</a>,<a href="#">voordelen</a>,{" "}
          <a href="#">nadelen</a> en
          <a href="#">prijzen van betonvloeren</a>.
        </p>
      </div>
      <Info />
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
      <Type />
      <Detail />
      <Adv />
      <Choose />
    </div>
  );
}
