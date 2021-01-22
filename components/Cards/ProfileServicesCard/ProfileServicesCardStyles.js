import styled from 'styled-components';
import Image from 'next/image';


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background: white;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04),
    0px 8px 16px -8px rgba(14, 19, 44, 0.16);
  width:240px;
  height:270px;
  min-width:240px;
  min-height:270px;
  margin-right: 30px;
`;
export const CardImage = styled(Image)`
  border-radius: 4px 4px 0 0;
`;

export const FlexContainer = styled.div`
display:flex;
align-items: left;
justify-content: space-between;
padding: .5em 1em 0em 1em ;
`

export const FlexBottom = styled.div`
display:flex;
align-items: left;
justify-content: left;
padding: .5em 1em 0em 1em ;
`