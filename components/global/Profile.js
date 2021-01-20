import Image from 'next/image';
import styled from 'styled-components';
// import firebase from 'firebase/app';

// import { signInWithGoogle } from '../../firebase/firebase';

import {
    HeaderThree,
    Bold,
    Paragraph,
} from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';

import ProfileCard from '@/../components/Cards/ProfileCard/ProfileCard';


const ProfileContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;

const BodyContainer = styled.div`
  display: grid;
  place-items: left;
  text-align: left;
  gap: 2em;
 
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width: 50%;
  }
`;

const ProfileBanner = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
`;



const Paragraphs = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 10px;
  line-height: 22.4px;
  text-align: justify;
  text-justify: inter-word;
`;



const Profile = (props) => {


    return (
        <ProfileContainer>

            <ProfileBanner>
                <ButtonPrimary>PUBLIC VIEW</ButtonPrimary>
                <ButtonSecondary>EDIT PROFILE</ButtonSecondary>
            </ProfileBanner>

            <ProfileCard />

            <BodyContainer>
                <HeaderThree>About</HeaderThree>
                <Paragraphs>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraphs>
                <HeaderThree>Services (12)</HeaderThree>
            </BodyContainer>

            <Bold>SEND A MESSAGE</Bold>
            <br />
        </ProfileContainer>
    );
};

Profile.propTypes = {};

export default Profile;
