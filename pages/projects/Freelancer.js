import React from 'react';
import styled from 'styled-components';

import TopOptions from 'components/projects/TopOptions';
import Project from 'components/projects/Project';

const Freelancer = () => {
  return <Boxes>
      <TopOptions />
      <ProjectsWrapper>
          <Project />
      </ProjectsWrapper>
  </Boxes>
};

export default Freelancer;

export const Boxes = styled.div`

`;

export const ProjectsWrapper = styled.div`

`;