import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Input from '@/components/global/Input';
import { HeaderThree, PreTitle } from '@/components/global/Text';
import { ButtonPill } from '@/components/global/Button';
import Dropdown from '@/components/global/Dropdown';
import Container from '@/components/global/Container';

import FreelancerList from '../../components/sections/FreelancerList/FreelancerList';
import FreelancerListView from '../../components/sections/FreelancerListView/FreelancerListView';
import Layout from '../../components/Base/Layout/Layout';
import FilterSearch from '../../components/sections/FilterSearch/FilterSearch';

const Category = (props) => {
  const router = useRouter();

  const [toggleFilter, setToggleFilter] = useState(false);
  const [selected, setSelected] = useState('');
  const [view, setView] = useState(false);

  const resetThenSet = (key) => {
    setSelected(key);
  };

  return (
    <CategoryContainer>
      <Layout>
        <Container>
          <CategoryContent>
            <MobileInput>
              <Input placeholder="Logo Design" transparent />
            </MobileInput>

            <CategoriesListContainer>
              <PreTitle>Top Categories</PreTitle>
              <CategoriesList>
                <ButtonPill>Web development</ButtonPill>
                <ButtonPill>Graphic design</ButtonPill>
                <ButtonPill>Graphic design</ButtonPill>
                <ButtonPill>Graphic design</ButtonPill>
                <ButtonPill>Graphic design</ButtonPill>
              </CategoriesList>
            </CategoriesListContainer>

            <div>
              <SearchQueryTitle>Search "{router.query.query}"</SearchQueryTitle>
              <FlexAlignCenter>
                <Dropdown title="Filter by" resetThenSet={resetThenSet} />

                <FlexBetween>
                  <span onClick={() => setToggleFilter(!toggleFilter)}>
                    <Image src="/icons/Filter.svg" height="18px" width="20px" />
                  </span>

                  <ButtonFilter onClick={() => setView(!view)}>
                    {view ? (
                      <Image
                        src="/icons/gridView.svg"
                        height="18px"
                        width="20px"
                      />
                    ) : (
                      <Image
                        src="/icons/listView.svg"
                        height="18px"
                        width="20px"
                      />
                    )}
                  </ButtonFilter>
                </FlexBetween>
              </FlexAlignCenter>

              {view ? <FreelancerListView /> : <FreelancerList />}
            </div>
          </CategoryContent>
        </Container>
      </Layout>
      {toggleFilter && <FilterSearch onToggleFilter={setToggleFilter} />}
    </CategoryContainer>
  );
};

Category.propTypes = {};

export default Category;

const CategoryContainer = styled.div`
  background: ${(props) => props.theme.colors.accent};
  position: relative;
  z-index: 50;
`;

const CategoryContent = styled.div``;

const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
  }
`;

const CategoriesListContainer = styled.div`
  margin-top: 32px;

  h5 {
    margin-bottom: 12px;
  }
`;

const CategoriesList = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  gap: 10px;

  scroll-snap-type: x;

  button {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;

const ButtonFilter = styled.span`
  display: none;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

const FlexBetween = styled.div`
  display: flex;
  gap: 7px;
`;

const SearchQueryTitle = styled(HeaderThree)`
  margin: 32px 0;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s2};
  }
`;

const MobileInput = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display:none;
  }
`;
