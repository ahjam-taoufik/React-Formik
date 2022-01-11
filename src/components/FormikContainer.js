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

const radioList=[
    {key:"option 1", value:'roption1'},
    {key:"option 2", value:'roption2'},
    {key:"option 3", value:'roption3'},
]
   



  const initialValues = {
    email: '',
    comment: '',
    selectOption:'',
    radioOption:''
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    comment: Yup.string().required(),
    selectOption: Yup.string().required(),
    radioOption: Yup.string().required('Select one option ')
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

          <FormikControl
            control="radio"
            label="Select A radio Option"
            name="radioOption"
            options={radioList}
          />
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  )
}

export default FormikContainer;
