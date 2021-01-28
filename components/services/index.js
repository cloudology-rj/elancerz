import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HeaderThree, HeaderTwo, Bold, PreTitle } from '@/components/global/Text';

import ServicesCard from '../Cards/ServicesCard/ServicesCard';

import { ButtonPrimary, ButtonSecondary, ButtonTransparent, ButtonDanger } from '@/components/global/Button';
import Dropdown from '@/components/global/Dropdown';
import {
  GridContainer,
  FlexSpaceBetween,
  Paragraphs,
  ModalContainer,
  FlexLine
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

const services = [
  {
    id: 1,
    name: 'Logo Design',
    subtitle:'GRAPHIC DESIGN',
    fee:'50',
    desc:'Rhoncus egestas aliquet in diam eget proin velit. Nulla amet, dolor ultrices pellentesque tristique pellentesque bibendum at sollicitudin. Duis dui, in sem ac, condimentum. Phasellus curabitur mattis egestas tortor. Sit scelerisque dignissim ut dui gravida nunc. Nibh donec duis laoreet at. Tellus dui egestas at pellentesque. Scelerisque lacinia pulvinar in vehicula eget mi eu duis quis. Commodo orci condimentum ante pulvinar venenatis facilisis fermentum dictum viverra. Lectus id semper viverra elit phasellus turpis at.'
  },
  {
    id: 2,
    name: 'Landing Page Design',
    subtitle:'UI/UX DESIGN',
    fee:'250',
    desc:'Lectus venenatis libero massa pharetra, integer lectus amet ridiculus. Nulla euismod pretium et sed suspendisse in feugiat. Dui in lectus sollicitudin dictumst senectus vitae gravida. Lorem ut eget malesuada odio velit, varius odio. Ac gravida tortor nunc bibendum vestibulum. Volutpat nibh massa, urna aliquet velit tellus quisque non. Aliquet dolor, viverra ac, morbi.Arcu ultricies a penatibus pellentesque ac eget a diam. Ipsum pellentesque aliquet urna sem. Nullam velit dolor diam varius felis neque.'
  },
  {
    id: 3,
    name: 'Mockups and Prototypes',
    subtitle:'UI/UX DESIGN',
    fee:'400',
    desc:'Diam metus sed lectus tristique nullam pellentesque sit. Habitasse ornare platea dolor praesent. Tincidunt ut aliquet eget pulvinar egestas. Purus augue volutpat accumsan interdum eu, nisi, integer vel urna. Lacinia erat eu a libero egestas viverra sed. Id sed mauris, quam sit consequat sit sit. Erat est pretium parturient malesuada neque nisl elementum urna, sapien. A, sem a nisi, sed nisl eget mauris augue vitae. Sed a lectus.'
  }
];


const Services = (props) => {

  const router = useRouter();

  const newService = (e) => {
    router.push('/services/new')
  }

  const editService = (e) => {
    router.push('/services/edit')
  }




  // Modal

  const [modalActive, setModalActive] = useState(false)
  const toggleModal = () => setModalActive(!modalActive)
  const ModalContent = () => {
    return (
      <>
        <HeaderThree className="card-header">Delete service</HeaderThree>
        <br />
        <FlexLine/>
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
          <Image src={'/icons/add-white.svg'} width={12.83} height={12.83} />
          &nbsp;
          ADD
        </ButtonPrimary>
      </FlexSpaceBetween>
      <Dropdown title={'Recently updated'} resetThenSet={() => { }} list={options} />
      {services.map((data, index) => (
        <ServicesCard
        key={index}
        title={data.name}
        subtitle={data.subtitle}
        fee={'$ '+data.fee}
        desc={data.desc}
        del={toggleModal}
        edit={editService} />
      ))}
      

      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />} />

    </GridContainer>

  );
};



export default Services;
