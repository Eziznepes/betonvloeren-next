"use client";
import Side from "./Side/Side";
import Content from "./Content/Content";

export default function Wrapper() {
  return (
    <section className="wrapper">
      <div className="wrapper__element">
        <img src="images/wrapperElement.png" alt="" />
      </div>
      <div className="auto__container">
        <div className="wrapper__inner">
          <Content />
          <Side />
        </div>
      </div>
    </section>
  );
}
