import Image from 'next/image';
import styled from 'styled-components';
// import firebase from 'firebase/app';

// import { signInWithGoogle } from '../../firebase/firebase';

import {
  HeaderThree,
  SmallText
} from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';

import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import Input from '@/components/global/Input';

const ProfileContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;

const ProfileBanner = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
`;


const FormContainer = styled.div`
  padding-top: 2em;
  padding-bottom: 2em;
  display: grid;
  @media ${(props) => props.theme.mediaQueries.mobile} {
    width: 100%;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 50%;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width: 50%;
  }
  place-items: left;
  text-align: left;
  gap: .5em;
`;



const Profile = (props) => {


  return (
    <ProfileContainer>

      <ProfileBanner>
        <ButtonPrimary>SAVE CHANGES</ButtonPrimary>
        <ButtonSecondary>CANCEL</ButtonSecondary>
      </ProfileBanner>

      <ProfileCard />

      <ButtonPrimary>CHANGE COVER IMAGE</ButtonPrimary>


      <FormContainer>

        <SmallText>First Name</SmallText>
        <Input value="Charlie" />
        <br/>
        <SmallText>Last Name</SmallText>
        <Input value="Levin" />

        <br/>
        <SmallText>Title</SmallText>
        <Input value="Graphic Designer" />

        <br/>
        <SmallText>Username</SmallText>
        <Input value="charlielevin23" />

        <br/>
        <SmallText>About</SmallText>
        <Input value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />

        <br/>
        <HeaderThree>Services (12)</HeaderThree>

      </FormContainer>

    </ProfileContainer>
  );
};

Profile.propTypes = {};

export default Profile;
