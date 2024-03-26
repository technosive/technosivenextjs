import { Brand } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="py-24 md:py-20 lg:py-28" id="partnerships">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle title="Our Partnerships" mb="2rem" center />
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-sm bg-gray-400 px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <>
      <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[180px] 2xl:mx-8 2xl:max-w-[180px]">
        <Link
          href={href}
          rel="nofollow noreferrer"
          className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
        >
          <Image src={image} alt={name} fill unoptimized />
        </Link>
      </div>
    </>
  );
};
