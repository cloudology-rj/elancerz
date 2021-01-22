import styled, { css } from 'styled-components';

const button = css`
  border: none;
  background: none;

  img {
    margin-right: 10px;
  }
`;

export const ButtonPrimary = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.primaryBrand};
  padding: 12px 24px;

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 24px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.align === 'center' &&
    css`
      display: flex;
      margin: 0 auto;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

export const ButtonTertiary = styled.button`
  ${button};
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryBrand};
  line-height: 21.79px;
  text-transform: uppercase;
  text-align: center;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isCenter &&
    css`
      justify-self: center;
    `}
`;

export const ButtonOpacity = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.turqoise};
  padding: 8px;
  color: ${(props) => props.theme.colors.text};
  border-radius: 24px;
  box-shadow: 0px 6px 2px -4px rgba(14, 19, 44, 0.08), inset 0px -1px 0px rgba(14, 19, 44, 0.24);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonPill = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.turqoise};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-family: 'Open sans';
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  border-radius: 19px;

  ${(props) =>
    props.isActive === true &&
    css`
      background: ${(props) => props.theme.colors.primaryBrand};
      color: #fff;
    `}
`;

export const ButtonSecondary = styled.button`
  ${button}
  background: ${(props) => props.theme.colors.turqoise};
  padding: 12px 24px 12px 24px;
  border-radius: 22px;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open sans', sans-serif;
  line-height: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryBrand};
`;

export const ButtonTransparent = styled.button`
  ${button};
  background: transparent;
  padding: 12px 24px 12px 24px;
  border-radius: 22px;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open sans', sans-serif;
  line-height: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.subtleText};
  outline: none;
  cursor: pointer;
`;
