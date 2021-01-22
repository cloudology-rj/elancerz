import styled from 'styled-components';
export const FilterContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 32px;
  z-index: 1000;
  background: #fff;

  display: grid;
  grid-column-gap: 12px;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
`;
