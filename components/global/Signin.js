import Image from 'next/image';
import styled from 'styled-components';
import firebase from 'firebase/app';

import { signInWithGoogle } from '../../firebase/firebase';

import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
  Body,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import Input from '@/components/global/Input';

const SignInContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;

const FlexContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;

`
const InputGroup = styled.div`

display:flex;
align-items:center;
`

const SignIn = (props) => {
  //   const signIn = () => {
  //     signInWithGoogle();
  //   };

  return (
    <SignInContainer>
      <HeaderThree>Log in to your account</HeaderThree>
      <br />

      <ButtonPrimary fullWidth>
        <Image src="/icons/facebook-icon.svg" height="22px" width="22px" />
        Continue with Facebook
      </ButtonPrimary>

      <ButtonSecondary nClick={signInWithGoogle}>
        <Image src="/icons/google-icon.svg" height="22px" width="22px" />
        Continue with google
      </ButtonSecondary>

      <Bold>Or</Bold>

      <Input placeholder="Enter your email address" />
      <Input placeholder="Enter your password" />
      <ButtonPrimary fullWidth>Continue</ButtonPrimary>
      <FlexContainer>
        <InputGroup>
          <input type="checkbox" name="" id="" />
          <Body>Remember me</Body>
        </InputGroup>

        <ButtonSecondary>Forgot password</ButtonSecondary>
      </FlexContainer>

      <PreTitle>
        Already a member? <HighlightColor>Login</HighlightColor>{' '}
      </PreTitle>
    </SignInContainer>
  );
};

SignIn.propTypes = {};

export default SignIn;
