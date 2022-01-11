import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";
const FormComponent = () => {
  const initialValues = {
    name: "",
    name2: "",
  };
  const onSubmit = (values) => {
    console.log("onsubmit :", values);
  };

  const errorName = (value) => {
    let error = "";
    if (!value) {
      error = "required";
    }
    return error;
  };

  return (
    <Formik validateOnMount initialValues={initialValues} onSubmit={onSubmit}>
      {(FORMIK) => {
        console.log(FORMIK);

        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" validate={errorName} />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="name2">Name</label>
              <Field type="text" id="name2" name="name2" validate={errorName} />
              <ErrorMessage name="name2" component={TextError} />
            </div>

             {!FORMIK.isSubmitting &&  
            <button type="submit" disabled={!FORMIK.isValid}>
              Submit
            </button> }
             {FORMIK.isSubmitting &&<div>Submiting with success </div> }


          </Form>
        );
      }}
    </Formik>
  );
};

export default FormComponent;
