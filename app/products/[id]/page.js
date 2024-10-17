import { products } from "@/app/data/products";
import Image from "next/image";
import { Fragment } from "react";

export function generateStaticParams() {
  return products?.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetails({ params }) {
  const { id } = params;
  const product = products?.find((product) => product?.id == id);

  const {
    title,
    category,
    description,
    price,
    discountPercentage,
    rating,
    images,
    thumbnail,
  } = product;

  return (
    <Fragment>
      <div className="h-screen">
        <section className="bg-[#fafaf2] h-full py-20">
          <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                src={thumbnail}
                className="w-[400px] h-[500px] mx-auto object-cover"
                alt=""
                width={400}
                height={500}
              />

              <div className="flex gap-4 mt-4">
                {images?.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    className="w-[100px] h-[100px] mx-auto border object-cover"
                    alt=""
                    width={100}
                    height={100}
                  />
                ))}
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {title}
              </h1>
              <span className="text-[#919090] my-3">{category}</span>
              <div className="mt-3 flex items-center justify-start gap-1">
                {Array.from({ length: Math.floor(rating) }, (_, index) => (
                  <Image
                    key={index}
                    src="/star.svg"
                    width={20}
                    height={10}
                    alt="rating"
                  />
                ))}
              </div>
              <hr className="my-5 bg-black" />

              <div>
                <p className="my-3">
                  <span className="text-rose-600 opacity-60 line-through">
                    ${price}
                  </span>
                  <span className="font-bold text-2xl">
                    {" "}
                    ${discountPercentage}
                  </span>
                </p>
              </div>
              <div>
                <p className="leading-7">{description}</p>

                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - ${discountPercentage}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
