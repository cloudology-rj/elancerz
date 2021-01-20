// import App from 'next/app';
import Theme from '../styles/theme';
import GoogleFonts from 'next-google-fonts';
import { GlobalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@600;700&display=swap" />
      
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
