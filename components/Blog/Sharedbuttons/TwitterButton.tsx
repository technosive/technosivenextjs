"use client";

import { useTheme } from "next-themes";
import { FaXTwitter } from "react-icons/fa6";
import { TwitterShareButton } from "react-share";

const TwitterButton = ({ title, source }) => {
  const theme = useTheme();
  return (
    <>
      <TwitterShareButton url={source} title={title}>
        <div className="flex h-8 cursor-pointer items-center justify-center rounded-sm bg-[#d2d6e0] p-1.5 text-[#788293] transition-all hover:bg-primary hover:text-white dark:bg-[#1e232e] dark:hover:bg-primary">
          <FaXTwitter className="" />
        </div>
      </TwitterShareButton>
    </>
  );
};

export default TwitterButton;
