import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 15px 0;
`;

export const ExploreHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  button {
    margin-right: 7px;
  }
`;
