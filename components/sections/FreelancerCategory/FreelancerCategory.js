import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Subtitle } from '@/components/global/Text';

import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import {FreelancersContainer, FreelanceCategoryContainer} from './FreelancerCategoryStyles';


/*
Contains the name  of a  category and its freelancers
on the Main Page
*/

const FreelancerCategory = ({ title }) => {
  return (
    <FreelanceCategoryContainer>
      <Subtitle>{title}</Subtitle>
      <br />
      <FreelancersContainer>
        <FreelancerCard />
        <FreelancerCard />
      </FreelancersContainer>
    </FreelanceCategoryContainer>
  );
};

FreelancerCategory.propTypes = {};

export default FreelancerCategory;
