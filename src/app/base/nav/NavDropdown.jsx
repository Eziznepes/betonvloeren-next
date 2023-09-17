import React, { useEffect, useRef, useState } from "react";
import { caretDown, chevronRight } from "../SVG";
import nav1 from "@/public/images/nav/1.jpg";
import nav2 from "@/public/images/nav/2.jpg";
import Image from "next/image";

const NavList = [
  {
    id: "1",
    image: nav1,
    title: "Beton cire",
    desc: (
      <>
        Beton cire is een prachtige techniek om uw woning of bedrijfsruimte een
        stoer en robuist uiterlijk te geven.
      </>
    ),
  },
  {
    id: "2",
    image: nav2,
    title: "Gietvloer beton",
    desc: (
      <>
        Beton cire is een prachtige techniek om uw woning of bedrijfsruimte een
        stoer en robuist uiterlijk te geven.
      </>
    ),
    tag: "meest verkocht",
    topSell: true,
  },
];

export default function NavDropdown({ title }) {
  const wrapper = useRef(null);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setDropdown(false);
    };

    if (dropdown) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [dropdown]);
  return (
    <div
      className={"nav__inner-dropdown " + (dropdown ? "active" : "")}
      ref={wrapper}
    >
      <div
        className="nav__inner-dropdown-title"
        onClick={() => setDropdown(!dropdown)}
      >
        {title}
        {caretDown}
      </div>
      <div className="nav__inner-dropdown-content">
        {NavList.map((item, index) => {
          return <DropdownItem itemData={item} key={index} />;
        })}
      </div>
    </div>
  );
}
const DropdownItem = ({ itemData }) => {
  return (
    <a
      href="#"
      className={
        "nav__inner-dropdown-item " + (itemData.topSell ? "topSell" : "")
      }
    >
      <div className="nav__inner-dropdown-item-image">
        <Image src={itemData.image} alt={"nav-image"} />
      </div>
      <div className="nav__inner-dropdown-item-content">
        <div className="nav__inner-dropdown-item-content-title">
          <h4>{itemData.title}</h4>
          {itemData.tag && (
            <div className="nav__inner-dropdown-item-content-tag">
              {itemData.tag}
            </div>
          )}
        </div>
        <p>{itemData.desc}</p>
      </div>
      {chevronRight}
    </a>
  );
};
