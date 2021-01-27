import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import Router from 'next/router';

import Footer from '../components/Base/Footer/Footer';
import Header from '../components/Base/Header/Header';
import About from '../components/sections/About/About';
import FeatureColumns from '../components/sections/FeatureColumns/featureColumns';
import ExploreIntro from '../components/sections/ExploreIntro/ExploreIntro';

export default function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header />
      <About />
      <FeatureColumns />
      <ExploreIntro />
      <Footer />
    </>
  );
}
