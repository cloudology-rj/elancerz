import { useRouter } from 'next/router';

import Profile from '@/components/global/Profile';

import Layout from '../components/Base/Layout/Layout';

// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase/firebase';

const MyProfile = (props) => {
  // const [user] = useAuthState(auth);
  // const router = useRouter();

  // if (user) {
  //   router.push('/dashboard');
  // }
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

MyProfile.propTypes = {};

export default MyProfile;
