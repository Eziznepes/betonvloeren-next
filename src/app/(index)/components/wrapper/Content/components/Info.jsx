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
    <div className="content__info">
      {infoList.map((item, index) => {
        return <InfoItem itemData={item} key={index} />;
      })}
    </div>
  );
}
const InfoItem = ({ itemData }) => {
  return (
    <a href="#" className="content__info-item">
      <div className="content__info-item-image">
        <img src={itemData.image} alt="" />
        <h4>
          Alles over <span>{itemData.title}</span>
        </h4>
      </div>
      {itemData.tag && (
        <div className="content__info-item-tag">{itemData.tag}</div>
      )}
    </a>
  );
};
