import React, { useState } from 'react';
import styled from 'styled-components';

import TopOptions from 'components/projects/TopOptions';
import Project from 'components/projects/Project';

const Freelancer = () => {
  const [isActive, setIsActive] = useState(false)
  return <Boxes>
      <TopOptions setIsActive={setIsActive}/>
      <ProjectsWrapper>
          <Project isActive={isActive}/>
      </ProjectsWrapper>
  </Boxes>
};

export default Freelancer;

export const Boxes = styled.div`

`;

export const ProjectsWrapper = styled.div`

`;