import { useRouter } from 'next/router';


import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import { HighlightColor } from '@/components/global/Text';
import Container from '@/components/global/Container';
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

  return (
    <HeaderContainer>
      <NavbarContainer>
        <LogoBig />

        <NavbarButton>
          <ButtonPrimary>Sign Up</ButtonPrimary>
          <ButtonSecondary>Sign In</ButtonSecondary>
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
            <ButtonSecondaryStyle onClick={() => router.push('/signinmobile')}>
              login
            </ButtonSecondaryStyle>
          </ButtonContainer>
        </HeaderContent>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
