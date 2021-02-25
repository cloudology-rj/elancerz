import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthProvider';

import Footer from '../components/Base/Footer/Footer';
import Header from '../components/Base/Header/Header';
import About from '../components/sections/About/About';
import FeatureColumns from '../components/sections/FeatureColumns/featureColumns';
import ExploreIntro from '../components/sections/ExploreIntro/ExploreIntro';

const Home = () => {
  const { isLogin } = useAuth();

  const router = useRouter();

  if (isLogin) {
    typeof window !== 'undefined' &&  router.push('/dashboard');
  }

  return (
    <>
      <Header />
      <About />
      <FeatureColumns />
      <ExploreIntro />
      <Footer />
    </>
  );
};

export default Home;
