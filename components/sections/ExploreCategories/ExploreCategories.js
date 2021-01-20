import React from 'react';
import PropTypes from 'prop-types';
import { ButtonPrimary } from '@/components/global/Button';
import Container from '@/components/global/Button';
import { HeaderThree, HeaderTwo } from '@/components/global/Text';

import CategoryCard from '../../Cards/CategoryCard/CategoryCard';

import { CategoriesContainer, ExploreHeader } from './ExploreCategoriesStyles';


// List Out the Categories on  /explore endpoint

const ExploreCategories = (props) => {
  return (
    <>
      <ExploreHeader>
        <ButtonPrimary>Back</ButtonPrimary>
        <HeaderTwo>Explore</HeaderTwo>
      </ExploreHeader>
      <div>
        <HeaderThree>Select a Category</HeaderThree>
        <CategoriesContainer>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </CategoriesContainer>
      </div>
    </>
  );
};

ExploreCategories.propTypes = {};

export default ExploreCategories;
