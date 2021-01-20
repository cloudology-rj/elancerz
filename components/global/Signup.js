import Image from 'next/image';
import styled from 'styled-components';
import firebase from 'firebase/app';

import { signInWithGoogle } from '../../firebase/firebase';



import {
  HeaderThree,
  Bold,
  PreTitle,
  HighlightColor,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import Input from '@/components/global/Input';

const SignUpContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
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

      <ButtonSecondary onClick={signInWithGoogle}>
        <Image src="/icons/google-icon.svg" height="22px" width="22px" />
        Continue with google
      </ButtonSecondary>

      <Bold>Or</Bold>

      <Input placeholder="Enter your email address" />
      <ButtonPrimary fullWidth>Continue</ButtonPrimary>
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
