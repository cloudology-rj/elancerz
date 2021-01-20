import styled from 'styled-components';
import Image from 'next/image';

export const Name = styled.h3`
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color:${props => props.theme.colors.text};
  line-height: 16.34px;
  text-align: center;
  margin: 4px 0;
`;

export const CardContainer = styled.div`
  text-align: center;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px 0 rgba(0,0,0, 0.3);
`;
export const CardImage = styled(Image)`
  border-radius: 50%;
`;

export const FlexContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`