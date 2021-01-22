import styled from 'styled-components';
import Image from 'next/image';


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
    padding: 2.3em;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 1.5em 2.8 1.5em 2.8;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding: 1.5em 2.8 1.5em 2.8;
  }
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 6px 0 rgba(0,0,0, 0.2);
  max-width: 352px;
  max-height: 534px;
`;


export const CardImage = styled(Image)`
  border-radius: 50%;
`;

export const FlexContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
`