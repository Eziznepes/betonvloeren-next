import Image from "next/image";
import Link from "next/link";
import React from "react";
import introBg from "@/public/images/introBg.jpg";
import introScroll from "@/public/images/introScroll.png";
import starsDark from "@/public/images/starsDark.png";
import bill from "@/public/images/icons/bill.png";
import imageGallery from "@/public/images/icons/image-gallery.png";
import color1 from "@/public/images/colors/1.png";
import latte from "@/public/images/latte.jpg";
import paintPalette from "@/public/images/icons/paint-palette.png";

export default function Intro({ setColorData, setColorModal }) {
  return (
    <section className="intro">
      <div className="intro__bg">
        <Image src={introBg} alt="introBg" />
      </div>
      <div className="auto__container">
        <div className="intro__inner">
          <h1>
            Betonvloeren <br />
            een duurzame <br />
            en veelzijdige vloer
          </h1>
          <div className="intro__inner-scroll">
            <Image src={introScroll} alt="introScroll" />
          </div>
          <div className="promo">
            <div className="promo__text">
              <strong>Best beoordeelde</strong> betonvloeren specialist met{" "}
              <a href="#">200+ reviews</a>!
            </div>
            <Image src={starsDark} alt="starsDark" />
          </div>
          <div className="intro__links">
            <Link href={"offer"} className="intro__link-outer">
              <div className="intro__link">
                <div className="intro__link-inner">
                  <Image src={bill} alt="bill" />
                </div>
              </div>
              <div className="intro__link-title">Offerte aanvragen</div>
            </Link>
            <Link href={"photo"} className="intro__link-outer">
              <div className="intro__link">
                <div className="intro__link-inner">
                  <Image src={imageGallery} alt="imageGallery" />
                </div>
              </div>
              <div className="intro__link-title">Betonvloer foto’s</div>
            </Link>
            <div
              className="intro__link-outer"
              onClick={() => {
                setColorModal(true);
                setColorData({
                  id: "1",
                  image: color1,
                  mainImage: latte,
                  title: "Space grey",
                });
              }}
            >
              <div className="intro__link">
                <div className="intro__link-inner">
                  <Image src={paintPalette} alt="paintPalette" />
                </div>
              </div>
              <div className="intro__link-title">Creeer uw vloer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
