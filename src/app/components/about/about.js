"use client";
import React, { useEffect } from "react";
import axios from "axios";
import "./aboutus.css";
import Introductions from "./Introductions";
import ForJobseeker from "./ForJobseeker";
import ForEmployer from "./ForEmployer";
import Novajobsus from "./Novajobsus";
import MoreServices from "./MoreServices";
import Header from "../header/header";
import Footer from "../footer/footer";

function About() {
  const [sections, setSections] = React.useState([]);

  // Fetch data from the GET API
  const fetchContent = async () => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/admin/legitzone/get-aboutus-content`
      );
      const data = response.data;
      setSections(data.data || []);
      // Fallback content if fields are empty or null
    } catch (error) {
      console.error("Error fetching content:", error);
      // alert("An error occurred while fetching content.");
    }
  };
  useEffect(() => {
    fetchContent();
  }, []);

  const getSectionData = (id) => {
    console.log("sections", sections);
    return sections.find((section) => section.id === id);
  };
  return (
    <>
      <Header />
      <section className="section ">
        <div className="container">
          <div className="max-w-6xl mx-auto mt-6 ">
            <div className="page-content bg-white mt-6 ">
              <div className="content-block ">
                <div className="section-full bg-white p-t50 p-b20">
                  <div className="container">
                    <div className="m-b30">
                      <div className="job-bx">
                        {sections.length ? (
                          <>
                            <Introductions
                              introductionData={getSectionData(1)}
                            />
                            <ForJobseeker
                              forJobseekerData={getSectionData(2)}
                            />
                            <ForEmployer forEmployerData={getSectionData(3)} />
                            <Novajobsus novaJobsusData={getSectionData(4)} />
                            <MoreServices
                              moreServicesData={getSectionData(5)}
                            />
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
