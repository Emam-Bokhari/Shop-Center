import Image from "next/image";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <nav class="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
        <div class="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
          <div class="flex items-center gap-2">
            <Image
              src="/menu.svg"
              class="lg:hidden w-5 h-5"
              alt=""
              width={20}
              height={20}
            />
            <a href="./index.html">
              <Image
                src="/lws-logo-black.svg"
                class="h-10"
                alt=""
                width={118}
                height={40}
              />
            </a>
          </div>
        </div>
        <div class="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
          <Image
            src="/avatar.svg"
            class="hidden lg:block w-[18px] h-[18px]"
            alt="login acount avatar"
            width={18}
            height={18}
          />
          <Image
            src="shopping-Cart.svg"
            class="block w-5 h-5"
            alt="shopping cart icon"
            width={20}
            height={20}
          />
        </div>
      </nav>
    </Fragment>
  );
}
