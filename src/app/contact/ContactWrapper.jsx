import React from "react";
import ContentContact from "./ContentContact";
import SideContact from "./SideContact";

export default function ContactWrapper({ setColorData, setColorModal }) {
  return (
    <section className="wrapper" id="wrapper2">
      <div className="auto__container">
        <div className="wrapper__inner">
          <ContentContact />
          <SideContact
            setColorData={setColorData}
            setColorModal={setColorModal}
          />
        </div>
      </div>
    </section>
  );
}
