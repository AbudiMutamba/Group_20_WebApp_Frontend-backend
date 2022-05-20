import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import getForm from '../helpers/fetchbackend'

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1 className='pt-20 flex justify-center'>Subscribe</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
              .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
           const check = getForm(values);
            check.then(data => {
               if( data.status === 201){
                 alert("Thank you")
               } else {
                 alert("Try again")
               }
              })

        }}
      >
        <Form className='m-20 flex-row   border-2 border-black-700'>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
           className='flex justify-center border-2 border-black-700'/>

          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            className='flex justify-center border-2 border-black-700'
          />

          <MyTextInput required
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
            className='flex justify-center border-2 border-black-700 '
          />

          <MySelect className='flex justify-center border-2 border-black-700' label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>

          <MyCheckbox required className="accent-pink-300 focus:accent-pink-500" name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button className='bg-indigo-800 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500' type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

// import React from 'react'

export default function Contact() {
  return (
      
    SignupForm()
  )
}
