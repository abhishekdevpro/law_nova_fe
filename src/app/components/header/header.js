"use client";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
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
              <Link
                href="/aboutus"
                className="text-base mr-2 text-[#104a55] no-underline hover:text-[#966f2b] py-2"
              >
                About Us
              </Link>

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
    </div>
  );
}
