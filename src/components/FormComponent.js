import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";
const FormComponent = () => {
  const initialValues = {
    name: "",
    numbrPhones: ['']
  };
  const onSubmit = (values) => {
    console.log("onsubmit :", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required name..."),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>

        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>



        <div className="form-control">
          <label>List phones</label>
          <FieldArray name="numbrPhones">
            {FieldArrayProps => {
              const { push, remove,form } = FieldArrayProps;
              const { values } = form;
                      console.log(form.errors);
              const { numbrPhones } = values;

              return (
                <div>
                  {numbrPhones.map((number, index) => (
                    <div key={index}>
                    
                      <Field name={`numbrPhones[${index}]`} />
                      {index>0 && (<button type="button" onClick={()=>remove(index)} >-</button>) }
                      <button type="button" onClick={()=>push('')} >{'  '} +{" "}</button>
                    </div>
                  ))}
                </div>
              ); //return
            }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
