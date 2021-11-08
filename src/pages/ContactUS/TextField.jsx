import React from "react";
import { ErrorMessage,useField } from "formik";
import "./Form.scss"
const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={field.name} style={{display:"block",fontWeight:"600",fontSize:"16px",margin:"10px 0px"}}>{label}</label>
      <input {...field} {...props} autoComplete="off" clasName="Error"/>
      <ErrorMessage name={field.name} className="Error-Message" component="div"/>
    </div>
  );
};

export default TextField;
