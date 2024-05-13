"use client";

import React, { useEffect, useState } from "react";
import { ProductData } from "./ProductData";
import SingleProduct from "./SingleProductCard";

const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category: string) => {
    setShowCard(category);
  };

  const filteredProducts =
    showCard === "all"
      ? ProductData
      : ProductData.filter(
          (product) =>
            product.category.toLowerCase() === showCard.toLowerCase(),
        );

  useEffect(() => {}, [showCard]);

  return (
    <>
      <section className="bg-gray-light px-4 py-24 pb-[120px] pt-[110px] dark:bg-bg-color-dark sm:pt-[150px]">
        <div className="container mx-auto ">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full  px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Portfolio
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="dark:text-dark-6 text-base text-body-color">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex w-full flex-wrap justify-center">
            <div className="w-full px-4">
              <ul className="mb-12 flex flex-wrap justify-center space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses dark:text-dark-6 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses dark:text-dark-6 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses dark:text-dark-6 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Development
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses dark:text-dark-6 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses dark:text-dark-6 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <SingleProduct
                  showCard={showCard}
                  category={product.category}
                  ImageHref={product.image}
                  title={product.title}
                  buttonHref={product.href}
                  key={product.id}
                  description={product.description}
                />
              ))
            ) : (
              <div className="w-full text-center">
                <p className="text-xl text-dark dark:text-white">
                  No Projects found in this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
