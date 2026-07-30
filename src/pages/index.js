import * as React from "react";
import HomeBanner from "../components/home/home-banner";
import Partners from "../components/home/partners";
import Products from "../components/home/products";
import AboutUs from "../components/home/about-us";
import Layout from "../components/layout";
import Separator from "../components/separator";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <HomeBanner />
      <Separator />
      <Partners />
      <Separator />
      <AboutUs />
      <Separator />
      <Products />
      <Separator />
    </Layout>
  );
}
