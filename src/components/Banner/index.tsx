"use client";
import NextIcon from "@/assets/icons/next.png";
import PrevIcon from "@/assets/icons/previous.png";
import Banner1 from "@/assets/images/banner1.png";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <Image width={59} height={59} src={PrevIcon} alt="" />{" "}
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <Image width={59} height={59} src={NextIcon} alt="" />
    </button>
  ),
};

export const Banner = () => {
  return (
    <div className="w-full h-fit">
      <Slide {...properties} indicators={true}>
        <div className="each-slide-effect">
          <Image src={Banner1} alt="" />
        </div>
        <div className="each-slide-effect">
          <Image src={Banner1} alt="" />
        </div>
        <div className="each-slide-effect">
          <Image src={Banner1} alt="" />
        </div>
      </Slide>
    </div>
  );
};
