import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="text-white container mx-auto min-h-screen flex items-center flex-col-reverse md:flex-row pt-10 md:pt-0">
        {/* basic info */}
        <div className="flex flex-col gap-1 slide-right flex-1">
          <p className="text-xl font-medium sm:text-3xl">
            {"<>"} Hi i&lsquo;<span className="text-blue-700">m</span> {"</>"}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-blue-700">
            {"<"} <span className="text-white">AFSAL P U</span> {">"}
          </h1>
          <p className="text-start max-md:text-center text-lg sm:text-xl font-medium">
            {"<>"}{" "}
            <span className="text-white max-sm:text-sm">
              Full Stack <span className="text-blue-700">Developer</span>
            </span>{" "}
            {"</>"}
          </p>

          <div className="mt-4 sm:mt-7 flex justify-start max-md:justify-center">
            <a
              href="/files/resume.pdf"
              download={"resume"}
              className="px-7 py-2 text-white text-sm bg-blue-700 rounded-md font-medium"
            >
              Resume
            </a>
          </div>
        </div>

        {/* image box */}
        <div className="flex-1 p-5 flex flex-col items-end gap-5">
          <div className="h-72 w-52 sm:w-64 md:w-60 lg:w-64 xl:w-80 xl:h-80  bg-white rounded-ss-[25%] rounded-br-[25%] overflow-hidden">
            <img
              src="/images/hero.jpg"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="flex gap-7">
            <Link href="https://github.com/afsal-p-u" target="_blank">
              <FaGithub className="text-2xl text-blue-700" />
            </Link>
            <Link href="https://gitlab.com/afsal_p_u" target="_blank">
              <FiGitlab className="text-2xl text-blue-700" />
            </Link>
            <Link href="https://www.linkedin.com/in/afsal-p-u/" target="_blank">
              <FaLinkedinIn className="text-2xl text-blue-700" />
            </Link>
            <Link href="https://www.instagram.com/afsal_p_u/" target="_blank">
              <FaInstagram className="text-2xl text-blue-700" />
            </Link>
            <Link href="https://twitter.com/_afsal_p_u_" target="_blank">
              <FaTwitter className="text-2xl text-blue-700" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
