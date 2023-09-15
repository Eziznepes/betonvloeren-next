import React from "react";
import Info from "./components/Info";
import ButtonRow from "./components/ButtonRow";
import Type from "./components/Type";
import Detail from "./components/Detail";
import Adv from "./components/Adv";
import Choose from "./components/Choose";

export default function Content() {
  return (
    <div className="wrap__content">
      <div className="wrap__content-text">
        <p className="uniq">
          <strong>Betonvloeren</strong> zijn niet alleen mooi en modern, maar
          ook duurzaam en hygienisch. Maar welke soort
          <strong>betonvloer</strong> past het beste bij uw project?
        </p>
        <p className="uniq">
          Op deze pagina vindt u alle informatie die u nodig heeft over de{" "}
          <a href="#">verschillende soorten</a>,<a href="#">voordelen</a>,{" "}
          <a href="#">nadelen</a> en{" "}
          <a href="#">prijzen van betonvloeren</a>.
        </p>
      </div>
      <Info />
    </div>
  );
}
