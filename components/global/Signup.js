import Image from 'next/image';
import styled from 'styled-components';
import firebase from 'firebase/app';

import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import * as yup from 'yup';

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
  return (
    <SignUpContainer>
      <HeaderThree>Sign up</HeaderThree>
      <br />

      <ButtonPrimary fullWidth>
        <Image src="/icons/facebook-icon.svg" height="22px" width="22px" />
        Continue with Facebook
      </ButtonPrimary>

      <ButtonTertiary onClick={signInWithGoogle}>
        <Image src="/icons/google-icon.svg" height="22px" width="22px" />
        Continue with google
      </ButtonTertiary>

      <Bold>Or</Bold>

      <Formik
        validationSchema={yup.object({
          email: yup.string().email()
        })}
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
      >
        <FormContainer>
          <FormGroup>
            <Field
              name="email"
              component={Input}
              label="email"
              placeholder="Enter your email address"
              fullWidth={true}
            />
            <ButtonPrimary fullWidth>Continue</ButtonPrimary>
          </FormGroup>
        </FormContainer>
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

export default Signup;



export function FormikStepper(){

}