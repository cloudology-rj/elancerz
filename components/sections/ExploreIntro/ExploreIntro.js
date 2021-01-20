import React from 'react';
import styled from 'styled-components';

import { Subtitle, HeaderTwo } from '@/components/global/Text';
import Container from '@/components/global/Container';
import { ButtonPrimary } from '@/components/global/Button';

import FreelancerCategory from '../FreelancerCategory/FreelancerCategory';

import {ExploreContainer} from './ExploreIntroStyles';



const ExploreIntro = (props) => {
  return (
    <ExploreContainer>
      <Container>
        <HeaderTwo>Explore</HeaderTwo>

        <FreelancerCategory title="Graphic Designers" />
        <FreelancerCategory title="Marketing Specialist" />
        <ButtonPrimary align='center' >More Categories</ButtonPrimary>
      </Container>
    </ExploreContainer>
  );
};

ExploreIntro.propTypes = {};

export default ExploreIntro;
