import { useRouter } from 'next/router';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

import Container from '@/components/global/Container';

import Layout from '../components/Base/Layout/Layout';

const InputField = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

const SignupMobile = (props) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log(user);

  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
};

export default SignupMobile;
