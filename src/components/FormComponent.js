import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";
const FormComponent = () => {
  const initialValues = {
    name: "",
  };
  const onSubmit = (values) => {
    console.log("onsubmit :", values);
  };

  const errorName=value=>{
    let error=''
     
     if (!value) {
         error='required'
     }
    return error
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" validate={errorName} />

          <ErrorMessage name="name" component={TextError} />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
