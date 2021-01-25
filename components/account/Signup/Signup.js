import Image from 'next/image';

import firebase from 'firebase/app';
import React, { useState } from 'react';



import { signInWithGoogle } from '../../../firebase/firebase';

import signupSchema from './signupSchema';

import MultiStep from '@/components/global/MultiStep';
import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
  ErrorMessage,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';

import { FormGroup } from './SignupStyles';

const Signup = (props) => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <SignUpContainer>
      <HeaderThree>Sign up</HeaderThree>
      <br />

      <MultiStep
        renderItems={FormikStep}
        currentStep={step}
        onSetStep={setStep}
        validationSchema={signupSchema[step]}
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        onSubmit={async (values, helpers) => {
          // not running
          // validationSchema={testSchema2}

          if (step === 3) {
            console.log(values);
          } else {
            setStep(step + 1);
          }
        }}
      />
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

// display the step
const FormikStep = (
  currentStep,
  values,
  errors,
  touched,
  handleChange,
  handleBlur
) => {
  switch (currentStep) {
    case 0:
      return (
        <FormGroup>
          <ButtonPrimary fullWidth>
            <Image src="/icons/facebook-icon.svg" height="22px" width="22px" />
            Continue with Facebook
          </ButtonPrimary>

          <ButtonTertiary isCenter onClick={signInWithGoogle}>
            <Image src="/icons/google-icon.svg" height="22px" width="22px" />
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
          {errors.email && touched.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </FormGroup>
      );
    case 1:
      return (
        <FormGroup>
          <Input
            onBlur={handleBlur}
            type="text"
            name="username"
            placeholder="enter your username"
            onChange={handleChange}
          />
          {errors.username && touched.username && (
            <ErrorMessage>{errors.username}</ErrorMessage>
          )}

          <Input
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="enter your password address"
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
        </FormGroup>
      );

    case 2:
      return <h1>Horay! you signed up!</h1>;
  }
};

export default Signup;
