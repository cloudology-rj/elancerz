import styled from 'styled-components';
import Image from 'next/image';

export const Name = styled.h1`
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.s2};
  line-height: 1em;
  text-align: center;
  margin: 18px 0 4px 0;
`;

export const Position = styled.h2`
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.s3};
  line-height: 1em;
  text-align: center;
  margin: 4px 0;
`;

export const CardContainer = styled.div`
  text-align: center;  
  @media ${(props) => props.theme.mediaQueries.mobile} {
    padding: 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 1.5em 3.5em 1.5em 3.5em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding: 1.5em 3.5em 1.5em 3.5em;
  }
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px 0 rgba(0,0,0, 0.2);
`;
export const CardImage = styled(Image)`
  border-radius: 50%;
`;

export const FlexContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`