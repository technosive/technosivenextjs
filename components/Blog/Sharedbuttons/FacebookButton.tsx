"use client";

import { FaFacebookF } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FacebookShareButton } from "react-share";

const FacebookButton = ({ title, source }) => {
  return (
    <>
      <FacebookShareButton url={source} title={title}>
        <div className="flex w-8  cursor-pointer items-center justify-center rounded-sm bg-[#d2d6e0] p-1.5 text-[#788293] transition-all hover:bg-primary hover:text-white dark:bg-[#1e232e] dark:hover:bg-primary">
          <IoLogoFacebook className="text-xl" />
        </div>
      </FacebookShareButton>
    </>
  );
};

export default FacebookButton;
