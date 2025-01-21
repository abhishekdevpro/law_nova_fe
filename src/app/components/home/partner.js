"use client";
import Image from "next/image";

export default function Partner() {
  return (
    <div className="">
      <div className="Partners w-full text-center my-12">
        <div className="container mx-auto">
          <div className="partCard text-center">
            <h1 className="Heading text-[#966f2b] font-normal m-0 text-[32px]">
              Trusted By We Work with Some of the Best- <span>Globaly</span>
            </h1>
            <div className="PartImg w-full my-5">
              <img className="w-full" src="assets/partners.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
