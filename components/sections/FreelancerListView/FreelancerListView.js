import React from 'react';
import PropTypes from 'prop-types';

import FreelancerCardLarge from '../../Cards/FreelancerCardLarge/FreelancerCardLarge';

import { ListViewContainer } from './FreelancerListViewStyles';

const FreelancerListView = (props) => {
  return (
    <ListViewContainer>
      <FreelancerCardLarge />
      <FreelancerCardLarge />
      <FreelancerCardLarge />
      <FreelancerCardLarge />
    </ListViewContainer>
  );
};

FreelancerListView.propTypes = {};

export default FreelancerListView;
