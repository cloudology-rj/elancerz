import React from 'react';
import PropTypes from 'prop-types';

import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import { ListContainer } from './FreelancerListStyles';

const FreelancerList = (props) => {
  return (
    <ListContainer>
      <FreelancerCard />
      <FreelancerCard />
      <FreelancerCard />
      <FreelancerCard />
      <FreelancerCard />
      <FreelancerCard />
    </ListContainer>
  );
};

FreelancerList.propTypes = {};

export default FreelancerList;
