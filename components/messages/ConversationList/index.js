import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Person from '../Person/';

import { UnreadTitle } from './ConversationListStyles';

import { ConversationContainer } from '././ConversationListStyles';

import { useRouter } from 'next/router';

const ConversationList = ({ list }) => {
  const router = useRouter();

  const { id } = router.query;
  const [chatList, setchatList] = useState(list);

  const togglePerson = (id) => {
    router.push(`/messages/${id}`);
  };

  useEffect(() => {
    const personSelected = [...chatList];

    personSelected.filter((person) => {
      person.id === parseInt(id)
        ? (person.selected = true)
        : (person.selected = false);
      person.id === parseInt(id) ? (person.unread = false) : person.unread;
      return person;
    });

    setchatList(personSelected);
  }, [id]);

  return (
    <ConversationContainer>
      <UnreadTitle>Unread (4)</UnreadTitle>
      <div>
        {list ? (
          chatList.map((person) => (
            <div
              onClick={() => togglePerson(person.id)}
              key={person.name + person.id}
            >
              <Person {...person} />
            </div>
          ))
        ) : (
          <h1>No Freelancers Found</h1>
        )}
      </div>
    </ConversationContainer>
  );
};

ConversationList.propTypes = {
  list: PropTypes.array,
};

export default ConversationList;
