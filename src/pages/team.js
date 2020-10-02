import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO/seo";

import Nav from "../components/Nav";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          "Open Source Community Africa",
          "OSCA",
          "Open Source Festival",
          "OSF",
          "About Open Source Community Africa"
        ]}
        title="Home"
      />
      <Nav textColor={"text-black"} />
    </Layout>
  );
}

export default IndexPage;
