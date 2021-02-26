import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Person from '../Person/';

import { UnreadTitle } from './ConversationListStyles';

import { ConversationContainer } from '././ConversationListStyles';

import { useRouter } from 'next/router';

const ConversationList = ({ list, id, login }) => {


  // console.log('people:', list);
  // return null


  const router = useRouter();

  // const { id } = router.query;
  // const [chatList, setchatList] = useState(list);

  const togglePerson = (id) => {
    router.push(`/messages/${id}`);
  };

  // useEffect(() => {
  //   const personSelected = [...chatList];

  //   personSelected.filter((person) => {
  //     person.id === parseInt(id)
  //       ? (person.selected = true)
  //       : (person.selected = false);
  //     person.id === parseInt(id) ? (person.unread = false) : person.unread;
  //     return person;
  //   });

  //   setchatList(personSelected);
  // }, [id]);

  return (
    <ConversationContainer>
      <UnreadTitle>Unread ({list?.length > 0 ? list?.length : 0})</UnreadTitle>
      <div>
        {list ? (
          list.map((person) => (
            <div
              onClick={() => togglePerson(person?.received_by_user?.id)}
              key={person?.received_by_user?.id}
            >
              <Person data={person} id={id} login={login} />
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
