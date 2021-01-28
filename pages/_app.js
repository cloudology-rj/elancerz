// import App from 'next/app';
import Theme from '../styles/theme';
import '../styles/dropzone.custom.css';
import GoogleFonts from 'next-google-fonts';
import { GlobalStyles } from '../styles/globalStyles';
import { IsMobileContextProvider } from '../components/Context/IsMobile';

import '../styles/slider.custom.css';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <IsMobileContextProvider>
        <GlobalStyles />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@600;700&display=swap" />

        <Component {...pageProps} />
      </IsMobileContextProvider>
    </Theme>
  );
}

export default MyApp;
