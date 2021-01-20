import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LogoText, HeaderThree } from '@/components/global/Text';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Shows Only Image and Logo but Big text
export const LogoBig = (props) => {
  return (
    <LogoContainer>
      <Image
        src="/illustrations/logo.svg"
        alt="Elancerz Logo"
        width="53"
        height="37"
      />
      <LogoText color="dark">Elancerz</LogoText>
    </LogoContainer>
  );
};

// Shows Only Image and Logo but small text
export const LogoSmall = () => {
  return (
    <LogoContainer>
      <Image
        src="/illustrations/logo.svg"
        alt="Elancerz Logo"
        width="53"
        height="37"
      />
      <HeaderThree>Elancerz</HeaderThree>
    </LogoContainer>
  );
};


// Shows Only Image
export const LogoImage = () => {
  return(
    <Image
        src="/illustrations/logo.svg"
        alt="Elancerz Logo"
        width="53"
        height="37"
      />
  )
}