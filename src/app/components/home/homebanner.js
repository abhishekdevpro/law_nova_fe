"use client";

export default function HomeBanner() {
  return (
    <div className="HomeBanner w-full text-center mb-10">
      <div className="container mx-auto  w-[1280px]">
        <div className="BannerItem flex gap-5">
          <div className="BannerImage w-1/2 py-5">
            <img src="/assets/bg_1.png" alt="Banner Image" className="w-full" />
          </div>
          <div className="BannerText w-1/2 py-5">
            <div className="TextContent">
              <h1 className="text-6xl text-[#1a4a56] mb-2">Hello, I'm Aria</h1>
              <h2 className="text-[32px] font-normal text-[#966f2b] mb-2">
                Your Personal Law Advisor
              </h2>
              <h3 className="text-[28px] capitalize text-[#1a4a56] mb-2 w-[50%] m-auto">
                Which Service Are you Looking for?
              </h3>
            </div>
            <div className="AISearch">
              <div className="Searchtext mb-5">
                <a
                  href="#"
                  className="text-white bg-[#1a4b57] py-2 px-4 rounded-lg mr-5"
                >
                  Family Law
                </a>
                <a
                  href="#"
                  className="text-white bg-[#1a4b57] py-2 px-4 rounded-lg mr-5"
                >
                  Corporate Law
                </a>
                <a
                  href="#"
                  className="text-white bg-[#1a4b57] py-2 px-4 rounded-lg"
                >
                  Criminal Law
                </a>
              </div>
              <div className="AIBar relative mt-5">
                <input
                  type="search"
                  name=""
                  placeholder="Message LegitZone"
                  className="w-[400px] bg-[#966f2b] text-white py-2 px-4 rounded-full"
                />
                <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white text-2xl">
                  <i className="fa-solid fa-arrow-circle-up"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
