import Link from "next/link";
import React from "react";
import lenova from "@/public/images/sponsors/lenova.png";
import ikea from "@/public/images/sponsors/ikea.png";
import geemente from "@/public/images/sponsors/geemente.png";
import dell from "@/public/images/sponsors/dell.png";
import lg from "@/public/images/sponsors/lg.png";
import tick from "@/public/images/icons/tick.png";
import mail from "@/public/images/icons/mail.png";
import phoneCallBlue from "@/public/images/icons/phone-call-blue.png";
import Image from "next/image";

const sponsors = [
  {
    id: "1",
    image: lenova,
    title: "lenova",
  },
  {
    id: "2",
    image: ikea,
    title: "ikea",
  },
  {
    id: "3",
    image: geemente,
    title: "geemente",
  },
  {
    id: "4",
    image: dell,
    title: "dell",
  },
  {
    id: "5",
    image: lg,
    title: "lg",
  },
];
export default function InfoBar() {
  return (
    <section className="infobar">
      <div className="auto__container">
        <div className="infobar__inner">
          <div className="infobar__items">
            <div className="infobar__item">
              <Image src={tick} alt={"tick"} />
              <h5>7000+ betonvloeren gestort</h5>
            </div>
            <div className="infobar__item">
              <Image src={tick} alt={"tick"} />
              <h5>Beste prijs/kwaliteit betonvloer</h5>
            </div>
          </div>
          <div className="sponsor">
            {sponsors.map((item, index) => {
              return (
                <div className="sponsor__item" key={index}>
                  <Image src={item.image} alt={item.title} />
                </div>
              );
            })}
          </div>
          <div className="infobar__row">
            <div className="infobar__row-item">
              <div className="infobar__row-item-title">email ons</div>
              <Image src={mail} alt={"mail"} />
            </div>
            <Link href={"/offer"} className="button primary">
              Offerte aanvragen
            </Link>
            <div className="infobar__row-item">
              <div className="infobar__row-item-title">bel ons</div>
              <Image src={phoneCallBlue} alt={"phoneCallBlue"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
