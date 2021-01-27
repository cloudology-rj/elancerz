import styled from 'styled-components';
import { ButtonPrimary } from '@/components/global/Button';


export const FormGroup = styled.div`
  display: grid;
  gap: 15px;
`;

export const SignupContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;


export const ButtonStepper = styled(ButtonPrimary)`
  margin-top: 20px;
`;