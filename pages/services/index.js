import React from 'react'
import styled from 'styled-components';

import Container from '@/components/global/Container';
import Layout from '../../components/Base/Layout/Layout';
import MyServices from 'components/services';

const Services = props => {
    return (
        <Layout>
            <Container>
                <MyServices />
            </Container>
        </Layout>
    )
}


export default Services
