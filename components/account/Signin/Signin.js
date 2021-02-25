import Image from 'next/image';
import Router from 'next/router';
import axios from 'axios';
import apiCall from '../../../helpers/fetch';

import { Formik, Form } from 'formik';

import { useAuth } from '../../../context/AuthProvider';

import {
  HeaderThree,
  HighlightColor,
  Body,
  ErrorMessage,
  Divider,
} from '@/components/global/Text';
import {
  ButtonPrimary,
  ButtonTertiary,
  ButtonFacebook,
} from '@/components/global/Button';
import Input from '@/components/global/Input';
import Checkbox from '@/components/global/Checkbox';

import Facebook from '../../../public/icons/facebook-icon.svg';
import Google from '../../../public/icons/google-icon.svg';

import {
  FlexContainer,
  InputGroup,
  SigninForm,
  SigninContainer,
  ButtonForgotPassword,
} from './SigninStyles';
import { BodyLight } from '../AccountStyles';
import { Flex } from '../../../styles/reusableStyles';
const SignIn = ({ isModal, onSwitch, onPasswordReset }) => {
  const { setIsLogin, setToken, isLogin, signInWithGoogle } = useAuth();

  if (isLogin) {
    Router.push('/dashboard');
  }

  return (
    <SigninContainer>
      <HeaderThree>Log in to your account</HeaderThree>
      <br />
      <ButtonFacebook fullWidth>
        <Flex direction="row">
          <Facebook />
          Continue with Facebook
        </Flex>
      </ButtonFacebook>
      <ButtonTertiary fullWidth isCenter onClick={() => signInWithGoogle()}>
        <Flex gap="7px" direction="row">
          <Google />
          Continue with google
        </Flex>
      </ButtonTertiary>
      <Divider>or</Divider>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, helpers) => {
          helpers.setStatus();
          const { email, password } = values;

          const data = {
            email,
            password,
          };

          apiCall('/user/login', 'POST', '', data)
            .then((res) => {
              helpers.setStatus({ success: 'signed in' });
              setIsLogin(true);

              setToken(res.access_token);
              Router.push('/dashboard');
            })
            .catch((err) => {
              console.log(err.response);
              helpers.setStatus({ error: 'User does not exist' });
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

            {errors && errors.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}

            {errors && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}

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

          <BodyLight>Remember me</BodyLight>
        </InputGroup>

        {isModal ? (
          <ButtonForgotPassword onClick={() => onPasswordReset()}>
            Forgot Password
          </ButtonForgotPassword>
        ) : (
          <ButtonForgotPassword
            onClick={() => Router.push('/account/forgot-password')}
          >
            Forgot password
          </ButtonForgotPassword>
        )}
      </FlexContainer>
      <BodyLight>
        Not yet a member?{' '}
        {isModal ? (
          <HighlightColor onClick={() => onSwitch()}>sign up</HighlightColor>
        ) : (
          <HighlightColor onClick={() => Router.push('/account/sign-up')}>
            sign up
          </HighlightColor>
        )}
      </BodyLight>
    </SigninContainer>
  );
};

SignIn.propTypes = {};

export default SignIn;
