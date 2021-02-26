import PropTypes from 'prop-types';
import { ButtonPrimary } from '@/components/global/Button';

import { SendQuote } from './getQuoteStyles';

import { Flex } from '../../../styles/reusableStyles';

const getQuote = ({ isPublic, status }) => {
  return status ? (
    <ButtonPrimary>
      <Flex gap="5px" align="center">
        <SendQuote white={true} />
        SEND A MESSAGE
      </Flex>
    </ButtonPrimary>
  ) : isPublic ? (
    <ButtonPrimary>
      <Flex gap="5px" align="center">
        <SendQuote white={true} />
        SEND A MESSAGE
      </Flex>
    </ButtonPrimary>
  ) : (
    <ButtonTransparent>
      <Flex gap="5px" align="center">
        <SendQuote />
        SEND A MESSAGE
      </Flex>
    </ButtonTransparent>
  );
};

getQuote.propTypes = {
  isPublic: PropTypes.bool,
  view: PropTypes.string,
};

export default getQuote;
