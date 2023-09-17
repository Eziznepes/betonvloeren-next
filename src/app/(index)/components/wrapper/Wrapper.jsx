"use client";
import Side from "./Side/Side";
import Content from "./Content/Content";
import Content2 from "./Content/Content2";
import SideContent from "./Side/SideContent";
import wrapperElement from "@/public/images/wrapperElement.png";
import Image from "next/image";

export default function Wrapper({ setColorData, setColorModal }) {
  return (
    <>
      <section className="wrap">
        <div className="auto__container">
          <div className="wrap__inner">
            <Content />
            <Side />
          </div>
        </div>
      </section>
      <section className="wrapper" id="wrapper">
        <div className="wrapper__element">
          <Image src={wrapperElement} alt={"wrapperElement"} />
        </div>
        <div className="auto__container">
          <div className="wrapper__inner">
            <Content2 />
            <SideContent
              setColorData={setColorData}
              setColorModal={setColorModal}
            />
          </div>
        </div>
      </section>
    </>
  );
}
