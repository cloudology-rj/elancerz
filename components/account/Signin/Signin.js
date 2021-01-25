import Image from 'next/image';
import styled from 'styled-components';

import { signInWithGoogle } from '../../../firebase/firebase';

import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
  Body,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import Checkbox from '@/components/global/Checkbox';

import { FlexContainer, InputGroup } from './SigninStyles';

const SignIn = (props) => {
  return (
    <>
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

      <Input placeholder="Enter your email address" />
      <Input placeholder="Enter your password" />
      <ButtonPrimary fullWidth>Continue</ButtonPrimary>
      <FlexContainer>
        <InputGroup>
          <Checkbox />

          <Body>Remember me</Body>
        </InputGroup>

        <ButtonTertiary>Forgot password</ButtonTertiary>
      </FlexContainer>

      <PreTitle>
        Already a member? <HighlightColor>Login</HighlightColor>{' '}
      </PreTitle>
    </>
  );
};

SignIn.propTypes = {};

export default SignIn;
