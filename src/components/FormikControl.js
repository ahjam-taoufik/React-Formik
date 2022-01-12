import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import RadioButtons from './RadioButtons'
import CheckboxGroup from './CheckboxGroup'
import DatePicker from './DatePicker'
import ChakraInput from './ChakraInput'
function FormikControl(props) {
    const {control, ...rest}=props
    switch (control) {
        case'input':
            return <Input {...rest} />
        case'textarea':
            return   <TextArea  {...rest} />
            case'select':
            return   <Select  {...rest} />
            case'radio':
            return   <RadioButtons  {...rest} />
            case'checkbox':
            return   <CheckboxGroup  {...rest} />
            case'date':
            return <DatePicker {...rest} />
            case'chakrainput':
            return <ChakraInput {...rest}/>
            
        default: return null
    }
}

export default FormikControl
