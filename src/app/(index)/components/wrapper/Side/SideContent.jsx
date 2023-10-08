import React, { useEffect } from "react";
import { phoneSvg } from "@/app/base/SVG";
import Colors from "./components/Colors";
import Link from "next/link";

export default function SideContent({ setColorData, setColorModal }) {
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const onScroll = () => {
    if (document.getElementById("wrapper")) {
      if (
        window.scrollY >=
        document.getElementById("wrapper").offsetTop -
          document.getElementById("header").offsetHeight
      ) {
        document.getElementById("side").classList.add("sticky");
      } else {
        document.getElementById("side").classList.remove("sticky");
      }
    }
  };
  return (
    <div className="side" id="side">
      <div className="side__box">
        <div className="side__box-image">
          <Link href="/photo" className="side__box-image-text">
            <strong>Betonvloer foto’s</strong>
            Het gehele portfolio
          </Link>
          <img src="images/sideBox.jpg" alt="" />
        </div>
        {/* <button type="button" className="button secondary">
          Download onze brochure
        </button> */}
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
      <Colors setColorData={setColorData} setColorModal={setColorModal} />
    </div>
  );
}
