import { useRouter } from 'next/router';
import { useContext } from 'react';
import styled from 'styled-components';

import { IsMobileContext } from '../../context/IsMobile';

import ConversationMain from '../../components/messages/ConversationMain';
import Navbar from '../../components/Base/Navbar/Navbar';

const MainContainer = styled.main`
  body {
    overflow: hidden;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-top: 0;
  }
`;

const MessagePage = (props) => {
  const [isMobile] = useContext(IsMobileContext);
  const router = useRouter();

  const { id } = router.query;

  return (
    <MainContainer>
      <Navbar fixed={isMobile ? 1 : 0} />

      <ConversationMain id={id} />

      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </MainContainer>
  );
};

export default MessagePage;
