import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderThree, Bold, PreTitle } from '@/components/global/Text';
import ProfileCard from '../Cards/ProfileCard/ProfileCard';
import ProfileServicesCard from '../Cards/ProfileServicesCard/ProfileServicesCard';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
  ButtonIcon
} from '@/components/global/Button';
import {
  FlexLine,
  ProfileContainer,
  BodyContainer,
  Paragraphs,
  ProfileServices,
  FlexBetween,
  FlexCenter,
  ProfileBannerButtons,
  ExitPublicView,
  FlexNav,
  testData,
} from './ProfileStyles';
import Modal from '@/components/global/Modal';

import ReviewCard from '../Cards/ReviewCard/ReviewCard';

const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('/images/banner.png');
  height: 480px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding:2em;

  
  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin: 0 1.5em 9em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    margin: 0 1.5em 12em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    margin: 0 1.5em 12em 1.5em;
  }


`;


const Profile = (props) => {
  // publicview
  const [isPublic, setIsPublic] = useState(false);
  const toggle = () => setIsPublic(!isPublic);

  // Modal

  const [modalActive, setModalActive] = useState(false)
  const toggleModal = () => setModalActive(!modalActive)
  const ModalContent = () => {
    return (
      <>
        <HeaderThree className="card-header">Service #1</HeaderThree>
        <br />
        <FlexLine/>
        <br />
        <Image
          src='/images/samplemodalimg.png'
          width="400px"
          height="200px"
        />
        <br />
        <Paragraphs>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat ultricies mattis duis id cursus mattis. Lacinia viverra enim egestas pulvinar sit pretium ut. Sed sed eu, ac nulla sed lorem vestibulum, lorem. Imperdiet sodales id nunc sit volutpat.</Paragraphs>
        <br />
        <FlexBetween>
          <PreTitle>32 Services Completed</PreTitle>
          <HeaderThree>$50</HeaderThree>
        </FlexBetween>
        <br />
        <ButtonPrimary>GET A QOUTE</ButtonPrimary>
      </>
    );
  };

  // route
  const router = useRouter();
  const editClick = (e) => {
    router.push('/profile/edit');
  };


  const prev = () => {
    const DivServ = document.getElementById('servicesScroll')

    DivServ.scrollBy({
      top: 0,
      left: -((DivServ.offsetWidth / 3) + (DivServ.offsetWidth / 3)),
      behavior: "smooth"
    })
  }

  const next = () => {
    const DivServ = document.getElementById('servicesScroll')

    DivServ.scrollBy({
      top: 0,
      left: ((DivServ.offsetWidth / 3) + (DivServ.offsetWidth / 3)),
      behavior: "smooth"
    })
  }

  const scroll = () => {
    const slider = document.getElementById('servicesScroll')
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.6; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      
    });
  }

  return (
    <ProfileContainer>
      <HeroImage>
        {isPublic ? (
          <ExitPublicView>
            <ButtonSecondary onClick={toggle}>
              <FlexBetween>
                <Image src="/icons/view-primary.svg" width={20} height={20} />
                &nbsp;&nbsp;EXIT PUBLIC VIEW
              </FlexBetween>
            </ButtonSecondary>
          </ExitPublicView>
        ) : (
            <ProfileBannerButtons>
              <ButtonPrimary onClick={toggle}>
                <FlexBetween>
                  <Image src="/icons/view.svg" width={20} height={20} />
                &nbsp;&nbsp;PUBLIC VIEW
              </FlexBetween>
              </ButtonPrimary>
              <ButtonSecondary onClick={editClick}>EDIT PROFILE</ButtonSecondary>
            </ProfileBannerButtons>
          )}

        <FlexCenter>
          <ProfileCard />
        </FlexCenter>
      </HeroImage>

      <BodyContainer>
        <HeaderThree>About</HeaderThree>
        <Paragraphs>
          At fermentum volutpat eget hac erat sed et nunc. Tristique id at nam
          sit neque, risus sapien turpis cursus. Elementum integer sed dictumst
          et elementum imperdiet nisl. Nulla arcu enim sed mauris. Eu quam
          imperdiet ultricies mauris facilisis. Mattis convallis ut dignissim
          turpis consectetur quam accumsan, lorem nisl. Consequat aliquet eget
          suscipit non. Lectus cras aliquam maecenas ultricies a scelerisque at.
        </Paragraphs>

        <FlexBetween>
          <HeaderThree>Services (12)</HeaderThree>
          <FlexNav>
            <ButtonIcon onClick={prev} >
              <Image src={'/icons/prev-primary.svg'} width={12} height={14} />
            </ButtonIcon>
        &emsp;
        <ButtonIcon onClick={next} >
              <Image src={'/icons/next-primary.svg'} width={12} height={14} />
            </ButtonIcon>
          </FlexNav>
        </FlexBetween>


      </BodyContainer>



      <ProfileServices id="servicesScroll"  onMouseEnter={scroll}>
        {testData.map((data, index) => (
            <ProfileServicesCard
              key={index}
              serviceImage={data.img}
              serviceName={data.name}
              serviceFee={data.fee}
              serviceCompleted={data.num}
              toggle={toggleModal}
            />
        ))}
      </ProfileServices>


      {isPublic ? (
        <ButtonPrimary>
          <FlexBetween>
            <Image src="/icons/send-white.svg" width={20} height={20} />
            &nbsp;&nbsp;SEND A MESSAGE
          </FlexBetween>
        </ButtonPrimary>
      ) : (
          <ButtonTransparent>
            <FlexBetween>
              <Image src="/icons/send.svg" width={20} height={20} />
            &nbsp;&nbsp;SEND A MESSAGE
          </FlexBetween>
          </ButtonTransparent>
        )}

      <br />

      <BodyContainer>
        <HeaderThree>Reviews (7)</HeaderThree>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </BodyContainer>

      <ButtonPrimary>MORE</ButtonPrimary>

      <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />} />

    </ProfileContainer>
  );
};

export default Profile;
