import Image from 'next/image';
import styled from 'styled-components';
import firebase from 'firebase/app';
import React, { useState } from 'react';

// import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { useFormik, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { signInWithGoogle } from '../../firebase/firebase';

import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';

const SignUpContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 15px;
`;

const FormContainer = styled(Form)`
  width: 100%;
`;

const Signup = (props) => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [step, setStep] = useState(1);

  // process to next step
  const next = (error) => {
    console.log(error);

    if (error || error === undefined || error === '') return;
    // update state.step by adding to previous state
    setStep(step + 1);
  };

  // process to previous step
  const back = () => {
    // update state.step by minus 1 from previous state
    setStep(step - 1);
  };


  const testSchema1 = 
    Yup.object({
      email: Yup.string()
        .email('Pleas enter a valid email')
        .required('Email is required'),
    })
  

  const testSchema2 = 
    Yup.object({
      username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Firstname is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password is too short - should be 6 chars minimum'),
    })

    
    const [isNext, setIsNext] = useState(testSchema1)

  return (
    <SignUpContainer>
      <HeaderThree>Sign up</HeaderThree>
      <br />

      <Formik
        validationSchema={isNext}
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        onSubmit={async (values, helpers) => {
          // not running
          // validationSchema={testSchema2}
          setIsNext(testSchema2)
          console.log('running');
          if (step === 3) {
            cosole.log(values, helpers);
          } else {
            setStep((s) => s + 1);
          }
        }}
      >
        {({
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
          handleChange,
        }) => (
          <Form>
            {renderStep(
              step,
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              next,
              back,
              signupSuccess
            )}
            {step >= 1 && <ButtonPrimary type="submit">Continue</ButtonPrimary>}
          </Form>
        )}
      </Formik>

      <PreTitle>
        By joining, you agree to our Terms of Service, as well as to receive
        occasional emails from us.
      </PreTitle>

      <PreTitle>
        Already a member? <HighlightColor>Login</HighlightColor>{' '}
      </PreTitle>
    </SignUpContainer>
  );
};

Signup.propTypes = {};

export const renderStep = (
  step,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  next,
  back,
  signupSuccess
) => {
  switch (step) {
    case 1:
      return (
        <FormGroup>
          <ButtonPrimary fullWidth>
            <Image src="/icons/facebook-icon.svg" height="22px" width="22px" />
            Continue with Facebook
          </ButtonPrimary>

          <ButtonTertiary isCenter onClick={signInWithGoogle}>
            <Image src="/icons/google-ic  on.svg" height="22px" width="22px" />
            Continue with google
          </ButtonTertiary>

          <Bold>Or</Bold>

          <Input
            onBlur={handleBlur}
            type="email"
            name="email"
            value={values.email}
            placeholder="enter your email address"
            onChange={handleChange}
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </FormGroup>
      );
    case 2:
      return (
        <FormGroup>
          <Input
            onBlur={handleBlur}
            type="text"
            name="username"
            placeholder="enter your username"
            onChange={handleChange}
          />
          {errors.username && touched.username && <p>{errors.username}</p>}

          <Input
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="enter your password address"
            onChange={handleChange}
          />
          {errors.password && touched.password && <p>{errors.password}</p>}
        </FormGroup>
      );

    case 3:
      return <h1>Horay! you signed up!</h1>;
  }
};

export default Signup;

// const formik = useFormik({
//   initialValues: {
//     email: '',
//     username: '',
//     password: '',
//   },
//   validationSchema: Yup.object({
//     email: Yup.string()
//       .email('Pleas enter a valid email')
//       .required('Email is required'),
//     username: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Firstname is required'),
//     password: Yup.string()
//       .required('Password is required')
//       .min(6, 'Password is too short - should be 6 chars minimum'),
//   }),
//   onSubmit: (values) => {
//     alert(JSON.stringify(values, null, 2));
//   },
// });

{
}
