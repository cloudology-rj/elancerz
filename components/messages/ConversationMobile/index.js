import { useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderTwo } from '@/components/global/Text';
import Input from '@/components/global/Input';

import ConversationList from '../ConversationList/';
const peopleList = [
  {
    name: 'Brandon Kenter',
    job: 'Graphic Designer',
    message: 'Quam Fermentum tellus.',
    unread: true,
    selected: false,
    id: 1,
  },

  {
    name: 'Craig Lubin',
    job: 'Front End Developer',
    message: 'Elit maecenas arcu netus nisl.',
    unread: false,
    selected: false,
    id: 2,
  },
];

const ConversationMobile = (props) => {
  const [peoples, setPeoples] = useState(peopleList);

  return (
    <div>
      <HeaderTwo>Messages</HeaderTwo>
      <br />
      <Input type="text" placeholder="enter a message" search={true} />
      <ConversationList list={peoples} />
    </div>
  );
};

ConversationMobile.propTypes = {};

export default ConversationMobile;
