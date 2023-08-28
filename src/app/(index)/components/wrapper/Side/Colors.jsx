import React from "react";

const ColorsList = [
  {
    id: "1",
    image: "images/colors/1.png",
  },
  {
    id: "2",
    image: "images/colors/2.png",
  },
  {
    id: "3",
    image: "images/colors/3.png",
  },
  {
    id: "4",
    image: "images/colors/4.png",
  },
  {
    id: "5",
    image: "images/colors/5.png",
  },
  {
    id: "6",
    image: "images/colors/6.png",
  },
];

export default function Colors() {
  return (
    <div className="side__colors">
      <div className="side__colors-title">
        <h3 className="sm">
          Betonvloer designer <span>TM</span>
        </h3>
        <h6>Ontwerp uw eigen betonvloer</h6>
      </div>
      <div className="side__colors-items">
        {ColorsList.map((item, index) => {
          return <ColorItem itemData={item} key={index} />;
        })}
      </div>
    </div>
  );
}
const ColorItem = ({ itemData }) => {
  return (
    <div className="side__colors-item">
      <div className="side__colors-item-image">
        <img src={itemData.image} alt="" />
      </div>
    </div>
  );
};
