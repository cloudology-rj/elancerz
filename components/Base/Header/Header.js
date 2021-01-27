import { useRouter } from 'next/router';
import { useState } from 'react';

import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import { HighlightColor } from '@/components/global/Text';
import Container from '@/components/global/Container';
import Modal from '@/components/global/Modal';
import Signup from '../../account/Signup/Signup';
import Signin from '../../account/Signin/Signin';
import ForgotPassword from '../../account/ForgotPassword/ForgotPassword';
import Input from '@/components/global/Input';
import { LogoBig } from '@/components/global/Logo';

import {
  NavbarContainer,
  HeroTitle,
  HeaderContent,
  HeaderContainer,
  NavbarButton,
  ButtonContainer,
  ButtonSecondaryStyle,
} from './HeaderStyles';

const Header = (props) => {
  const router = useRouter();

  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const switchToSignin = () => {
    console.log('Running');
    setShowSignup(!showSignup);
    setShowSignin(!showSignin);
  };
  const switchToSignup = () => {
    setShowSignin(!showSignin);
    setShowSignup(!showSignup);
  };

  const SwitchToForgotPassword = () => {
    setShowSignin(!showSignin);
    setShowForgotPassword(!showForgotPassword);
  };

  const switchToSignfromPassword = () => {
    setShowForgotPassword(false);
    setShowSignin(!showSignin);
  };

  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoBig />

        <NavbarButton>
          <ButtonPrimary onClick={() => setShowSignup(!showSignup)}>
            Sign Up
          </ButtonPrimary>
          <ButtonTertiary onClick={() => setShowSignin(!showSignin)}>
            Sign In
          </ButtonTertiary>
        </NavbarButton>
      </NavbarContainer>
      <Container>
        <HeaderContent>
          <HeroTitle>
            Looking for the perfect
            <HighlightColor> freelance services</HighlightColor>
            for your business?
          </HeroTitle>
          <Input type="text" placeholder="Try logo design" />

          <ButtonContainer>
            <ButtonPrimary onClick={() => router.push('/account/sign-up')}>
              Sign up
            </ButtonPrimary>
            <ButtonTertiary onClick={() => router.push('/account/sign-in')}>
              login
            </ButtonTertiary>
          </ButtonContainer>
        </HeaderContent>
      </Container>

      <Modal
        modalActive={showSignin}
        setModalActive={setShowSignin}
        content={
          <Signin
            onPasswordReset={SwitchToForgotPassword}
            onSwitch={switchToSignin}
            isModal={true}
          />
        }
      />
      <Modal
        modalActive={showSignup}
        setModalActive={setShowSignup}
        content={<Signup onSwitch={switchToSignup} isModal={true} />}
      />
      <Modal
        modalActive={showForgotPassword}
        setModalActive={setShowForgotPassword}
        content={
          <ForgotPassword onSwitch={switchToSignfromPassword} isModal={true} />
        }
      />
    </HeaderContainer>
  );
};

export default Header;
