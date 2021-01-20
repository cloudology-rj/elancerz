import styled from 'styled-components';

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr;
  padding:50px;
  
  gap: 22px;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
    place-items: unset;
  }

  margin: 20px 0;
`;
