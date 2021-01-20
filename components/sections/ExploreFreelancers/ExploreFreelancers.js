import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { ButtonPrimary } from '@/components/global/Button';
import { HeaderThree, HeaderTwo } from '@/components/global/Text';


import FreelancerList from '../FreelancerList/FreelancerList';


import { CategoriesContainer, ExploreHeader, YellowTextBackground} from './ExploreFreelancersStyles';

// List Out the Freelancers of a particular category on  /explore:category/ endpoint

const ExploreFreelancers = (props) => {
  const router = useRouter();

  return (
    <>
      <ExploreHeader>
        <ButtonPrimary onClick={() => router.push('/explore')}>
          Back
        </ButtonPrimary>
        <HeaderTwo>Explore</HeaderTwo>
        <YellowTextBackground>Web Developers</YellowTextBackground>
      </ExploreHeader>
      <FreelancerList />
    </>
  );
};

ExploreFreelancers.propTypes = {};

export default ExploreFreelancers;
