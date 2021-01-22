import { useRouter } from 'next/router';

import SignIn from '@/components/global/Signin';
import Container from '@/components/global/Container';

import Layout from '../components/Base/Layout/Layout';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const SigninMobile = (props) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
  }
  return (
    <Layout>
      <Container>
        <SignIn />
      </Container>
    </Layout>
  );
};

SigninMobile.propTypes = {};

export default SigninMobile;
