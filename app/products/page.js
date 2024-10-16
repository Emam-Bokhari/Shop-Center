import { Fragment } from "react";

export default function Products() {
  return (
    <Fragment>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          <div>
            <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-[url('/iphone.jpg')] bg-cover bg-center transition-all duration-3000 ease-in-out transform"></div>
            <h2 className="text-sm lg:text-base mt-2">
              <a className="text-base font-bold" href="./productPage.html">
                iPhone 9
              </a>
              <span className="text-[#919090]">
                <a href="./category.html">(Smartphones)</a>
              </span>
            </h2>
            <p className="text-[#919090] text-sm ">
              An apple mobile which is nothing like apple
            </p>

            <p className="text-rose-600 text-sm mt-4">
              <span className="text-[#919090] line-through">$205.00</span>{" "}
              $195.00
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
