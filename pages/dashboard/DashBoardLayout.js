import React from 'react';
import styled from 'styled-components';

import TempHeader from './TempHeader';
import Footer from 'components/Base/Footer/Footer';

const DashBoardLayout = ({ children }) => {
  return (
      <DashBoardWrapper>
           <TempHeader />
            <DashBoardBody>
                <Container>
                    { children }
                </Container>
            </DashBoardBody>
          <Footer />
      </DashBoardWrapper>
  )
};

export default DashBoardLayout;


const DashBoardWrapper = styled.div`
  display:block;
  background:${props => props.theme.colors.cloud};
`;

const DashBoardBody = styled.div`
  display:block;
  margin:20px 0 40px;
  @media (max-width:991px) {
    margin:20px 0;
  }
`;


const Container = styled.div`
  max-width:1440px;
  margin:0 auto;
  @media (max-width: 1440px) {
    padding:0 30px;
  }
  @media (max-width: 480px) {
    padding:0 24px;
  }
`;