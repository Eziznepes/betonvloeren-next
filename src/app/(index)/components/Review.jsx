"use client";
import Slider from "react-slick";
import avatar1 from "@/public/images/avatars/1.png";
import avatar2 from "@/public/images/avatars/2.png";
import reviewPng from "@/public/images/icons/review.png";
import stars from "@/public/images/stars.png";
import Image from "next/image";

const ReviewList = [
  {
    id: "1",
    avatar: avatar1,
    review: (
      <>
        &quot;Uitstekend geholpen bij het aanbrengen van een betonvloer.&quot;
      </>
    ),
    review_count: "5",
    name: "Angelo White",
    stars: "5",
  },
  {
    id: "2",
    avatar: avatar2,
    review: (
      <>
        &quot;Ben erg tevreden met mijn betonlook gietvloer in de
        woonkamer&quot;
      </>
    ),
    review_count: "5",
    name: "Rafael H",
    stars: "7",
  },
  {
    id: "3",
    avatar: avatar2,
    review: <>&quot;Uitstekend geholpen van een betonvloer.&quot;</>,
    review_count: "5",
    name: "Angelo White",
    stars: "1",
  },
  {
    id: "4",
    avatar: avatar1,
    review: <>&quot;Ben erg tevreden met mijn betonlook.&quot;</>,
    review_count: "5",
    name: "Rafael H",
    stars: "15",
  },
];

export default function Review() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="review">
      <div className="auto__container">
        <div className="review__inner">
          <div className="review__image">
            <Image src={reviewPng} alt="reviewPng" />
          </div>
          <div className="review__items">
            <Slider {...settings}>
              {ReviewList.map((item, index) => {
                return <ReviewItem itemData={item} key={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

const ReviewItem = ({ itemData }) => {
  return (
    <div className="review__item">
      <div className="review__item-image">
        <Image src={itemData.avatar} alt="avatar" />
      </div>
      <div className="review__item-content">
        <p className="extrasm">{itemData.review}</p>
        <div className="review__item-body">
          <h5 className="bold">{itemData.name}</h5>
          <div className="review__item-row">
            <h5 className="sm">
              {itemData.review_count}{" "}
              {parseInt(itemData.review_count) > 1 ? "Reviews" : "Review"}
            </h5>
            <div className="stars">
              <Image src={stars} alt="stars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
