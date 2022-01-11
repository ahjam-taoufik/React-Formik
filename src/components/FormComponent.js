
import React from 'react'
 
const FormComponent = () => {
   
const formik= useFormik({
    initialValues:{
        name:'',
        email:'',
        channel:''
    },
    onSubmit:values=>{
        console.log(values);
    }
})

//console.log(formik.values);

    return (
        <div>
          <form onSubmit={formik.handleSubmit}>
             <label htmlFor='name'>Name</label>
             <input onChange={formik.handleChange} value={formik.values.name}   type='text' id='name' name='name'/>

             <label htmlFor='email'>Email</label>
             <input onChange={formik.handleChange} value={formik.values.email}  type='email' id='email' name='email'/>
             <label htmlFor='channel'>Channel</label>
             <input onChange={formik.handleChange} value={formik.values.channel}  type='text' id='channel' name='channel'/>
              <button type='submit'>Submit</button>
          </form>

        </div>
    )
}

export default FormComponent
