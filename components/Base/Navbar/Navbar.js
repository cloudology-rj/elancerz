import { useState } from 'react';
import Image from 'next/image';

import { LogoSmall } from '@/components/global/Logo';

import { ButtonPrimary } from '@/components/global/Button';
import SidebarNav from '../SidebarNav/SidebarNav';

import {
  HeaderContainer,
  HamburgerMenu,
  FlexContainer,
  NavbarInput,
  NavbarRight,
} from './NavbarStyles';

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <HeaderContainer>
        <FlexContainer>
          <HamburgerMenu onClick={() => setToggle(true)}>
            <Image src="/icons/menu.svg" width="24px" height="24px" />
          </HamburgerMenu>
          <LogoSmall />
        </FlexContainer>

        <NavbarRight>
          <NavbarInput placeholder="Enter a search" />
          <Image src="/icons/Bell.svg" width="25px" height="25px" />
          <Image src="/icons/chat.svg" width="25px" height="25px" />

          {/* if not logged in <ButtonPrimary>login</ButtonPrimary> */}
        </NavbarRight>
      </HeaderContainer>

      {toggle && <SidebarNav toggle={toggle} onToggle={setToggle} />}
    </>
  );
};

export default Navbar;
