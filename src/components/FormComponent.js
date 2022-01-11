
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup'
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
   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email='Invalid email'   
   }




   if(!values.channel){
     errors.channel='Required channel'    
   }
return errors
}//validate

const validationShema=Yup.object({
    name:Yup.string().required('Required name...'),
    email:Yup.string().email('invalid email').required('required email'),
    channel:Yup.string().required('required channel'),
})



const formik= useFormik({
    initialValues:initialValues,
    onSubmit:onSubmit,
   // validate:validate,
    validationSchema:validationShema
  
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
             {formik.touched.name && formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}
             </div>
            
             <div className='form-control'>
             <label htmlFor='email'>Email</label>
             <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}  type='email' id='email' name='email'/>
             {formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}
             </div>
            
             <div className='form-control'>
             <label htmlFor='channel'>Channel</label>
             <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.channel}  type='text' id='channel' name='channel'/>
             {formik.touched.channel && formik.errors.channel?<div className='error'>{formik.errors.channel}</div>:null}
             </div>
             
              <button type='submit'>Submit</button>
          </form>

        </div>
    )
}

export default FormComponent
