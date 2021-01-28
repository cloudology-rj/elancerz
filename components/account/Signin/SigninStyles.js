import styled from 'styled-components';
import mixins from '../../../styles/mixins';
import { Form } from 'formik';
export const FlexContainer = styled.div`
  ${mixins.flexBetween};
  width: 100%;
`;
export const InputGroup = styled.div`
  ${mixins.flexAligned}
  gap:10px;
`;

export const SigninForm = styled(Form)`
  display: grid;
  gap: 15px;
  width: 100%;
`;

export const SigninContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;



