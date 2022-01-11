
import { Formik, FormikConsumer, useFormik } from 'formik';
import React from 'react'

const FormComponent = () => {
   
const initialValues={
    name:'',
    email:'',
    channel:''}
const onSubmit=values=>{
  //  console.log('onsubmit :' ,values);
}

const validate=values=>{
   // console.log('onsubmit :' ,values);
  let errors={}

   if(!values.name){
     errors.name='Required name'    
   }
   
   if(!values.email){
     errors.email='Required email'    
   }
   if(!values.channel){
     errors.channel='Required channel'    
   }
return errors
}//validate


const formik= useFormik({
    initialValues:initialValues,
    onSubmit:onSubmit,
    validate:validate,
  
})

// console.log(formik.values);
//console.log(formik.errors.name);
//console.log( 'fields visited', formik.touched);

    return (
        <div>
          <form onSubmit={formik.handleSubmit}>


                 
             <div className='form-control'>
             <label htmlFor='name'>Name</label>
             <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}   type='text' id='name' name='name'/>
             {formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}
             </div>
            
             <div className='form-control'>
             <label htmlFor='email'>Email</label>
             <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  type='email' id='email' name='email'/>
             {formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
             </div>
            
             <div className='form-control'>
             <label htmlFor='channel'>Channel</label>
             <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel}  type='text' id='channel' name='channel'/>
             {formik.errors.channel?<div className='error'>{formik.errors.channel}</div>:null}
             </div>
             
              <button type='submit'>Submit</button>
          </form>

        </div>
    )
}

export default FormComponent
