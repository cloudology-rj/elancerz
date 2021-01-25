import styled from 'styled-components';
import mixins from '../../../styles/mixins';

export const FlexContainer = styled.div`
  ${mixins.flexBetween};
  width: 100%;
`;
export const InputGroup = styled.div`
  ${mixins.flexAligned}
  gap:10px;
`;
