import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, path } = feature;
  return (
    <Link
      href={path}
      className="group w-full transition-all hover:cursor-pointer"
    >
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h2 className="mb-5 text-xl font-bold text-black transition-all group-hover:text-primary group-hover:underline dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h2>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </Link>
  );
};

export default SingleFeature;
