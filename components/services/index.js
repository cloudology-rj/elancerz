import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { deleteService, getUserServices } from '../../api/queries';

import { useLocalStorage } from '../../hooks/useLocalStorage';

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


const Services = () => {

  const [token, setToken] = useLocalStorage('elancerztoken', null);

  const { isLoading, error, data: srv } = useQuery(
    'servicesQuery', () => getUserServices(token)
  );

  if (error)
    return (
      <NotFound>
        <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
      </NotFound>
    );


  const router = useRouter();
  const [selectedService, setSelectedService] = useState(0)
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading: isMutating } = useMutation(deleteService)


  const removeService = async (id) => {
    await mutateAsync({ token, id })
    queryClient.invalidateQueries('servicesQuery')
    setModalActive(!modalActive)

  }

  const newService = (e) => {
    router.push("/services/new/")
  }

  const editService = (id) => {
    router.push(`/services/edit/${id}`)
  }


  // Modal

  const [modalActive, setModalActive] = useState(false)

  const toggleModal = (id) => {
    setSelectedService(id)
    setModalActive(!modalActive)
  }
  const ModalContent = () => {


    const service = srv?.find(x => x.id === selectedService);
    // const service = services.find(x => x.id === selectedService);
    try {


      return (
        <>
          <HeaderThree className="card-header">Delete service</HeaderThree>
          <br />
          <FlexLine />
          <ModalContainer>
            <Paragraphs>Are you sure you want to delete </Paragraphs>
            <Bold>&nbsp;{service?.name} (${service?.price})&nbsp;</Bold>
            <Paragraphs>?</Paragraphs>
          </ModalContainer>
          <ButtonDanger onClick={() => removeService(service?.id)}>DELETE</ButtonDanger>
          <ButtonTransparent onClick={() => toggleModal(0)}>CANCEL</ButtonTransparent>
        </>
      );


    } catch (error) {

      return <></>
    }

  }

  return (
    <GridContainer>
      {/* title and add button */}
      <FlexSpaceBetween>
        <HeaderThree>Services({srv?.length})</HeaderThree>
        <ButtonPrimary onClick={newService}>
          <Image src={'/icons/add-white.svg'} width={12.83} height={12.83} />
        &nbsp;
        ADD
      </ButtonPrimary>
      </FlexSpaceBetween>
      <Dropdown title={'Recently updated'} onSetOptions={() => { }} onSetSelected={() => { }} options={options} />

      {srv?.map((data, index) => (
        <ServicesCard
          key={index}
          title={data.name}
          subtitle={'Category Name'}
          fee={'$ ' + data.price}
          desc={data.description}
          del={() => toggleModal(data.id)}
          edit={() => editService(data.id)} />
      ))}


      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />} />

    </GridContainer>

  );
};



export default Services;


export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;
