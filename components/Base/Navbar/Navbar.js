import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';

import { useAuth } from '../../../context/AuthProvider';

import { LogoSmall } from '@/components/global/Logo';
import Popover from '@/components/global/popover';
import { ButtonPrimary } from '@/components/global/Button';
import Container from '@/components/global/Container';
import SidebarNav from '../SidebarNav/SidebarNav';

import { IsMobileContext } from '../../../context/IsMobile';

import { useLocalStorage } from '../../../hooks/useLocalStorage';

import Hamburger from '../../../public/icons/menu.svg';
import Chat from '../../../public/icons/chat.svg';
import Notification from '../../../public/icons/Bell.svg';

import {
  HeaderContainer,
  NavbarInput,
  NavbarRight,
  Badge,
  SearchContent,
  NotificationContainer,
} from './NavbarStyles';

import { Flex } from '../../../styles/reusableStyles';

const Navbar = ({ fixed }) => {
  const [toggle, setToggle] = useState(false);
  const [keyword, setKeyword] = useState(null);
  const [popup, setPopup] = useState(false);

  const [searchQueries, setSearchQueries] = useLocalStorage('histories', [
    'Logo Design',
    'Web development',
  ]);

  const router = useRouter();
  const { query } = router.query;

  const [isMobile] = useContext(IsMobileContext);
  const { isLogin } = useAuth();

  useEffect(() => {
    window.localStorage.setItem('histories', JSON.stringify(searchQueries));
  }, [searchQueries]);

  // useEffect(() => {
  //   setKeyword(null);
  // }, [query]);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const currKeyword = keyword;

      const histories = JSON.parse(window.localStorage.getItem('histories')) || []; //the "|| []" replaces possible null from localStorage with empty array
      const newKeyword = currKeyword.replace('/', ' ');

      if (histories.indexOf(newKeyword) == -1) {
        histories.push(newKeyword);
        setSearchQueries([...searchQueries, newKeyword]);
      
      }
      router.push(`/search/${newKeyword}`);
      setKeyword('');
    }
  };

  return (
    <>
      <Container>
        <HeaderContainer fixed={fixed}>
          <Flex gap="46px">
            <Hamburger onClick={() => setToggle(!toggle)} />
            <LogoSmall />
          </Flex>

          <NavbarRight>
            <SearchContent>
              <NavbarInput
                value={keyword}
                placeholder="Enter a search"
                onClick={() => setPopup(true)}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyPress={handleEnter}
              />

              {popup && (
                <Popover
                  title="Search History"
                  list={searchQueries}
                  onSetPopup={setPopup}
                  popup={popup}
                />
              )}
            </SearchContent>
            {isLogin ? (
              <>
                <NotificationContainer>
                  <Notification />
                  <Badge>5</Badge>
                </NotificationContainer>

                <NotificationContainer>
                  <Chat />
                  <Badge>5</Badge>
                </NotificationContainer>
              </>
            ) : (
              <ButtonPrimary onClick={() => router.push('/account/sign-in')}>
                login
              </ButtonPrimary>
            )}

            {/* if not logged in  */}
          </NavbarRight>
        </HeaderContainer>
      </Container>
      <SidebarNav toggle={toggle} onToggle={setToggle} />
    </>
  );
};

export default Navbar;
