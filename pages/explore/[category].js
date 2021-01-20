import styled from 'styled-components';

import Layout from '../../components/Base/Layout/Layout';
import ExploreFreelancers from '../../components/sections/ExploreFreelancers/ExploreFreelancers';


const ExploreContainer = styled.main`
  background-color: ${(props) => props.theme.colors.turqoise};
`;

const Category = (props) => {
  return (
    <ExploreContainer>
      <Layout>
        <ExploreFreelancers />
      </Layout>
    </ExploreContainer>
  );
};

export default Category;
