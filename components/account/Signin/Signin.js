import Image from 'next/image';
import Router from 'next/router';

import { Formik, Form } from 'formik';
import { useState } from 'react';
import { signInWithGoogle, auth } from '../../../firebase/firebase';

import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
  Body,
  ErrorMessage,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import Checkbox from '@/components/global/Checkbox';

import {
  FlexContainer,
  InputGroup,
  SigninForm,
  SigninContainer,
} from './SigninStyles';

const SignIn = ({ isModal, onSwitch, onPasswordReset }) => {


  return (
    <SigninContainer>
      <HeaderThree>Log in to your account</HeaderThree>
      <br />
      <ButtonPrimary fullWidth>
        <Image src="/icons/facebook-icon.svg" height="22px" width="22px" />
        Continue with Facebook
      </ButtonPrimary>
      <ButtonTertiary nClick={() => signInWithGoogle()}>
        <Image src="/icons/google-icon.svg" height="22px" width="22px" />
        Continue with google
      </ButtonTertiary>
      <Bold>Or</Bold>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, helpers) => {
          const { email, password } = values;
          auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              console.log('running');
              helpers.setStatus({ success: 'Email sent !' });
              setTimeout(() => Router.push('/dashboard'), 5000);
              helpers.resetForm({ values: '' });
              //
            })
            .catch((err) => {
              helpers.setStatus({
                error: 'Wrong Username or password, please try again',
              });
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, status }) => (
          <SigninForm autoComplete="off">
            <Input
              success={status && status.success}
              error={status && status.error}
              name="email"
              type="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
            />
            <Input
              success={status && status.success}
              error={status && status.error}
              name="password"
              type="password"
              values={values.passowrd}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />

            {status && status.error && (
              <ErrorMessage>{status.error}</ErrorMessage>
            )}

            <ButtonPrimary type="submit" fullWidth>
              Login
            </ButtonPrimary>
          </SigninForm>
        )}
      </Formik>
      <FlexContainer>
        <InputGroup>
          <Checkbox />

          <Body>Remember me</Body>
        </InputGroup>

        {isModal ? (
          <ButtonTertiary onClick={() => onPasswordReset()}>
            Forgot Password
          </ButtonTertiary>
        ) : (
          <ButtonTertiary
            onClick={() => Router.push('/account/forgot-password')}
          >
            Forgot password
          </ButtonTertiary>
        )}
      </FlexContainer>
      <PreTitle>
        Not yet a member?{' '}
        {isModal ? (
          <HighlightColor onClick={() => onSwitch()}>sign up</HighlightColor>
        ) : (
          <HighlightColor onClick={() => Router.push('/account/sign-up')}>
            sign up
          </HighlightColor>
        )}
      </PreTitle>
    </SigninContainer>
  );
};

SignIn.propTypes = {};

export default SignIn;
