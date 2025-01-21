"use client";
import Image from "next/image";

import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="Footer w-full text-center mt-36 bg-[#1b4f5c] ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-10 justify-around">
          {/* Footer Logo and Contact Info */}
          <div className="w-1/3 text-left">
            <Image
              src="/assets/footer_logo.png"
              className="w-[150px] mb-5"
              width={50}
              height={50}
              alt="logo"
            />
            <div className="text-white">
              <p>
                <i className="fa-solid fa-location-dot"></i> 1509 Lady St,
                Columbia, SC 29201
              </p>
              {/* <a href="tel:+911234567890" className="text-white block mb-5">
                  <FaPhone className="inline-block mr-2" />
                  +91 123 456 7890
                </a> */}
              <a href="mailto:info@example.com" className="text-white block">
                <FaEnvelope className="inline-block mr-2" />
                info@LegitZone.law
              </a>
            </div>
          </div>

          {/* Footer Menu */}
          <div className="w-1/3 text-left">
            <h2 className="text-white text-xl font-normal mb-2">Reach Out</h2>
            <ul className="list-none p-0">
              <li>
                <a href="/aboutus" className="text-white no-underline">
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
  );
}
