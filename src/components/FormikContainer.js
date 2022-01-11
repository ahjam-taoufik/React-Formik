import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {

const selectList=[
    {key:"Select on option", value:''},
    {key:"option 1", value:'option1'},
    {key:"option 2", value:'option2'},
    {key:"option 3", value:'option3'},

]
   

  const initialValues = {
    email: '',
    comment: '',
    selectOption:''
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    comment: Yup.string().required(),
    selectOption: Yup.string().required()
  });

  const onSubmit = values =>{

      console.log('Form data', values);
  } 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="textarea"
            label="Comment"
            name="comment"
          />
          <FormikControl
            control="select"
            label="Select An Option"
            name="selectOption"
            options={selectList}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer;
