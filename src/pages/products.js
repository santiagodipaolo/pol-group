import React from "react";

import Layout from "../components/layout";
import ProductsTable from "../components/products/products-table";

const Products = ({ location }) => {
  return (
    <Layout pageTitle="Products">
      <ProductsTable path={location.href} />
    </Layout>
  );
};

export default Products;
