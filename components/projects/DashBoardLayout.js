import React from 'react';
import styled from 'styled-components';


import Footer from 'components/Base/Footer/Footer';

const DashBoardLayout = ({ children }) => {
  return (
      <DashBoardWrapper>
           {/* TempHeader */}
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
`;


const Container = styled.div`
  max-width:1440px;
  margin:0 auto;
  @media (max-width: 1440px) {
    padding:0 30px;
  }
`;