import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { HeaderThree, PreTitle } from '@/components/global/Text';
import Input from '@/components/global/Input';
import { ButtonTertiary, ButtonPrimary, ButtonOpacity } from '@/components/global/Button';

import CategoryList from '../CategoryList/CategoryList';

const FilterContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  padding: 32px;
  z-index: 1000;
  background: #fff;

  display: grid;
  grid-column-gap: 12px;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
`;

const FilterSearch = ({onToggleFilter}) => {
  return (
    <FilterContainer>
      <FilterHeader>
        <FlexContainer>
          <Image
            src="/icons/Filter.svg"
            width={20}
            height={20}
            alt="Filter Icon"
          />
          <HeaderThree>Filters</HeaderThree>
        </FlexContainer>
        <ButtonOpacity onClick={() => onToggleFilter(false)}>

        <Image src="/icons/ArrowPointLeft.svg" width={24} height={24} />
        </ButtonOpacity>
      </FilterHeader>


      <CategoryList title="Category" />
      <CategoryList title="Location" />

      <div>
        <PreTitle>Price</PreTitle>
        <FlexContainer>
          <Input type="number" placeholder="min" />
          <span>-</span>
          <Input type="number" placeholder="max" />
        </FlexContainer>
      </div>

      <FlexCenter>
        <ButtonTertiary>Reset</ButtonTertiary>
        <ButtonPrimary>Apply filters</ButtonPrimary>
      </FlexCenter>
    </FilterContainer>
  );
};

FilterSearch.propTypes = {};

export default FilterSearch;
