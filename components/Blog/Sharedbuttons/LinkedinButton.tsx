"use client";

import { useTheme } from "next-themes";
import { IoLogoLinkedin } from "react-icons/io5";
import { LinkedinShareButton } from "react-share";

const LinkedinButton = ({ title, description, source }) => {
  const theme = useTheme();

  return (
    <>
      <LinkedinShareButton url={source} title={title} summary={description}>
        <div className="flex w-8 cursor-pointer items-center justify-center rounded-sm bg-[#d2d6e0] p-2 text-[#788293] transition-all hover:bg-primary hover:text-white dark:bg-[#1e232e] dark:hover:bg-primary">
          <IoLogoLinkedin className="" />
        </div>
      </LinkedinShareButton>
    </>
  );
};

export default LinkedinButton;
