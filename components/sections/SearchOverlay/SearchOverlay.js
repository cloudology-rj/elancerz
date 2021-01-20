import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';

import Navbar from '../../Base/Navbar/Navbar';
import CategoryList from '../CategoryList/CategoryList';

const SearchOverlayContainer = styled.div`
  margin: 24px;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: white;
  height: 100vh;
`;

const HeaderSearch = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const CategoriesContainer = styled.div`
  display: grid;
  gap: 20px;
`;

const SearchOverlay = ({ onToggleSearch }) => {
  return (
    <SearchOverlayContainer>
      <Navbar />

      <HeaderSearch>
        <ButtonTertiary onClick={() => onToggleSearch(false)}>
          <Image src="/icons/arrowPointLeft.svg" width={24} height={24} />
        </ButtonTertiary>
        <Input type="text" placeholder='Try "Logo Design" ' />
      </HeaderSearch>

      <CategoriesContainer>
        <CategoryList title="Search History" searchHistory />
        <CategoryList title="Search History" />
      </CategoriesContainer>
    </SearchOverlayContainer>
  );
};

export default SearchOverlay;
