import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { Body } from '@/components/global/Text';

const DropdownContainer = styled.div`
  position: relative;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.colors.secondaryBrand};
  width: 100%;
  padding: 12 16px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    width: 320px;
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;

  p {
    color: ${(props) => props.theme.colors.subtleText};
  }
`;

const DropdownList = styled.ul`
  z-index: 100;
  background: ${(props) => props.theme.colors.primaryBrand};
  position: absolute;
  bottom: -170px;
  left: 0;
  width: 100%;
  padding: 10px;
  box-shadow: 0px 4px 8px -4px rgba(14, 19, 44, 0.16),
    0px 1px 1px rgba(14, 19, 44, 0.04);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  padding: 17px;
`;

const DropdownListItem = styled.button`
  color: #fff;
  border-radius: 4px;
  border: none;
  background: transparent;
  text-align: left;
  font-family: 'Open sans';
  font-weight: 600;

  padding: 10px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Dropdown = ({ title, list, resetThenSet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  const selectItem = (item) => {
    setHeaderTitle(item);
    toggleList();
    resetThenSet(item);
  };

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleList}>
        <Body>{headerTitle}</Body>
        <Image src="/icons/arrowDown.svg" width="12px" height="6px" />
      </DropdownHeader>

      {isOpen && (
        <DropdownList>
          <DropdownListItem onClick={() => selectItem('Top Rated')}>
            Top Rated
          </DropdownListItem>
          <DropdownListItem onClick={() => selectItem('Date Joined')}>
            Date Joined
          </DropdownListItem>
          <DropdownListItem onClick={() => selectItem('Services Completed')}>
            Services Completed
          </DropdownListItem>
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  // list: Proptypes.array.isRequired,
  resetThenSet: PropTypes.func.isRequired,
};

export default Dropdown;
