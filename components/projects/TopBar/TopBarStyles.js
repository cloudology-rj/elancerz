import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:32px;
`;

export const Heading = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.s2};
    font-weight: 700;
    font-family: 'Merriweather';
    color: ${(props) => props.theme.colors.dark};
    line-height: 50px;
`;

export const Tab = styled.div`
    color:black;
    display:flex;
`;



export const Button = styled.button`
    
    border:0;
    outline:none;
    padding:12px 24px;
    border-radius: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s4};
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor:pointer;

    ${props => {
        if(props.active) {
            return `
                background: ${ props.theme.colors.primaryBrand };
                color:#fff;
                box-shadow: 0px 6px 2px -4px rgba(14, 19, 44, 0.08), inset 0px -1px 0px rgba(14, 19, 44, 0.24);
            `
        } else {
            return `
                background: ${ props.theme.colors.turqoise};
                color: ${ props.theme.colors.primaryBrand};
            `
        }
    }}
`;