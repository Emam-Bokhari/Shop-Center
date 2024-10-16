import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Products from "../products/page";
import NewsletterSignup from "./NewsletterSignup";
import Footer from "./Footer";

export default function Landing() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <main>
        <Products />
        <NewsletterSignup />
      </main>
      <Footer />
    </Fragment>
  );
}
