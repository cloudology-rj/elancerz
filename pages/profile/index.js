import styled from 'styled-components';
import Layout from '../../components/Base/Layout/Layout';
import Profile from 'components/profile';
import { HeaderTwo } from '@/components/global/Text';
import { useQuery } from 'react-query';
import WithLoadingAndError from '../../HOC/WithLoadingAndError';
const ProfileWithLoading = WithLoadingAndError(Profile);

import firebase from 'firebase/app';
import 'firebase/auth';

import { fetchProfile } from '../../api/queries';
import { useAuth } from '../../context/AuthProvider';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useState, useEffect } from 'react';

const FreelanceProfile = () => {
//   const { token, user } = useAuth();
  
  const [token, setToken] = useLocalStorage('elancerztoken', null);

  const { isLoading, error, data: profileData } = useQuery(
    'profileData',
    async () => await fetchProfile(token)
  );

  if (error)
    console.log(error)
    return (
      <Layout>
        <NotFound>
          <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
        </NotFound>
      </Layout>
    );

  return (
    <Layout>
      <ProfileWithLoading isLoading={isLoading} {...profileData} />
    </Layout>
  );
};

export default FreelanceProfile;

export const NotFound = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
