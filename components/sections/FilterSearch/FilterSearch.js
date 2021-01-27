import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { HeaderThree, PreTitle } from '@/components/global/Text';
import Input from '@/components/global/Input';
import {
  ButtonTertiary,
  ButtonPrimary,
  ButtonOpacity,
} from '@/components/global/Button';

import CategoryListToggle from '../CategoryList/CategoryListToggle';

import data from './data';

import {
  FilterContainer,
  FilterHeader,
  FlexContainer,
  FlexCenter,
} from './FilterSearchStyles';

const FilterSearch = ({ onToggleFilter }) => {
  const [filters, setFilters] = useState(data);

  console.log('inside filter component', filters);

  //toggle all selected to be false
  const resetSelection = (data) =>
    data.map((item) => ({ ...item, selected: false }));

  const resetPresets = () => {
    const { locations, categories } = filters;

    const newLocations = resetSelection(locations);
    const newCategories = resetSelection(categories);

    setFilters({
      ...filters,
      locations: newLocations,
      categories: newCategories,
    });
    console.log('INSIDE Reset Function', filters);
  };

  const toggleSelected = (id, title) => {
    // get the data object
    const target = filters[title];

    target.filter((item) =>
      item.id === id ? (item.selected = !item.selected) : item
    );

    setFilters({ ...filters, [title]: target });
  };

  const { locations, categories } = filters;
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

      <CategoryListToggle
        title="categories"
        list={categories}
        onToggleSelected={toggleSelected}
      />

      <CategoryListToggle
        title="locations"
        list={locations}
        onToggleSelected={toggleSelected}
      />

      <div>
        <PreTitle>Price</PreTitle>
        <FlexContainer>
          <Input type="number" placeholder="min" />
          <span>-</span>
          <Input type="number" placeholder="max" />
        </FlexContainer>
      </div>

      <FlexCenter>
        <ButtonTertiary onClick={() => resetPresets()}>Reset</ButtonTertiary>
        <ButtonPrimary>Apply filters</ButtonPrimary>
      </FlexCenter>
    </FilterContainer>
  );
};

FilterSearch.propTypes = {};

export default FilterSearch;
