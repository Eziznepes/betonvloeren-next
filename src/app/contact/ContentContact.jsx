import React from "react";
import { mailSvg, phoneSvg } from "../base/SVG";
import ButtonRow from "../(index)/components/wrapper/Content/components/ButtonRow";

export default function ContentContact() {
  return (
    <div className="content">
      <div className="content__contact">
        <div className="content__contact-box">
          <div className="content__contact-box-image">
            <img src="images/icons/verified.png" alt="" />
          </div>
          <div className="content__contact-box-body">
            <h4 className="big">Betonvloeren.nl</h4>
            <p>Specialist in betonvloeren</p>
          </div>
        </div>
        <div className="content__contact-desc">
          <p className="uniq">
            Met 18 jaar ervaring in <strong>betonvloeren</strong>, gietvloeren
            vloercoatings en beton cire, zijn wij uw partner als het gaat om
            <span>betonvloeren</span>.
          </p>
        </div>
        <div className="content__contact-links">
          <a href="tel:020 - 370 91 51" className="content__contact-link">
            {phoneSvg}
            020 - 370 91 51*
          </a>
          <a
            href="mailto:info@betonvloeren.nl"
            className="content__contact-link"
          >
            {mailSvg}
            info@betonvloeren.nl
          </a>
        </div>
        <div className="content__contact-time">
          <p className="uniqsm">
            * Bereikbaar op <a href="#">werkdagen</a> van{" "}
            <a href="#">09:00 tot 18:00</a> voor een geheel vrijblijvend
            orienterend gesprek.
          </p>
        </div>
        <div className="content__contact-room">
          <h3 className="uniq">Onze showroom bezoeken</h3>
          <p className="uniq">
            U bent meer dan welkom in onze showroom te Amsterdam. Onder het
            genot van een kopje koffie leggen wij u graag de mogelijkheden uit.
          </p>
          <div className="content__contact-room-image">
            <img src="images/room.jpg" alt="" />
          </div>
          <p className="uniq">
            Wij zijn <a href="#">geopend van ma t/m za</a> en op afspraak te
            bezoeken.{" "}
            <strong>Plan daarom alstublieft van te voren een afspraak </strong>{" "}
            zodat wij gericht de tijd voor u kunnen nemen.
          </p>
        </div>
        <ButtonRow type={"type1"} />
        <div className="content__contact-hours">
          <h3 className="uniq">Onze openingstijden</h3>
          <p className="uniq">
            <a href="#">Maandag t/m zaterdag van 09:00 uur tot 18:00 uur.</a>
          </p>
        </div>
        <div className="content__contact-tel">
          <h3 className="uniq">Telefonisch contact</h3>
          <p className="uniq">
            U kunt ons bereiken voor advies op maat. Telefonisch zijn wij van
            maandag t/m zaterdag bereikbaar van 09:00 uur tot 18:00 uur.
          </p>
        </div>
        <div className="content__contact-call">
          <h3 className="uniq">Video call</h3>
          <p className="uniq">
            Wilt u liever een gesprek via de computer met bijvoorbeeld Zoom of
            Google meet? Dat kan natuurlijk ook, vraag naar de mogelijkheden.
          </p>
        </div>
        <div className="content__contact-btn">
          <button className="button primary">Plan hier uw video call in</button>
        </div>
      </div>
    </div>
  );
}
