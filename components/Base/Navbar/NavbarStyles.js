import styled from 'styled-components';
import  Input from '@/components/global/Input';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
`;

export const HamburgerMenu = styled.button`
  border: none;
  background: none;
  @media ${props => props.theme.mediaQueries.tablet}{
    display:none;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarRight  = styled.div`
display: flex;
align-items:center;
gap:15px;

`

export const NavbarInput = styled(Input)`
display:none;


@media ${props => props.theme.mediaQueries.tablet}{
  display:block;
  width:280px;
}

@media ${props => props.theme.mediaQueries.laptop}{
  display:block;
  width:480px;
}

`