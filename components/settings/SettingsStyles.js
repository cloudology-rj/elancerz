import styled from 'styled-components'

export const SettingsGrid = styled.div`
    display: grid;
    min-height: 30rem;
    grid-template-columns: 1fr;
    font-family: Open Sans;
    margin-top: 1rem;
    padding: 0;

    @media ${props => props.theme.mediaQueries.laptop}{
        grid-template-columns: 0.3fr 1fr;
        grid-gap: 2rem;
        padding: 0 3rem;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
    `
export const Sections = styled.div`
    width: 100;
    margin-top: 2rem;
    @media ${props => props.theme.mediaQueries.laptop}{
       margin-top: 0;
    }
    .header{
        font-family: "Merriweather";
        font-size: 1.8rem;
        font-weight: 700;
    }
    .section-list{
        margin-top: 4rem;
        @media ${props => props.theme.mediaQueries.laptop}{
        margin-top: 2rem;
        }
        li{
            margin-top: 2rem;
            cursor: pointer;
            white-space: nowrap;
        }
    }
    .active{
        span{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -3px;
            left: 0;
            background-color: ${props => props.theme.colors.primaryBrand};
        }
    }
    }
`
export const Details = styled.div`
    width: 100;
    background-color: ${props => props.theme.colors.cloud};
    padding: 2rem 0;
    @media ${props => props.theme.mediaQueries.laptop}{
        margin-top: -2rem;
        padding: 2rem;
    }
`