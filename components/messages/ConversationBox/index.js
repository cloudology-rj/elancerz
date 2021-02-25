import PropTypes from 'prop-types';
import { useState, useReducer } from 'react';
import Input from '@/components/global/Input';
import { HeaderTwo } from '@/components/global/Text';

import ServiceCard from '../../Cards/ProfileServicesCard/ProfileServicesCard';


import ConversationList from '../ConversationList/';
import MessageHeader from '../MessageHeader/';
import BottomSearchbar from '../BottomSearchbar/';

import {
  MainContainer,
  MessagesContainer,
  SidebarContainer,
  StickyContainer,
  MessagesConvo,
  MessageLeft,
  MessageLeftWrapper,
  MessageRight,
  MessageRightWrapper,
  Messages,
} from './ConversationMainStyles';
import { Column } from 'components/settings/payment-details/paymentStyles';



const ConversationBox = ({ getconvo, id }) => {


  const [convo, setconvo] = useState(getconvo)



  const sendMessage = () => {
    let msg = document.getElementById("msg-input").value
    let cleanMsg = {
      // message: msg.toString(),
      message: msg,
      fromId: 3,
      fromName: 'Charlie Levin',
      toId: 1,
      roomId: id
    }

    // let xx = [convo]

    if (msg != "") {
      setconvo([...convo, cleanMsg])
      // console.log('log: ', [{ ...convo, ...cleanMsg }]);
      document.getElementById("msg-input").value = ""
    }

  }


  return (
    <>
      <MessagesConvo>
        {/* <Conversation /> */}
        <Messages>
          {convo.map((e, key) => {

            return id == e.roomId ?

              id == e.fromId ?
                <MessageLeftWrapper key={key}>
                  <MessageLeft>{e.message}</MessageLeft>
                </MessageLeftWrapper>
                :
                <MessageRightWrapper key={key}>
                  <MessageRight>{e.message}</MessageRight>
                </MessageRightWrapper>

              : <span key={key}></span>

          })}

        </Messages>
      </MessagesConvo>

      <BottomSearchbar onClick={sendMessage} />

    </>
  );
};

ConversationBox.propTypes = {};

export default ConversationBox;
