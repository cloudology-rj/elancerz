import styled from 'styled-components';

export const ProjectWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px -8px rgba(14, 19, 44, 0.16);
    border-radius: 4px;
    padding: 32px 48px;
    margin-bottom:32px;
`;

export const Head = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:center;
    margin-bottom:22px;
`;

export const Left = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;


export const Title = styled.h2`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s3};
    line-height: 30px;
    letter-spacing: -0.02em;
    color:${props => props.theme.colors.dark};
    margin-right:32px;

    &:after {
        content:'';
        height:50px;
        width: 0;
        position:relative;
        right:-16px;
        border-left:1px solid #ECEFF4;
        z-index:2;
        
    }
`;

export const Name = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-left:16px;
    color:${props => props.theme.colors.text};
`;

export const Right = styled.div`
 
`;

export const Amount = styled.div`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s2};
    line-height: 50px;
    text-align: right;
    letter-spacing: -0.02em;
    color:${props => props.theme.colors.dark};
`;

export const Body = styled.div`
    
`;

export const Date = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.s5};
    line-height: 140%;
    color:${props => props.theme.colors.text};
    margin-bottom:16px;
`;

export const Content = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.s4};
    line-height: 140%;
    color:${props => props.theme.colors.subtleText};
`;

