import React from "react";
import "./Form.scss";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import MessageField from "./MessageField";
import * as Yup from "yup";
const Contact = () => {
  const Validate = Yup.object({
    Name: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Name is Required"),
    Email: Yup.string()
      .email("Email is Invalide")
      .required("Email Is Required"),
    Message: Yup.string()
      .max(50, "Must be 15 character or less")
      .required("Message is Required"),
  });
  return (
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        Message: "",
      }}
      validationSchema={Validate}
    >
      {(formik) => (
        <>
          {console.log(formik.values)}
          <div className="Contact-Form">
            <Form>
              <TextField
                label="Name:"
                name="Name"
                type="text"
                placeholder="Enter your name"
              />
              <TextField
                label="Email:"
                name="Email"
                type="email"
                placeholder="Enter Your email"
              />
              {/* <TextField
                label="Message:"
                name="Message"
                type="textarea"
                className="message-box"
                placeholder="Enter your message for us."
                rows="4"
                cols="50"
              /> */}
              <MessageField label="Message:" placeholder="Enter your message for us." name="Message" type="message"/>
              <button type="submit" className="Submit-Form">
                Submit
              </button>
            </Form>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Contact;
