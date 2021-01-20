import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const InputStyle = styled.input`
  padding: 12px 16px 12px 16px;
  border-radius: 24px;
  height: 48px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondaryBrand};
  background-color: ${(props) => props.theme.colors.cloud};
  display: inline-block;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: ${(props) => props.theme.fontSizes.s4};
    color: ${(props) => props.theme.colors.subtleText};
  }
  :-ms-input-placeholder {
    font-size: ${(props) => props.theme.fontSizes.s4};
    color: ${(props) => props.theme.colors.subtleText};
    padding: 12px 16px;
  }

  ${props => props.transparent && css`
    background:transparent;
  
  `}
`;
const Input = (props) => {
  return <InputStyle {...props}></InputStyle>;
};

Input.propTypes = {};

export default Input;
