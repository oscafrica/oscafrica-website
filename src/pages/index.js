import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/nav";
import Header from "../components/header";

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
