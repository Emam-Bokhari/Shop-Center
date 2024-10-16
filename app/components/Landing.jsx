import { Fragment } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Products from "../products/page";

export default function Landing() {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}
