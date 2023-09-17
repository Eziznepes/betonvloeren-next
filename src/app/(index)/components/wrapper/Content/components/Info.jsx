import React from "react";
import info1 from "@/public/images/info/1.png";
import info2 from "@/public/images/info/2.png";
import info3 from "@/public/images/info/3.png";
import Image from "next/image";

const infoList = [
  {
    id: "1",
    title: "Betonvloer",
    image: info1,
    tag: "meest verkocht",
  },
  {
    id: "2",
    title: "Beton cire",
    image: info2,
  },
  {
    id: "3",
    title: "Woonbeton",
    image: info3,
  },
];

export default function Info() {
  return (
    <div className="wrap__content-info">
      {infoList.map((item, index) => {
        return <InfoItem itemData={item} key={index} />;
      })}
    </div>
  );
}
const InfoItem = ({ itemData }) => {
  return (
    <div className="wrap__content-info-item">
      <div className="wrap__content-info-item-image">
        <Image src={itemData.image} alt={itemData.title} />
        <a href="#">
          <h4>
            Alles over <span>{itemData.title}</span>
          </h4>
        </a>
      </div>
      {itemData.tag && (
        <div className="wrap__content-info-item-tag">{itemData.tag}</div>
      )}
    </div>
  );
};
