import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout >
      <div class="container text-center">
        <div class="row policy align-items-center">
          <div class="col-sm-12 col-lg-7">
            <img
              src="/images/policy.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-sm-12 col-lg-5 ">
            <h1 className="bg-dark p-2 text-center text-white">
              Privacy Policy
            </h1>
            <p className="p-2">
              What personal information do we collect from the people that visit
              our blog, website, or app?
            </p>
            <p className="p-2">
              When ordering or registering on our site, as appropriate, you may
              be asked to enter your name, email address, mailing address, phone
              number, credit card information, or other details to help you with
              your experience.
            </p>
            <p className="p-2">When do we collect information?</p>
            <p className="p-2">
              We collect information from you when you register on our site,
              place an order, subscribe to a newsletter, respond to a survey,
              fill out a form, or enter information on our site.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
