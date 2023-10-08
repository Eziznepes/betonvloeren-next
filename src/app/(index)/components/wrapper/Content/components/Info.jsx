import React from "react";

const infoList = [
  {
    id: "1",
    title: "Betonvloer",
    image: "images/info/1.png",
    tag: "meest verkocht",
  },
  {
    id: "2",
    title: "Beton cire",
    image: "images/info/2.png",
  },
  {
    id: "3",
    title: "Woonbeton",
    image: "images/info/3.png",
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
        <img src={itemData.image} alt="" />
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
