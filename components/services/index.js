import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderThree, HeaderTwo, Bold, PreTitle } from '@/components/global/Text';

import ServicesCard from '../Cards/ServicesCard/ServicesCard';

import { ButtonPrimary, ButtonSecondary, ButtonTransparent, ButtonDanger } from '@/components/global/Button';
import Dropdown from '@/components/global/Dropdown';
import {
  GridContainer,
  FlexSpaceBetween,
  Paragraphs,
  ModalContainer
} from './ServicesStyles';
import Modal from '@/components/global/Modal';


const options = [
  {
    name: 'Recently updated',
    id: 1,
  },
  {
    name: 'Dollar amount',
    id: 2,
  }
];


const Services = (props) => {

  const router = useRouter();

  const newService = (e) => {
    router.push('/services/new')
  }

  const editService = (e) => {
    // router.push('/services/edit')
  }



  // Modal

  const [modalActive, setModalActive] = useState(false)
  const toggleModal = () => setModalActive(!modalActive)
  const ModalContent = () => {
    return (
      <>
        <HeaderThree className="card-header">Delete service</HeaderThree>
        <br />
        <hr />
        <ModalContainer>
          <Paragraphs>Are you sure you want to delete </Paragraphs>
          <Bold>Logo Design ($50)</Bold>
          <Paragraphs>?</Paragraphs>
        </ModalContainer>
        <ButtonDanger>DELETE</ButtonDanger>
        <ButtonTransparent onClick={toggleModal}>CANCEL</ButtonTransparent>
      </>
    )
  }

  return (
    <GridContainer>
      {/* title and add button */}
      <FlexSpaceBetween>
        <HeaderThree>Services(3)</HeaderThree>
        <ButtonPrimary onClick={newService}>
          ADD
        </ButtonPrimary>
      </FlexSpaceBetween>
      <Dropdown title={'Recently updated'} resetThenSet={()=>{}} list={options} />
      <ServicesCard
        title={'Logo Design'}
        subtitle={'Grahpic Design'}
        fee={'$50'}
        desc={'Rhoncus egestas aliquet in diam eget proin velit. Nulla amet, dolor ultrices pellentesque tristique pellentesque bibendum at sollicitudin. Duis dui, in sem ac, condimentum. Phasellus curabitur mattis egestas tortor. Sit scelerisque dignissim ut dui gravida nunc. Nibh donec duis laoreet at. Tellus dui egestas at pellentesque. Scelerisque lacinia pulvinar in vehicula eget mi eu duis quis. Commodo orci condimentum ante pulvinar venenatis facilisis fermentum dictum viverra. Lectus id semper viverra elit phasellus turpis at.'}
        del={toggleModal}
        edit={editService} />

      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />} />

    </GridContainer>

  );
};



export default Services;
