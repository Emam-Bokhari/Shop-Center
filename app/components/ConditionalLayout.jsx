"use client";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Banner from "./Banner";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isProductDetails = /^\/products\/\d+$/.test(pathname);

  // 1. ^: Asserts the start of the string. This means that the pattern must match from the beginning of the pathname.

  // 2. \/products\/: Matches the literal string /products/. The forward slashes are escaped with a backslash (\/) because slashes have special meaning in regex.

  // 3. \d+: Matches one or more digits. Here, \d represents a digit (0-9), and + means "one or more" of the preceding element. This part is meant to match the product ID.

  // 4. $: Asserts the end of the string. This means that the pattern must match until the end of the pathname.

  return (
    <Fragment>
      {!isProductDetails && <Banner />}
      {children}
      {!isProductDetails && <NewsletterSignup />}
      {!isProductDetails && <Footer />}
    </Fragment>
  );
}
