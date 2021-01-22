import { useState } from 'react';
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

import data, { categoriesData, locationsData } from './data';

import {
  FilterContainer,
  FilterHeader,
  FlexContainer,
  FlexCenter,
} from './FilterSearchStyles';

const FilterSearch = ({ onToggleFilter }) => {
  const [filters, setFilters] = useState(data);

  console.log(filters.locations);

  const resetSelection = (data) =>
    data.map((item) => {
      const newItem = { ...item };
      newItem.selected = false;
      return newItem;
    });

  const resetPresets = () => {
    const { locations, categories } = filters;

    const newLocations = resetSelection(locations);
    const newCategories = resetSelection(categories);

    const resetFilter = { categories: newCategories, locations: newLocations };

    setFilters(resetFilter);
  };

  const toggleSelected = (id, title) => {
    const target = filters[title];

    target.map((item) =>
      item.id === id ? (item.selected = !item.selected) : item
    );

    setFilters({ ...filters, [title]: target });
  };


  const{locations,categories} = filters;
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
