import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderThree, Bold, PreTitle } from '@/components/global/Text';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import ProfileServicesCard from '../Cards/ProfileServicesCard/ProfileServicesCard';
import { ButtonPrimary, ButtonSecondary, ButtonTransparent } from '@/components/global/Button';
import {
  ProfileContainer,
  BodyContainer,
  Paragraphs,
  ProfileServices,
  FlexBetween,
  FlexCenter,
  ProfileBannerButtons,
  ExitPublicView,
  testData
} from './ProfileStyles';
import Modal from '@/components/global/Modal';


const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url("/images/banner.png");
  height: 480px;
  width:100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding:2em;
`;

const hr = styled.hr`
  background-color:'#EEFBFB'
  border: none;
`

const Profile = (props) => {

  // publicview
  const [isPublic, setIsPublic] = useState(false)
  const toggle = () => setIsPublic(!isPublic);


  // Modal

  const [modalActive, setModalActive] = useState(false)
  const toggleModal = () => setModalActive(!modalActive)
  const  ModalContent = () => {
    return (
      <>
        <HeaderThree className="card-header">Service #1</HeaderThree>
        <br/>
        <hr/>
        <br/>
        <Image
          src='/images/samplemodalimg.png'
          width="400px"
          height="200px"
        />
        <br/>
        <Paragraphs>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ultricies mattis duis id cursus mattis. Lacinia viverra enim egestas pulvinar sit pretium ut. Sed sed eu, ac nulla sed lorem vestibulum, lorem. Imperdiet sodales id nunc sit volutpat.</Paragraphs>
        <br/>
        <FlexBetween>
          <PreTitle>32 Services Completed</PreTitle>
          <HeaderThree>$50</HeaderThree>
        </FlexBetween>
        <br/>
        <ButtonPrimary>GET A QOUTE</ButtonPrimary>
      </>
    )
  }

  // route
  const router = useRouter();
  const editClick = (e) => {
    router.push('/profile/edit')
  }


  return (
    <ProfileContainer>

      <HeroImage>


        {isPublic ?
          <ExitPublicView >
            <ButtonSecondary onClick={toggle}>
              <FlexBetween>
                <Image src='/icons/view-primary.svg' width={20} height={20} />
                &nbsp;&nbsp;EXIT PUBLIC VIEW
              </FlexBetween>
            </ButtonSecondary>

          </ExitPublicView>
          :
          <ProfileBannerButtons>
            <ButtonPrimary onClick={toggle}>
              <FlexBetween>
                <Image src='/icons/view.svg' width={20} height={20} />
              &nbsp;&nbsp;PUBLIC VIEW
            </FlexBetween>
            </ButtonPrimary>
            <ButtonSecondary onClick={editClick}>EDIT PROFILE</ButtonSecondary>
          </ProfileBannerButtons>
        }


        <FlexCenter>
          <ProfileCard />
        </FlexCenter>
      </HeroImage>

      <BodyContainer>
        <HeaderThree>About</HeaderThree>
        <Paragraphs>At fermentum volutpat eget hac erat sed et nunc. Tristique id at nam sit neque, risus sapien turpis cursus. Elementum integer sed dictumst et elementum imperdiet nisl. Nulla arcu enim sed mauris. Eu quam imperdiet ultricies mauris facilisis. Mattis convallis ut dignissim turpis consectetur quam accumsan, lorem nisl. Consequat aliquet eget suscipit non. Lectus cras aliquam maecenas ultricies a scelerisque at.</Paragraphs>
        <HeaderThree>Services (12)</HeaderThree>
      </BodyContainer>

      <ProfileServices>
        {testData.map((data, index) => (
          <div onClick={toggleModal}>
            <ProfileServicesCard
              key={index}
              serviceImage={data.img}
              serviceName={data.name}
              serviceFee={data.fee}
              serviceCompleted={data.num} />
          </div>

        ))}
      </ProfileServices>


      {isPublic ?
        <ButtonPrimary>
          <FlexBetween>
            <Image src='/icons/send-white.svg' width={20} height={20} />
            &nbsp;&nbsp;SEND A MESSAGE
          </FlexBetween>
        </ButtonPrimary>
        :
        <ButtonTransparent>
          <FlexBetween>
            <Image src='/icons/send.svg' width={20} height={20} />
            &nbsp;&nbsp;SEND A MESSAGE
          </FlexBetween>
        </ButtonTransparent>
      }

      <br />

      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent  />} />

    </ProfileContainer>


  );
};



export default Profile;
