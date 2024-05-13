import Image from "next/image";
import Link from "next/link";

interface SingleProductProps {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  buttonHref: string;
  description: string;
}

const SingleProduct = ({
  showCard,
  category,
  ImageHref,
  title,
  buttonHref,
  description,
}: SingleProductProps) => {
  return (
    <>
      <div
        className={`w-full  px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        {/* <div className="relative mb-12 rounded-[10px] border border-black p-2  dark:border-white">
          <div className="mb-2 overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full" />
          </div>
          <div className="dark:bg-dark-2 shadow-portfolio dark:shadow-box-dark relative z-10 rounded-lg bg-slate-800 py-4  text-center dark:bg-white">
            <span className="mb-2 block text-sm font-medium text-primary">
              {category}
            </span>
            <h3 className="mb-5 text-xl font-bold text-white dark:text-black">
              {title}
            </h3>
            <Link
              href={buttonHref}
              className="dark:text-dark-6 dark:border-dark-3 inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              View Details
            </Link>
          </div>
        </div> */}
        <div
          className="wow fadeInUp group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
          data-wow-delay=".1s"
        >
          <Link
            href={buttonHref}
            className="relative block aspect-[37/22] w-full"
          >
            <Image src={ImageHref} alt="image" fill unoptimized />
          </Link>
          <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
            <Link
              href={buttonHref}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
            <p className="line-clamp-3 pb-1 text-base font-medium text-body-color">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
