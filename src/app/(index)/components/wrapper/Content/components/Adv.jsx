import React from "react";
import ButtonRow from "./ButtonRow";
import Image from "next/image";
import tick from "@/public/images/icons/tick.png";
import adv1 from "@/public/images/adv/1.jpg";
import adv2 from "@/public/images/adv/2.jpg";
import adv3 from "@/public/images/adv/3.jpg";
import adv4 from "@/public/images/adv/4.jpg";
const AdvList = [
  {
    id: "1",
    title: "Betonvloeren: Naadloos, slijtvast en duurzaam",
    desc: (
      <>
        Een betonvloer is duurzaam en slijtvast. Een goed gestorte en afgewerkte
        betonvloer kan jarenlang meegaan zonder te beschadigen of te vervormen.
      </>
    ),
    image: adv1,
  },
  {
    id: "2",
    title: "Betonvloeren: Unieke en natuurlijke uitstraling",
    desc: (
      <>
        Betonvloeren passen goed bij verschillende interieurstijlen, van
        industrieel tot landelijk. Elke betonvloer heeft zijn eigen karakter en
        kleurschakering.
      </>
    ),
    image: adv2,
  },
  {
    id: "3",
    title: "Betonvloeren: hygiënisch en onderhoudsvriendelijk",
    desc: (
      <>
        Betonvloeren zijn ook makkelijk schoon te maken met een dweil of
        stofzuiger. Betonvloer heeft geen speciale behandeling of producten
        nodig qua onderhoud.
      </>
    ),
    image: adv3,
  },
  {
    id: "4",
    title: "Betonvloeren: geschikt voor vloerverwarming",
    desc: (
      <>
        Betonvloeren kunnen ook gecombineerd worden met isolatiemateriaal,
        waardoor ze de warmte beter vasthouden en energie besparen.
      </>
    ),
    image: adv4,
  },
];

export default function Adv() {
  return (
    <div className="content__adv">
      <div className="content__adv-title">
        <h2>De voordelen van betonvloeren</h2>
        <Image src={tick} alt="tick" />
      </div>
      <p className="extra">
        Betonvloeren zijn naadloze, slijtvaste en duurzame vloeren met een
        unieke en natuurlijke uitstraling. Een betonvloer is ook geschikt voor
        vloerverwarming en isolatie, hygiënisch en onderhoudsvriendelijk. en.
      </p>
      <div className="content__adv-row">
        <AdvItem itemData={AdvList[0]} />
        <AdvItem itemData={AdvList[1]} />
      </div>
      <ButtonRow type={"type1"} />
      <div className="content__adv-row">
        <AdvItem itemData={AdvList[2]} />
        <AdvItem itemData={AdvList[3]} />
      </div>
    </div>
  );
}

const AdvItem = ({ itemData }) => {
  return (
    <div className="content__adv-item">
      <div className="content__adv-item-image">
        <Image src={itemData.image} alt={itemData.id} />
      </div>
      <h3 className="sm">{itemData.title}</h3>
      <p className="extra">{itemData.desc}</p>
    </div>
  );
};
