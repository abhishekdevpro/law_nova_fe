"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Home() {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  // Handler to set active tab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <div className="">
      <div className=" Header w-full text-center shadow-[0px_0px_5px_#aeaeae]">
        <div className="container mx-auto w-[1280px]">
          <div className="MenuItem flex items-center justify-between py-2 w-full">
            <div className="HeadLogo">
              <Image
                src="/assets/LegitZone_logo.png"
                className="w-[120px]"
                width={50}
                height={50}
                alt="logo"
              />
            </div>
            <div className="MenuList flex space-x-2">
              <a
                href="#"
                className="text-base mr-2 text-[#104a55] no-underline hover:text-[#966f2b] py-2"
              >
                About Us
              </a>

              <a
                href="#"
                className="MenuBtn text-white bg-[#104a55] py-2 px-4 rounded-lg hover:bg-[#966f2b]"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="MenuBtn text-white bg-[#104a55] py-2 px-4 rounded-lg hover:bg-[#966f2b]"
              >
                Login/ Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="HomeBanner w-full text-center mb-10">
        <div className="container mx-auto  w-[1280px]">
          <div className="BannerItem flex gap-5">
            <div className="BannerImage w-1/2 py-5">
              <img
                src="/assets/bg_1.png"
                alt="Banner Image"
                className="w-full"
              />
            </div>
            <div className="BannerText w-1/2 py-5">
              <div className="TextContent">
                <h1 className="text-6xl text-[#1a4a56] mb-2">
                  Hello, I'm Aria
                </h1>
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
      <div className="AdvocateCourse w-full text-center my-5">
        <div className="container  mx-auto">
          <div className="flex items-center justify-between p-2">
            <h1 className="text-[#966f2b] font-normal m-0 text-[32px]">
              Our Popular Course Advocate Course
            </h1>

            <a
              className="bg-[#1a4c58] text-white no-underline p-2 rounded-lg"
              href=""
            >
              All Advocates
            </a>
          </div>
          <div className="CourseText w-full my-5">
            <div className="tab overflow-hidden flex justify-around items-center">
              <button
                className={`${
                  activeTab === 0 ? "bg-[#966f2b]" : "bg-[#1b4c59]"
                } text-white p-[14px_16px] rounded-[10px]`}
                onClick={() => handleTabClick(0)}
              >
                Family Law
              </button>
              <button
                className={`${
                  activeTab === 1 ? "bg-[#966f2b]" : "bg-[#1b4c59]"
                } text-white p-[14px_16px] rounded-[10px]`}
                onClick={() => handleTabClick(1)}
              >
                Criminal Law
              </button>
              <button
                className={`${
                  activeTab === 2 ? "bg-[#966f2b]" : "bg-[#1b4c59]"
                } text-white p-[14px_16px] rounded-[10px]`}
                onClick={() => handleTabClick(2)}
              >
                Personal Law
              </button>
              <button
                className={`${
                  activeTab === 3 ? "bg-[#966f2b]" : "bg-[#1b4c59]"
                } text-white p-[14px_16px] rounded-[10px]`}
                onClick={() => handleTabClick(3)}
              >
                Corporate Law
              </button>
              <button
                className={`${
                  activeTab === 4 ? "bg-[#966f2b]" : "bg-[#1b4c59]"
                } text-white p-[14px_16px] rounded-[10px]`}
                onClick={() => handleTabClick(4)}
              >
                Employment Law
              </button>
              <button
                className={`${
                  activeTab === 5 ? "bg-[#966f2b]" : "bg-[#1b4c59]"
                } text-white p-[14px_16px] rounded-[10px]`}
                onClick={() => handleTabClick(5)}
              >
                Immigration Law
              </button>
            </div>

            <div
              className={`tabcontent ${
                activeTab === 0 ? "block" : "hidden"
              } p-[6px_12px] border-none`}
            >
              <div className="TabText">
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2>Course Heading</h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ViewBtn my-5">
                    <a
                      className="bg-[#1b4e5b] p-2.5 rounded-lg text-white no-underline"
                      href=""
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tabcontent ${
                activeTab === 1 ? "block" : "hidden"
              } p-[6px_12px] border-none`}
            >
              <div className="TabText">
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2>Course Heading</h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ViewBtn my-5">
                    <a
                      className="bg-[#1b4e5b] p-2.5 rounded-lg text-white no-underline"
                      href=""
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tabcontent ${
                activeTab === 2 ? "block" : "hidden"
              } p-[6px_12px] border-none`}
            >
              <div className="TabText">
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2>Course Heading</h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ViewBtn my-5">
                    <a
                      className="bg-[#1b4e5b] p-2.5 rounded-lg text-white no-underline"
                      href=""
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tabcontent ${
                activeTab === 3 ? "block" : "hidden"
              } p-[6px_12px] border-none`}
            >
              <div className="TabText">
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2>Course Heading</h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ViewBtn my-5">
                    <a
                      className="bg-[#1b4e5b] p-2.5 rounded-lg text-white no-underline"
                      href=""
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tabcontent ${
                activeTab === 4 ? "block" : "hidden"
              } p-[6px_12px] border-none`}
            >
              <div className="TabText">
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2>Course Heading</h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ViewBtn my-5">
                    <a
                      className="bg-[#1b4e5b] p-2.5 rounded-lg text-white no-underline"
                      href=""
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`tabcontent ${
                activeTab === 5 ? "block" : "hidden"
              } p-[6px_12px] border-none`}
            >
              <div className="TabText">
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2>Course Heading</h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="CousreSection w-full my-5">
                  <div className="CousreContent flex gap-[50px]">
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="CousreCard w-full bg-white rounded-2xl shadow-lg">
                      <div className="CardTile">
                        <img src="/assets/law.jpg" />
                        <div className="CourseDetails">
                          <h2 className="m-0 mb-2.5 text-[#966f2b] font-normal">
                            Course Heading
                          </h2>
                          <p className="m-0 mb-2.5">Duration: 6months</p>
                          <p className="m-0 mb-2.5">Course Details</p>
                          <div className="CourseBtn p-2.5 bg-[#1b4d5a] rounded-b-lg cursor-pointer">
                            <a href="" className="text-white no-underline">
                              More Details
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ViewBtn my-5">
                    <a
                      className="bg-[#1b4e5b] p-2.5 rounded-lg text-white no-underline"
                      href=""
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
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
      <div className="Footer w-full text-center mt-36 bg-[#1b4f5c] ">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-10 justify-around">
            {/* Footer Logo and Contact Info */}
            <div className="w-1/3 text-left">
              <img
                src="/assets/footer_logo.png"
                alt="Logo"
                className="w-[150px] mb-5"
              />
              <div className="text-white">
                <p>
                  <i className="fa-solid fa-location-dot"></i> 1509 Lady St,
                  Columbia, SC 29201
                </p>
                <a href="tel:+911234567890" className="text-white block mb-5">
                  <FaPhone className="inline-block mr-2" />
                  +91 123 456 7890
                </a>
                <a href="mailto:info@example.com" className="text-white block">
                  <FaEnvelope className="inline-block mr-2" />
                  info@example.com
                </a>
              </div>
            </div>

            {/* Footer Menu */}
            <div className="w-1/3 text-left">
              <h2 className="text-white text-xl font-normal mb-2">Reach Out</h2>
              <ul className="list-none p-0">
                <li>
                  <a href="#" className="text-white no-underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white no-underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white no-underline">
                    Lawyer Sign Up
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe Form */}
            <div className="w-1/3 text-left">
              <h2 className="text-white text-xl font-normal mb-2">
                For Legal Advise Ask for Free Question Talk to Lawyer
              </h2>
              <form className="space-y-4">
                <div className="grid gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="p-3 rounded-xl border-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="p-3 rounded-xl border-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#966f2b] text-white p-3 rounded-xl cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* SubFooter */}
        <div className="w-full text-center bg-[#966f2b] py-4">
          <div className="container mx-auto px-4 flex justify-around items-center">
            {/* Terms and Privacy */}
            <div className="text-white">
              <a href="#" className="text-white no-underline mr-3">
                Terms of Use
              </a>
              <a href="#" className="text-white no-underline">
                Privacy Policy
              </a>
            </div>

            {/* All Rights Reserved */}
            <div className="text-white">2024 All Rights Reserved</div>

            {/* Social Icons */}
            <div className="text-white">
              <FaLinkedin className="inline-block mr-4" />
              <FaFacebook className="inline-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
