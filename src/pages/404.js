import React from "react";
import Seo from "../components/seo";
import ComingSoon from "../components/coming-soon";

const NoFound = () => {
  return (
    <>
      <Seo lang="en" pageTitle="404" title="POL" description="POL Finance" />
      <ComingSoon title="404 Error" />
    </>
  );
};

export default NoFound;
