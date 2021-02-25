import Signup from './Signup/Signup';
import Signin from './Signin/Signin';
import ForgotPassword from './ForgotPassword/ForgotPassword';

import {AccoutContainer} from './AccountStyles';




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
