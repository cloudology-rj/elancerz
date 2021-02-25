import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import eFetch from 'helpers/fetch';
import { useAuth } from '../../../context/AuthProvider';


import Layout from '../../../components/Base/Layout/Layout';
import Profile from 'components/profile';

import Loader from '@/components/global/Loader';

import WithLoading from '../../../HOC/WithLoadingAndError';

const ProfileWithLoading = WithLoading(Profile);

const FreelanceProfile = () => {


  const { user } = useAuth();

  // const { isLoading, error, data: profileData } = useQuery(
  //   'profileData',
  //   async () => {
  //     const { data } = await axios.get(
  //       'https://private-208ed-jmg1.apiary-mock.com/rest/v1/profile/3'
  //     ); ``
  //     return data;
  //   }
  // );

  console.log('user', user)

  const towken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjM2Ljc2LjE4XC9yZXN0XC92MVwvdXNlclwvbG9naW4iLCJpYXQiOjE2MTM3MjUwMzYsImV4cCI6MTYxMzcyODYzNiwibmJmIjoxNjEzNzI1MDM2LCJqdGkiOiJwZUVSWDNKVmZrWHVsYTdqIiwic3ViIjozLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.foDyBEoX74CDuYKnKgrKhY7xmpSMnPHIME3VEA_U39Q';

  const { isLoading, error, data: profileData } = useQuery(
    'profileData', () => {
      const data = eFetch('/profile/3', 'GET', towken, '');
      // console.log('dta:',data);
      return data;
    }
  );

  if (error) return 'An error has occurred: ' + error.message;

  return <Layout><ProfileWithLoading isLoading={isLoading} {...profileData} /></Layout>;
};

export default FreelanceProfile;
