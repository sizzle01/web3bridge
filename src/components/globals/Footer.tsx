import React from "react";
import LogoDark from "../../../assests/logo-dark.svg";
import Image from "next/image";
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
  InstagramIcon,
} from "./icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base  w-full px-4 md:px-10 py-5">
      <div className="w-[80%] ml-8 md:ml-auto ">
        <Image src={LogoDark} />
      </div>
      <div className="w-full flex flex-wrap justify-center items-start mt-4 text-white">
        <div className=" w-[80%] md:w-[25%] mr-auto ml-8 md:ml-0">
          <p className="text-[1.2rem] md:text-[1rem] text-white mb-8">
            Support@web3bridge.com
          </p>
          <div className="flex items-center w-full lg:w-[80%] justify-between mb-12">
            <Link href={"https://twitter.com/Web3Bridge"}>
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link href={"https://www.linkedin.com/company/web3bridge/"}>
              <a>
                <LinkedInIcon />
              </a>
            </Link>
            <Link href={"https://instagram.com/web3bridge"}>
              <a>
                <InstagramIcon />
              </a>
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UCrXJHMI98Y3LI9ljrmEeY3g"}
            >
              <a>
                <YoutubeIcon />
              </a>
            </Link>
          </div>
        </div>
        <div className="w-[60%] md:w-[20%]">
          <h1 className="font-bold text-[1.5rem] md:text[1rem] mb-4 text-left">
            Web 3 Bridge
          </h1>
          <ul className="text-[1.2rem] md:text-xs md:text-left mb-12 md:mb-auto">
            <li className="my-1">
              <Link href={"/"}>
                <a>About us</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Courses</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Partners</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Alumni</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[60%]  md:w-[20%]">
          <h1 className="font-bold text-[1.5rem] md:text[1rem] mb-4 md:text-left">
            Support
          </h1>
          <ul className="text-[1.2rem] md:text-xs md:text-left mb-12 md:mb-auto">
            <li className="my-1">
              <Link href={"/"}>
                <a>Terms of service</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>dApps</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[60%] md:w-[20%]">
          <h1 className="font-bold text-[1.5rem] md:text[1rem] mb-4 md:text-left">
            General
          </h1>
          <ul className="text-[1.2rem] md:text-xs text-left mb-12 md:mb-auto">
            <li className="my-1">
              <Link href={"/"}>
                <a>Join Community</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Events</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Resources</a>
              </Link>
            </li>
            <li className="my-1">
              <Link href={"/"}>
                <a>Links</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white text-xs py-4 mt-10">
        All rights reserved 2022
      </p>
    </footer>
  );
};

export default Footer;
