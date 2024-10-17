"use client"
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Banner from "./Banner";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isProductDetails = /^\/products\/\d+$/.test(pathname);

  return (
    <Fragment>
      {!isProductDetails && <Banner />}
      {children}
      {!isProductDetails && <NewsletterSignup />}
      {!isProductDetails && <Footer />}
    </Fragment>
  );
}
