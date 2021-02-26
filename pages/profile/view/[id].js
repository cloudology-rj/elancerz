import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { useAuth } from '../../../context/AuthProvider';
import { fetchProfileFreelancer } from '../../../api/queries';

import Layout from '../../../components/Base/Layout/Layout';
import Profile from '../../../components/profile/viewProfile/';



import WithLoading from '../../../HOC/WithLoadingAndError';



const ProfileWithLoading = WithLoading(Profile);

const FreelanceProfile = () => {
  const router = useRouter();

  const { token, isLogin } = useAuth();
  
  
  if (router.isReady) {
    
  const { id } = router.query;
    
  const isIdAvailable = id !== undefined && token !== null;

  if (!isLogin) {
    router.back();
  }

  const { isLoading, error, data } = useQuery(
    'profilefreelancer',
    async () => await fetchProfileFreelancer(id, token),
    { enabled: isIdAvailable }
  );
    
    
    return (
      <Layout>
        <ProfileWithLoading
          error={error}
          errorComponent={<h1>Sorry Something went wrong with your request</h1>}
          isLoading={isLoading}
          {...data}
        />
      </Layout>
    );
  } else {
    return null;
  }
};

export default FreelanceProfile;
