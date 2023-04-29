import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Contact = () => {
  return (
    <Layout title={"Contact - Ecomm App"}>
      <div class="container text-center">
        <div class="row contactus align-items-center">
          <div class="col-7">
            <img
              src="/images/contact.jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div class="col-5">
            <h1 className="bg-dark p-2 text-center text-white">Contact us</h1>
            <p className="text-start text-justify p-2">
              any qurey please contact us. we are provide you 24x7 on stop
              service.
            </p>
            <p className="mt-3 text-start">
              <BiMailSend />: promahbubul@gmail.com
            </p>
            <p className="mt-3 text-start">
              <BiPhoneCall /> : +8801623-361555
            </p>
            <p className="mt-3 text-start">
              <TfiHeadphoneAlt /> : 12800-000-5585 (toll free)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
