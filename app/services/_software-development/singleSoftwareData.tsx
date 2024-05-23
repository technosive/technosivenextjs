import Image from "next/image";
import { SoftwareData } from "./softwareData";

const SingleSoftwareCard = ({ item }: { item: SoftwareData }) => {
  const { id, icon, title, description, image } = item;
  return (
    <>
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
          <div
            className={`mx-auto max-w-xl px-6 ${
              id % 2 == 0 ? "lg:col-start-2" : "lg:mx-0"
            } lg:max-w-none lg:px-0 lg:py-16`}
          >
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  {icon}
                </span>
              </div>

              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
                  {title}
                </h2>
                <p className="mt-4 text-lg text-body-color">{description}</p>
                {/* <div className="mt-6">
                  <a
                    className="inline-flex rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primary hover:bg-primary hover:ring-primary "
                    href="/login"
                  >
                    Learn More
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <Image
                alt={title}
                loading="lazy"
                width={647}
                height={486}
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src={image}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSoftwareCard;
