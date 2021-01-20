import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import { LogoImage } from '@/components/global/Logo';
import { HeaderThree, SmallText, Body } from '@/components/global/Text';
import Input from '@/components/global/Input';

import SearchOverlay from '../../sections/SearchOverlay/SearchOverlay';

import {
  SidebarContainer,
  SidebarUl,
  SidebarFlex,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarButton,
} from './SidebarNavStyles';

const SidebarNav = ({ toggle, onToggle }) => {
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <>
      <SidebarContainer toggle={toggle}>
        <SidebarHeader>
          <SidebarButton onClick={() => onToggle(false)}>
            <Image src="/icons/Close.svg" height="30px" width="30px" />
          </SidebarButton>
          <LogoImage />
        </SidebarHeader>

        <SidebarFlex>
          <SidebarContent>
            <SidebarUl>
              <HeaderThree>Home</HeaderThree>
              <HeaderThree>About Us</HeaderThree>
              <HeaderThree>Features</HeaderThree>
              <HeaderThree>Explore</HeaderThree>
            </SidebarUl>

            <SmallText>
              Let’s find the perfect freelance service for you!
            </SmallText>
            <Input
              onClick={() => setToggleSearch(true)}
              placeholder="Try Logo Design"
            />
          </SidebarContent>

          <SidebarFooter>
            <ButtonPrimary>Sign up</ButtonPrimary>

            <ButtonSecondary>Login</ButtonSecondary>
            <Body>2021 / elancerz. All rights reserved</Body>
          </SidebarFooter>
        </SidebarFlex>
      </SidebarContainer>
      {toggleSearch && <SearchOverlay onToggleSearch={setToggleSearch} />}
    </>
  );
};

SidebarNav.propTypes = {};

export default SidebarNav;
