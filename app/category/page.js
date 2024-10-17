"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function Category() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "beauty", "fragrances", "furniture"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products?.filter(
          (product) =>
            product?.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <Fragment>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          {categories?.map((category) => (
            <button
              onClick={() => setSelectedCategory(category)}
              key={category}
              className={`hover:border-b border-black block h-6 box-border mt-4 ${selectedCategory===category?"text-red-500 font-medium ":""}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {/* Product Start  */}
          {filteredProducts?.map((product) => (
            <div key={product?.id}>
              <div
                className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8]  bg-cover bg-center transition-all duration-3000 ease-in-out transform"
                style={{ backgroundImage: `url(${product?.thumbnail})` }}
              ></div>
              <h2 className="text-sm lg:text-base mt-2">
                <Link
                  className="text-base font-bold"
                  href={`/products/${product?.id}`}
                >
                  {product?.title}
                </Link>
                <span className="text-[#919090]">
                  <Link href={`/category/${product?.category}`}>
                    ({product?.category})
                  </Link>
                </span>
              </h2>
              <p className="text-[#919090] text-sm ">
                {product?.description.length > 30
                  ? product?.description.slice(0, 71) + "..."
                  : product?.description}
              </p>

              <p className="text-rose-600 text-sm mt-4">
                <span className="text-[#919090] line-through">
                  ${product?.price}
                </span>{" "}
                ${product?.discountPercentage}
              </p>
            </div>
          ))}

          {/* Product End  */}
        </div>
      </section>
    </Fragment>
  );
}
