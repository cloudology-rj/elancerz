import Image from 'next/image';
import Router from 'next/router';

import apiCall from '../../../helpers/fetch';

import { useState } from 'react';

import { useAuth } from '../../../context/AuthProvider';

import { signInWithFacebook } from '../../../firebase/firebase';

import signupSchema from './signupSchema';

import MultiStep from '@/components/global/MultiStep';

import Facebook from '../../../public/icons/facebook-icon.svg';
import Google from '../../../public/icons/google-icon.svg';

import { HeaderThree, ErrorMessage, Divider } from '@/components/global/Text';
import {
  ButtonPrimary,
  ButtonTertiary,
  ButtonFacebook,
} from '@/components/global/Button';
import Input from '@/components/global/Input';

import {
  FormGroup,
  SignupContainer,
  ButtonStepper,
  BottomText,
} from './SignupStyles';
import { Flex } from '../../../styles/reusableStyles';

import { BodyLight } from '../AccountStyles';

const Signup = ({ isModal, onSwitch }) => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [step, setStep] = useState(0);

  const { setIsLogin, isLogin, signInWithGoogle } = useAuth();

  if (isLogin) {
    Router.push('/dashboard');
  }

  return (
    <SignupContainer>
      <HeaderThree>Sign up</HeaderThree>
      <br />

      <MultiStep
        signInWithGoogle={signInWithGoogle}
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
            helpers.setStatus();
            setSignupSuccess(true);
            const { email, username, password } = values;

            apiCall('/user/register', 'POST', '', {
              email,
              username,
              password,
            })
              .then((res) => {
                helpers.setStatus({ success: 'Email sent !' });
                console.log('DONE SIGNING UP');
                // window.localStorage.setItem('token', JSON.stringify(res.data));
                console.log(res);
                // auth
                //   .createUserWithEmailAndPassword(email, password)
                //   .then(() => {
                //     alert('Account created');
                //     Router.push('/account/sign-in');
                //   })
                //   .catch((err) => {
                //     alert(err);
                //   });
              })
              .catch(function (error) {
                helpers.setStatus({
                  username: error.response?.data?.errors?.username,
                  password: error.response?.data?.errors?.passwordConfirmation,
                });
              });
          } else {
            setStep(step + 1);
          }
        }}
      />
      <BodyLight>
        By joining, you agree to our Terms of Service, as well as to receive
        occasional emails from us.
      </BodyLight>

      <BodyLight>
        <Flex gap="5px">
          Already a member?
          {isModal ? (
            <BottomText onClick={() => onSwitch()}>Login</BottomText>
          ) : (
            <BottomText onClick={() => Router.push('/account/sign-in')}>
              Login
            </BottomText>
          )}
        </Flex>
      </BodyLight>

      <br />
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
  handleBlur,
  status = 'test',
  signInWithGoogle
) => {
  switch (currentStep) {
    case 0:
      return (
        <FormGroup>
          <ButtonFacebook fullWidth onClick={signInWithFacebook}>
            <Flex direction="row">
              <Facebook />
              Continue with Facebook
            </Flex>
          </ButtonFacebook>

          <ButtonTertiary isCenter fullWidth onClick={signInWithGoogle}>
            <Flex gap="7px" direction="row">
              <Google />
              Continue with google
            </Flex>
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
            success={status && status.success}
            error={status && status.error}
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
            success={status && status.success}
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="enter your password address"
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}

          {status.username && <ErrorMessage>{status.username}</ErrorMessage>}

          {
            // handles switching the steps
            <ButtonStepper fullWidth type="submit">
              sign up
            </ButtonStepper>
          }
        </FormGroup>
      );

    case 2:
      return <h1>Horay! you signed up!</h1>;
  }
};

export default Signup;
