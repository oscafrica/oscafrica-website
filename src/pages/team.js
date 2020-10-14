import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO/seo";
import Nav from "../components/Nav";

import oscafest1 from "../assets/images/oscafest.png";
import oscafest2 from "../assets/images/oscafest2.png";

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
      <section className="md:bg-white md:relative md:px-24 flex-wrap items-center">
        <img src={oscafest1} alt="Open Source Community Africa Festival" />
        <img src={oscafest2} alt="Open Source Community Africa Festival" />
      </section>
    </Layout>
  );
}

export default IndexPage;
