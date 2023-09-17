import React from "react";
import ButtonRow from "./ButtonRow";
import type1 from "@/public/images/type/1.png";
import type2 from "@/public/images/type/2.png";
import type3 from "@/public/images/type/3.png";
import type4 from "@/public/images/type/4.png";
import Image from "next/image";

const typeList = [
  { id: "1", title: "Beton cire", image: type1 },
  { id: "1", title: "Betonlook", image: type2 },
  { id: "1", title: "Woonbeton", image: type3 },
  { id: "1", title: "Gietvloer beton", image: type4 },
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
        Betonvloeren soorten: <a href="#">beton cire</a>,{" "}
        <a href="#">woonbeton</a>, <a href="#">betonlook gietvloer</a>,{" "}
        <a href="#">gevlinderde betonvloer</a>, <a href="#">gietvloer beton</a>{" "}
        en
        <a href="#">betonnen vloer</a>.
      </p>
      <ButtonRow />
    </div>
  );
}

const TypeItem = ({ itemData }) => {
  return (
    <div className="content__type-item">
      <div className="content__type-item-image">
      <Image src={itemData.image} alt={itemData.title} />
        <a href="#">
          <h6>{itemData.title}</h6>
        </a>
      </div>
    </div>
  );
};
