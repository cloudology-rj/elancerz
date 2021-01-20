import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const MainContainer = styled.div`
    margin: 0 24px;
`

const Container = ({children}) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    )
}



export default Container
