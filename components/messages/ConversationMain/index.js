import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { HeaderThree, HeaderTwo, Bold, PreTitle } from '@/components/global/Text';

import MessageHeader from '../MessageHeader/';

import Sidebar from '../Sidebar/';

import { MainContainer, MessagesContainer } from './ConversationMainStyles';
import { Column } from 'components/settings/payment-details/paymentStyles';

import ConversationBox from '../ConversationBox/';

import { useQuery } from "react-query";
import { getMessages } from '../../../api/queries';
import styled from 'styled-components';


import { useAuth } from "../../../context/AuthProvider";



const ConversationMain = ({ token, id, route }) => {

  const { user } = useAuth()

  // console.log('token:', token);

  if (user == null) {
    return null
  }
  else {



    const { isLoading, error, data: srv } = useQuery(
      'messagesQuery', () => getMessages(token)
    );



    if (error)
      return (
        <NotFound>
          <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
        </NotFound>
      );


    // console.log(srv?.data);
    // return null

    // const [peoples, setPeoples] = useState(peopleList);
    // const [person, setPerson] = useState(null);

    // useEffect(() => {
    //   const selected = peoples.filter((person) => person.id === parseInt(id));

    //   setPerson(selected[0]);
    // }, [id]);
    const specificConvo = srv?.data?.find(x => x.received_by_user.id == id)

    // console.warn('specificConvo:', specificConvo);





    return (

      <MainContainer>


        <Sidebar peoples={srv?.data} id={id} login={user.id} />
        {srv?.data && id != undefined ? (

          <MessagesContainer>
            <MessageHeader data={specificConvo} id={id} login={user.id} />
            <ConversationBox token={token} getconvo={specificConvo} id={id} route={route} />
          </MessagesContainer>
        ) : (
            <div style={{ background: '#EEFBFB' }}></div>
          )}


      </MainContainer>
    );


  }


};

ConversationMain.propTypes = {};

export default ConversationMain;

export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;
