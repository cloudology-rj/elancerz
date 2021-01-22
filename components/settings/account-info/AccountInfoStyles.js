import styled from 'styled-components'
import {ButtonPrimary} from '../../global/Button'
import {PreTitle, Bold, SmallText} from '@/components/global/Text'


export const StyledPretitle = styled(PreTitle)`
    text-transform: capitalize !important;
`
export const StyledBold = styled(Bold)`
    margin-top: 0.5rem;
`
export const StyledSmallText = styled(SmallText)`
    margin-top: 0.3rem;
    font-size: 12px;
`
export const ButtonError = styled(ButtonPrimary)`
    background-color: ${props => props.theme.colors.error};
    margin-top: 2rem;
    margin-bottom: 1rem;
    @media ${props => props.theme.mediaQueries.laptop}{
        margin-bottom: 10rem;
    }
`

export const StyledAccountInfo = styled.div`
    padding: 2rem 0;
    @media ${props => props.theme.mediaQueries.laptop}{
        padding: 2rem;
    }
    .container{
        margin-top: 1rem;
    }
    .info{
        margin-top: 2rem;
    }
    .phone{
        margin-bottom: 2rem;
    }

    @keyframes float {
        from{
            transform: translateY(500%);
        }
        to{
            transform: translateY(0)
        }
    }
`