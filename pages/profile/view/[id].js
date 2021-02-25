import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useAuth } from '../../../context/AuthProvider';
import { fetchProfileFreelancer } from '../../../api/queries';

import Layout from '../../../components/Base/Layout/Layout';
import Profile from '../../../components/profile/viewProfile/';

import Loader from '@/components/global/Loader';

import WithLoading from '../../../HOC/WithLoadingAndError';

import { useLocalStorage } from '../../../hooks/useLocalStorage';

const ProfileWithLoading = WithLoading(Profile);

const FreelanceProfile = () => {
  const router = useRouter();

  const { token } = useAuth();



  const { id } = router.query;

  const { isLoading, isError, data } = useQuery('profilefreelancer', () =>
    fetchProfileFreelancer(id, token)
  );

  if (isError) return 'Cant find freelancer ';

  if (router.isReady) {
    return (
      <Layout>
        <ProfileWithLoading isLoading={isLoading} {...data} />
      </Layout>
    );
  } else {
    return null;
  }
};

export default FreelanceProfile;
