import { Career } from "@/types/career";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCareer = ({ item }: { item: Career }) => {
  const { url, jobDescription, jobTitle, tag } = item;
  return (
    <div className="m-5 flex">
      <div className="group mx-2 max-w-screen-md overflow-hidden  rounded-lg bg-white p-4 py-4 shadow-three transition  dark:bg-gray-dark  sm:mx-auto">
        {/* <Link href={url} className="mt-4">
          <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
            <Image
              src="favicon.ico"
              alt="Technosive Logo"
              className="h-full w-full object-contain text-gray-700"
              width={100}
              height={100}
              unoptimized
            />
          </div>
        </Link> */}
        <div className="col-span-11 flex flex-col text-left sm:pl-4">
          <h3 className="text-sm text-body-color">{tag}</h3>
          <Link
            href={url}
            className="mb-3 line-clamp-1 flex flex-row items-center gap-x-1  overflow-hidden pr-7 text-base font-semibold transition-all hover:gap-x-3 dark:text-white sm:text-xl"
          >
            {jobTitle}
            <span className="">
              <IconArrowNarrowRight />
            </span>
          </Link>
          <p className="line-clamp-2 overflow-hidden pr-7 text-sm text-body-color">
            {jobDescription}
          </p>
        </div>
      </div>
    </div>

    // <>
    //   <div className="m-5 flex justify-center">
    //     <div className="flex w-full max-w-4xl flex-col justify-between gap-3 rounded-md px-5 py-4  shadow-xl sm:flex-row sm:items-center">
    //       <div>
    //         <span className="text-sm text-primary">Engineering</span>
    //         <h3 className="mt-px font-bold">
    //           Senior Full Stack Backend Engineer
    //         </h3>
    //         <div className="mt-2 flex items-center gap-3">
    //           <span className="rounded-full bg-purple-100 px-3 py-1 text-sm text-primary">
    //             Full-time
    //           </span>
    //           <span className="flex items-center gap-1 text-sm text-slate-600">
    //             {" "}
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-4 w-4"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               stroke-width="2"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //               />
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //               />
    //             </svg>{" "}
    //             Remote, UK
    //           </span>
    //         </div>
    //       </div>
    //       <div className="">
    //         <button className="flex items-center gap-1 rounded-md bg-primary px-4 py-2 font-medium text-white">
    //           Apply Now{" "}
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-4 w-4"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             stroke-width="2"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M13 7l5 5m0 0l-5 5m5-5H6"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default SingleCareer;
