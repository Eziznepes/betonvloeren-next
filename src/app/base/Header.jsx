"use client";
import { useEffect, useState } from "react";
import { mailSvg, phoneSvg } from "./SVG";
import Nav from "./nav/Nav";
import Link from "next/link";
import Image from "next/image";
import stars from "@/public/images/stars.png";
import logoImg from "@/public/images/logo.png";
import logoWhite from "@/public/images/logo-white.png";
import phoneCall from "@/public/images/icons/phone-call.png";

export default function Header({ type, btn, link }) {
  const [menu, setMenu] = useState(false);
  const [logo, setLogo] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    setScrollWidth(
      (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight)
    );
    window.addEventListener("scroll", onScroll);
    onScroll();
  }, []);
  const start = 250;
  const onScroll = () => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
      setLogo(true);
    } else {
      document.getElementById("header").classList.remove("sticky");
      setLogo(false);
    }
    setScrollWidth(
      (window.scrollY * 100) / (document.body.scrollHeight - window.innerHeight)
    );
  };
  useEffect(() => {
    if (menu) {
      if (!document.getElementById("header").classList.contains("sticky")) {
        document.getElementById("header").classList.add("active");
      }
      document.body.classList.add("active");
    } else {
      document.getElementById("header").classList.remove("active");
      document.body.classList.remove("active");
    }
  }, [menu]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <header className={`header ` + (type ? "second " : "")} id="header">
      <div className="headerTop">
        <div className="auto__container">
          <div className="headerTop__inner">
            <div className="promo">
              <div className="promo__text">
                Best beoordeelde betonvloeren specialist met{" "}
                <a href="#">200+ reviews</a>!
              </div>
              <Image src={stars} alt={"stars"} />
            </div>
            <div className="headerTop__links">
              <a href="mailto:Info@betonvloeren.nl" className="headerTop__link">
                {mailSvg}
                Info@betonvloeren.nl
              </a>
              <a href="tel:020-370-91-51" className="headerTop__link phone">
                {phoneSvg}
                020 - 370 91 51
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="headerBot">
        <div className="auto__container">
          <div className="headerBot__inner">
            <div
              className="headerBot__scroll"
              style={{ width: `${scrollWidth}%` }}
            ></div>
            <Link href="/" className="headerBot__inner-logo">
              {type === "second" ? (
                <Image src={logoImg} alt={"logo"} />
              ) : (
                <>
                  {menu ? (
                    <Image src={logoImg} alt={"logo"} />
                  ) : (
                    <>
                      {logo ? (
                        <Image src={logoImg} alt={"logo"} />
                      ) : (
                        <Image src={logoWhite} alt={"logoWhite"} />
                      )}
                    </>
                  )}
                </>
              )}
            </Link>
            <Nav menu={menu} close={close} />
            <div
              className={"burger " + (menu ? "active" : "")}
              onClick={() => {
                setMenu(!menu);
              }}
            >
              <span></span>
            </div>
            {btn === "phone" ? (
              <a href="tel:020 - 370 91 51" className="headerBot__inner-btn">
                <Image src={phoneCall} alt={"logo"} />
                020 - 370 91 51
              </a>
            ) : (
              <button type="button" className="button primary">
                Offerte aanvragen
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="header__breadcrumbs">
        <div className="auto__container">
          <div className="header__breadcrumbs-inner">
            <div
              className="header__breadcrumbs-inner-scroll"
              style={{ width: `${scrollWidth}%` }}
            ></div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>&gt; &gt;</span>
              </li>
              <li>{link}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
