import Image from 'next/image';
import PropTypes from 'prop-types';

import { Flex } from '../../../styles/reusableStyles';

import {
  PersonImage,
  PersonContainer,
  PersonName,
  PersonSubName,
  Message,
  Job,
} from './PersonStyles';

const Person = ({ unread, image, name, job, message, selected, id }) => {

  return (
    <PersonContainer
      unread={unread}
      selected={selected}
    >
      <PersonImage src="/images/sample.jpg" width="48px" height="48px" />

      <div>
        <Flex gap="5px">
          <PersonName>{name}</PersonName>
          <Job>{job}</Job>
        </Flex>
        <Flex gap="5px">
          <PersonSubName selected={selected}>{name}:</PersonSubName>
          <Message selected={selected}>{message}</Message>
        </Flex>
      </div>
    </PersonContainer>
  );
};

Person.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
  message: PropTypes.string,
  unread: PropTypes.bool,
  selected: PropTypes.bool,
};

export default Person;
