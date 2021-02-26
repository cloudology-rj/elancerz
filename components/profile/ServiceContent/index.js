import PropTypes from 'prop-types';
import Image from 'next/image';

import { HeaderThree, PreTitle, Body } from '@/components/global/Text';

import {
  ServiceTitle,
  ServiceImage,
  FlexLine,
  ButtonSubmit,
  ChatIcon
} from './ServiceContentStyles';

import { Flex } from '../../../styles/reusableStyles';

import { createQuote } from "../../../api/queries";
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useRouter } from 'next/router';


const index = ({ service, user, loginUserID, close }) => {

  const [token, setToken] = useLocalStorage('elancerztoken', null);
  const router = useRouter()

  const getaQuote = async () => {

    const selectedProfile = service.user_id
    const defaultMessage = `Hi ${user}, I am interested in this service, Let me know when you are available to discuss the details. 
    [elance-service]${service.id}[/elance-service]`

    const dataQuote = {
      selectedProfile: selectedProfile,
      defaultMessage: defaultMessage,
      selectedService: service,
      token: token,
      loginUser: loginUserID
    }
    // console.warn(dataQuote)
    await createQuote(dataQuote)
    await close()
    router.push(`/messages/${selectedProfile}`)
  };

  return (
    <div>
      <Flex direction="column" align="center">
        <ServiceTitle className="card-header">{service.name}</ServiceTitle>
        <PreTitle>Category Name</PreTitle>
      </Flex>

      <br />
      <FlexLine />
      <br />
      <ServiceImage>
        <Image
          src={'/images/service.png'}
          alt="service photo"
          width="100%"
          height="200px"
        />
      </ServiceImage>

      <br />
      <Body>{service.description}</Body>
      <br />
      <Flex gap="5px" align="space-between">
        <PreTitle>0 Services Completed</PreTitle>
        <HeaderThree>$ {service.price}</HeaderThree>
      </Flex>
      <br />

      <ButtonSubmit onClick={getaQuote}>
        <Flex gap="5px">
          <ChatIcon />
          GET A QOUTE
        </Flex>
      </ButtonSubmit>
    </div>
  );
};

index.propTypes = {};

export default index;
