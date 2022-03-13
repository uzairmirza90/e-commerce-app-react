//      All imports
import React from "react";
import { Divider } from "@mui/material";
import Footer from "./Footer";

//      Main COntact Function Component
function Contact() {
  return (
    <section className="mb-4" style={{width: "100%",display: "flex",flexDirection: "column", alignItems: "center"}}>

        {/*         Contact Heading Container      */}
      <div className="heading">
        <h2>Contact Us</h2>
      </div>
      <Divider />

{/*         COntact Disclaimer      */}
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>

{/*         Contact Form      */}
      <div className="row w-50">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="name" name="name" className="form-control"></input>
                  <label htmlFor="name" className="">Your name</label>
                </div>
              </div>

              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="email" name="email" className="form-control"></input>
                  <label htmlFor="email" className="">Your email</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control"></input>
                  <label htmlFor="subject" className="">Subject</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <a href="/" className="btn btn-primary" onClick={() => alert('Submitted')}>Send</a>
          </div>
          <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>San Francisco, CA 94126, USA</p>
            </li>

            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+ 01 234 567 89</p>
            </li>

            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>contact@mdbootstrap.com</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
