import { useRouter } from 'next/router';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

import Signup from '@/components/global/Signup';

import Layout from '../components/Base/Layout/Layout';

const SignupMobile = (props) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  }

  return (
    <Layout>
      <Signup />
    </Layout>
  );
};

export default SignupMobile;
