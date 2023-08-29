import React from "react";
import ButtonRow from "./ButtonRow";

const typeList = [
  { id: "1", title: "Beton cire", image: "images/type/1.png" },
  { id: "1", title: "Betonlook", image: "images/type/2.png" },
  { id: "1", title: "Woonbeton", image: "images/type/3.png" },
  { id: "1", title: "Gietvloer beton", image: "images/type/4.png" },
];

export default function Type() {
  return (
    <div className="content__type">
      <h2>Soorten betonvloeren</h2>
      <p className="extra">
        Er zijn verschillende soorten <span>betonvloeren</span> die u kunt
        kiezen voor uw woning of bedrijf. Elk met zijn eigen kenmerken, voor- en
        nadelen.
      </p>
      <div className="content__type-items">
        {typeList.map((item, index) => {
          return <TypeItem itemData={item} key={index} />;
        })}
      </div>
      <h3 className="sm">Welke soorten betonvloeren zijn er?</h3>
      <p className="extra">
        Betonvloeren soorten: <a href="#">beton cire</a>,
        <a href="#">woonbeton</a>,<a href="#">betonlook gietvloer</a>,
        <a href="#">gevlinderde betonvloer</a>,<a href="#">gietvloer beton</a>{" "}
        en
        <a href="#">betonnen vloer</a>.
      </p>
      <ButtonRow />
    </div>
  );
}

const TypeItem = ({ itemData }) => {
  return (
    <a href="#" className="content__type-item">
      <div className="content__type-item-image">
        <img src={itemData.image} alt="" />
        <h6>{itemData.title}</h6>
      </div>
    </a>
  );
};
