import React from "react";
import Layout from "../components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout title={"About - Ecommerce App"}>
      <div class="container text-center">
        <div class="row aboutus align-items-center">
          <div class="col-7">
            <img
              src="/images/about.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-5">
            <h1 className="bg-dark p-2 text-center text-white">About us</h1>
            <p className="p-2">
              A website that allows people to buy and sell physical goods,
              services, and digital products over the internet rather than at a
              brick-and-mortar location. Through an e-commerce website, a
              business can process orders, accept payments, manage shipping and
              logistics, and provide customer service.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App -  Shop now",
  description: "mern stack project",
  keywords: "MERN, react, expressjs, monogdb, nodejs",
  author: "Mahbubul Alam",
};

export default AboutPage;
