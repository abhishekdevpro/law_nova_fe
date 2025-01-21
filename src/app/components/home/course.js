"use client";

import { useState } from "react";

export default function Course() {
  const [activeTab, setActiveTab] = useState(0); // Default to the first tab

  // Handler to set active tab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
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
  );
}
