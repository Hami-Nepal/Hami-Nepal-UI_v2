import React from "react";
import Contact from "./Contact";
import "./ContactUs.scss";
import Footer from "../../components/Footer/index"
import Header from "../../templates/Header";
const ContactUs = () => {
  return (
    <>
    <Header/>
    <div className="Contact-Us">
      <h1>
        Contact Us<div className="Underline"></div>
      </h1>
      <div className="Contact">
        <Contact />
        <div className="Contact-Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3182076780417!2d85.33305291453902!3d27.73832963073777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19479db43a75%3A0x2b0ae1a63cbbab86!2sMaharajgunj%20Rd%203%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1633496596882!5m2!1sen!2snp"
            width="567"
            height="364"
            style={{border:" 1px solid #CCCCCC",borderRadius:"10px"}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <p>Address: Maharajgunj - 3, Kathmandu, Nepal</p>
          <p>Phone: 9802260020</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
