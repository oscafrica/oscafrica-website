import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/Nav";
import HomeBody from "../components/HomeBody";

function IndexPage() {
  return (
    <Layout>
      <SEO keywords={["Open Source Community Africa", "OSCA", "Open Source Festival", "OSF"]} title="Home" />
      <Nav textColor={"text-white"} />
      <HomeBody />
    </Layout>
  );
}

export default IndexPage;
