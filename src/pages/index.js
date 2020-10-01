import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/Nav";
import Header from "../components/HomeBody";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Home" />
      <Nav />
      <Header />
    </Layout>
  );
}

export default IndexPage;
