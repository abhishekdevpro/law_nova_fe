"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="Testimonials w-full text-center mx-5">
      <div className="container mx-auto">
        <div className="TestHead mb-10">
          <h1 className="Heading text-[#966f2b] font-normal m-0 text-[32px]">
            Our Popular Course Advocate Course
          </h1>
        </div>
        <Slider
          {...settings}
          className="slick-slider flex overflow-x-scroll space-x-5"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="element w-full bg-white rounded-lg shadow-md flex justify-center items-center p-5"
            >
              <div className="TestCard w-full bg-white border shadow-[0px_0px_3px_0px_#1b4d5a91]  border-[#1b4e5b] rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/profile_one.png"
                    alt="profile"
                    width={100}
                    height={100}
                    className="p-5 w-[100px]"
                  />
                </div>
                <p className="text-sm px-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <h2 className="text-lg text-[#1b4e5b] mb-2">John Dee</h2>
                <div className="flex justify-center items-center">
                  <Image
                    src="/assets/rating.png"
                    alt="rating"
                    width={100}
                    height={20}
                    className="pb-2"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
