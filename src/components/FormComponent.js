import { Formik, Form, Field ,ErrorMessage} from "formik";
import React from "react";
import * as Yup from "yup";
import TextError from "./TextError";
const FormComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments:{
       comment1:'',
       comment2:''
    }
   
  };
  const onSubmit = (values) => {
      console.log('onsubmit :' ,values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required name..."),
    email: Yup.string().email("invalid email").required("required email"),
    channel: Yup.string().required("required channel"),
  
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
             {  err=><div className="error">{err}</div>}

          </ErrorMessage>
        
        </div>


        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field  type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="comment1">Comment 1</label>
          <Field  type="text" id="comment1" name="comments.comment1" />
        </div>

        <div className="form-control">
          <label htmlFor="comment2">Comment 2</label>
          <Field  type="text" id="comment2" name="comments.comment2" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
