import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import ForgotPassword from './ForgotPassword/ForgotPassword';

import {AccoutContainer} from './AccountStyles';

const RenderPage = (section) => {
  switch (section) {
    case 'sign-up':
      return <Signup />;

    case 'sign-in':
      return <Signin />;

    case 'forgot-password':
      return <ForgotPassword />;
  }
};

const Account = ({ section }) => {
  return (
    <AccoutContainer>
      {section == 'sign-up' && <Signup />}
      {section == 'sign-in' && <Signin />}
      {section == 'forgot-password' && <ForgotPassword />}
    </AccoutContainer>
  );
};

export default Account;
