import { useRouter } from 'next/router';

import { HeaderThree, Body } from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';

const ForgotPassword = (props) => {
  const router = useRouter();
  return (
    <>
      <HeaderThree>Reset your password</HeaderThree>
      <br />
      <Body>
        Please enter your email address and we’ll send you a link to reset your
        password.
      </Body>

      <Input placeholder="Enter your email address" />
      <Input placeholder="Enter your password" />
      <ButtonPrimary fullWidth>Continue</ButtonPrimary>

      <ButtonTertiary onClick={() => router.push('/account/sign-in')}>
        Back to login
      </ButtonTertiary>
    </>
  );
};

export default ForgotPassword;
