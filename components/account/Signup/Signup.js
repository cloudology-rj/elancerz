import Image from 'next/image';
import Router from 'next/router';
import React, { useState } from 'react';

import { auth } from '../../../firebase/firebase';

import {
  signInWithGoogle,
  signInWithFacebook,
} from '../../../firebase/firebase';

import signupSchema from './signupSchema';

import MultiStep from '@/components/global/MultiStep';
import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
  ErrorMessage,
  Divider,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';

import { FormGroup, SignupContainer, ButtonStepper } from './SignupStyles';



const Signup = ({ isModal, onSwitch }) => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [step, setStep] = useState(0);

  return (
    <SignupContainer>
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

          if (step === 1) {
            const { email, username, password } = values;

            auth
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                alert('Account created');
                Router.push('/dashboard');
              })
              .catch((err) => {
                alert(err);
                helpers.setStatus();
              });
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
        Already a member?{' '}
        {isModal ? (
          <HighlightColor onClick={() => onSwitch()}>Login</HighlightColor>
        ) : (
          <HighlightColor onClick={() => Router.push('/account/sign-in')}>
            Login
          </HighlightColor>
        )}
      </PreTitle>
    </SignupContainer>
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
          <ButtonPrimary fullWidth onClick={signInWithFacebook}>
            <Image src="/icons/facebook-icon.svg" height="22px" width="22px" />
            Continue with Facebook
          </ButtonPrimary>

          <ButtonTertiary isCenter fullWidth onClick={signInWithGoogle}>
            <Image src="/icons/google-icon.svg" height="22px" width="22px" />
            Continue with google
          </ButtonTertiary>

          <Divider>or</Divider>

          <Input
            errors={errors.email}
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

{
           // handles switching the steps
            <ButtonStepper fullWidth type="submit">
              Continue
            </ButtonStepper>
          }
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

{
           // handles switching the steps
            <ButtonStepper fullWidth type="submit">
              Sign up
            </ButtonStepper>
          }
        </FormGroup>
      );

    case 2:
      return <h1>Horay! you signed up!</h1>;
  }
};

export default Signup;
