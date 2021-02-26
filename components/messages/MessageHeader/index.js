import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { HeaderThree, PreTitle } from '@/components/global/Text';
import { ButtonDanger, ButtonTransparent } from '@/components/global/Button';
import Modal from '@/components/global/Modal';
import SettingsDropdown from '@/components/global/SettingsDropdown';

import { Flex } from '../../../styles/reusableStyles';
import { IsMobileContext } from '../../../context/IsMobile';

import {
  Job,
  HeaderContainer,
  Status,
  FlexLine,
  Paragraphs,
  Name,
  ArrowLeft,
} from './MessageHeaderStyles';

const options = [
  {
    id: 1,
    name: 'View Projects',
  },
  {
    id: 2,
    name: 'Delete Conversation',
  },
];

const MessageHeader = ({ data, id, login }) => {


  // console.warn(data);


  const [modalActive, setModalActive] = useState(false);
  const [isMobile] = useContext(IsMobileContext);

  const router = useRouter();


  const reciever = data?.received_by_user?.first_name + ' ' + data?.received_by_user?.last_name

  const creator = data?.created_by_user?.first_name + ' ' + data?.created_by_user?.last_name
  // console.warn(reciever);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };

  const ModalContent = () => {
    return (
      <>
        <HeaderThree className="card-header">Delete conversation</HeaderThree>
        <br />
        <FlexLine />
        <br />
        <br />
        <Paragraphs>
          Are you sure you want to delete this conversation?
        </Paragraphs>
        <br />
        <br />
        <ButtonDanger
          className="close-account-btn"
          onClick={() => setModalActive(!modalActive)}
        >
          {' '}
          DELETE
        </ButtonDanger>
        <ButtonTransparent onClick={() => setModalActive(!modalActive)}>
          CANCEL
        </ButtonTransparent>
      </>
    );
  };

  // return null
  return (
    <HeaderContainer>
      {isMobile ? (
        <>
          <ArrowLeft onClick={() => router.push('/messages')} />

          <div>
            <Flex gap="7px">
              <Status />
              <Name>{login == data?.received_by_user?.id ? creator : reciever}</Name>
              <Job>{'Job title'}</Job>
            </Flex>
            <PreTitle>6:29 PM (UTC + 07:30)</PreTitle>
          </div>
        </>
      ) : (
          <Flex
            gap="20px"
            style={{ justifyContent: 'space-between', display: 'flex' }}
          >
            <>
              <Flex gap="7px">
                <Status />
                <Name>{login == data?.received_by_user?.id ? creator : reciever}</Name>
              </Flex>
              <Job>{'Job Title'}</Job>
            </>
          </Flex>
        )}

      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        content={<ModalContent />}
      />

      <Flex gap="20px">
        {!isMobile && <PreTitle>6:29 PM (UTC + 07:30)</PreTitle>}

        <SettingsDropdown options={options} onSetOptions={toggleModal} />
      </Flex>
    </HeaderContainer>
  );
};

// MessageHeader.propTypes = {
//   status: PropTypes.bool,
//   job: PropTypes.string,
//   name: PropTypes.string,
//   time: PropTypes.string,
// };

export default MessageHeader;
