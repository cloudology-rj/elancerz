import styled from 'styled-components';

import Layout from '../../components/Base/Layout/Layout';
import ExploreCategories from '../../components/sections/ExploreCategories/ExploreCategories';

const ExploreContainer = styled.main`
  background-color: ${(props) => props.theme.colors.turqoise};
`;



const Explore = (props) => {
  return (
    <ExploreContainer>
      <Layout>
        <ExploreCategories />
      </Layout>
    </ExploreContainer>
  );
};

export default Explore;
