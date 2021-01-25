import { useRouter } from 'next/router';
import {useState} from 'react';

import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import { HighlightColor } from '@/components/global/Text';
import Container from '@/components/global/Container';
import Modal from '@/components/global/Modal';
import Signup from '../../account/Signup/Signup';
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
  const [modalActive, setModalActive] = useState(false)
  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoBig />

        <NavbarButton>
          <ButtonPrimary onClick={() => setModalActive(!modalActive)}>Sign Up</ButtonPrimary>
          <ButtonTertiary>Sign In</ButtonTertiary>
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
            <ButtonPrimary onClick={() => router.push('/signupmobile')}>
              Sign up
            </ButtonPrimary>
            <ButtonTertiary onClick={() => router.push('/signinmobile')}>
              login
            </ButtonTertiary>
          </ButtonContainer>
        </HeaderContent>
      </Container>

      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<Signup />}/>
                    
    
    </HeaderContainer>
  );
};

export default Header;
