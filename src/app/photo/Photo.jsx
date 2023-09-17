import React from "react";
import photo1 from "@/public/images/photo/1.jpg";
import photo2 from "@/public/images/photo/2.jpg";
import photo3 from "@/public/images/photo/3.jpg";
import photo4 from "@/public/images/photo/4.jpg";
import photo5 from "@/public/images/photo/5.jpg";
import photo6 from "@/public/images/photo/6.jpg";
import photo7 from "@/public/images/photo/7.jpg";
import photo8 from "@/public/images/photo/8.jpg";
import photo9 from "@/public/images/photo/9.jpg";
import photo10 from "@/public/images/photo/10.jpg";
import photo11 from "@/public/images/photo/11.jpg";
import photo12 from "@/public/images/photo/12.jpg";
import photo13 from "@/public/images/photo/13.jpg";
import photo14 from "@/public/images/photo/14.jpg";
import photo15 from "@/public/images/photo/15.jpg";
import Image from "next/image";

const ImageList = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
];

export default function Photo() {
  return (
    <div className="photo">
      <div className="photo__inner">
        {ImageList.map((item, index) => {
          return (
            <div className="photo__item" key={index}>
              <div className="photo__item-image">
                <Image src={item} alt={"image-" + index} />
              </div>
            </div>
          );
        })}
      </div>
      <button className="button primary">
        Vraag vrijblijvend een offerte aan
      </button>
    </div>
  );
}
