import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { HeaderThree, SmallText, PreTitle } from '@/components/global/Text';
import { ButtonPrimary, ButtonSecondary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import TextArea from '@/components/global/TextArea';
import ProfileCard from '../../Cards/ProfileCard/ProfileCard';
import ProfileServicesCard from '../../Cards/ProfileServicesCard/ProfileServicesCard';
import {
  ProfileContainer,
  ProfileBanner,
  FormContainer,
  // HeroImage,
  FlexBetween,
  FlexCenter,
  ProfileServices,
  ProfileServicesItem,
  ProfileServicesContainer,
  FlexName,
  FlexHalf,
  DraggingArea
} from './EditProfileStyles';
import eFetch from '../../../helpers/fetch';

import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';


// static serviecs
const services = [
  {
    img: 'http://placekitten.com/500/500',
    type: 'Service static 1',
    rate: '$50',
    item: 'qwe',
    num: '12'
  }
]


const EditProfile = ({ user, token }) => {

  const router = useRouter();
  const [fullName, setfullName] = useState(user?.first_name + ' ' + user?.last_name)
  const [firstName, setfirstName] = useState(user?.first_name)
  const [lastName, setlastName] = useState(user?.last_name)
  const [userName, setuserName] = useState(user?.username)
  const [userTitle, setuserTitle] = useState(user?.title)
  const [userAbout, setuserAbout] = useState(user?.about)
  const [joinedDate, setjoinedDate] = useState(new Date(user?.created_at))
  const [card, setCard] = useState(user?.services);


  const gotoServices = () => {
    router.push('/services/new')
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCard(arrayMove(card, oldIndex, newIndex));
  };

  const SortableItem = SortableElement(user => {
    const { value: item } = user;
    return (
      <ProfileServicesItem>
        <ProfileServicesCard
          // serviceImage={item.img}
          serviceImage={'https://via.placeholder.com/500x500.png?text=Service+Image'}
          serviceName={item.name}
          serviceFee={'$' + item.price}
          serviceCategory={'Category Name'}
          // serviceCompleted={item.num} 
          serviceCompleted={0}
        />
      </ProfileServicesItem>
    );
  });

  const SortableList = SortableContainer(user => {
    return (
      <ProfileServices>
        {user.items.map((item, index) => (
          <SortableItem
            id={"item_" + index}
            key={`item - ${index + 1} `}
            index={index}
            value={item}
          />
        ))}
      </ProfileServices>
    );
  });

  // change bg local storage
  const bg = localStorage.getItem('el-bg');
  const [_bgimg, set_bgimg] = useState(bg)
  const [_Oldbgimg, set_Oldbgimg] = useState(bg)

  const changeBG = (data) => {

    let mybg = data.target.files[0]

    if (mybg) {
      const bgreader = new FileReader()
      // const img = document.getElementById("bgIMG");
      // const img2 = document.getElementById("dpIMG2");

      bgreader.onload = e => {
        localStorage.setItem('el-bg', e.target.result)
        set_bgimg(e.target.result)
      }
      bgreader.readAsDataURL(mybg);
    }

  }

  // change dp
  const [_img, set_img] = useState(user?.avatar)
  const changeMyDP = (data) => {

    let dp = data.target.files[0]

    if (dp) {
      const reader = new FileReader()
      const img = document.getElementById("dpIMG");
      const img2 = document.getElementById("dpIMG2");

      reader.onload = e => {
        img.src = e.target.result;
        set_img(e.target.result)
      }
      reader.readAsDataURL(dp);
    }

  }




  // function
  const saveChanges = async () => {

    firstName == null || firstName == '' ? null : firstName
    lastName == null || lastName == '' ? null : lastName
    _img == null || _img == 'https://via.placeholder.com/500x500.png?text=Profile+Image' ? null : _img

    const data = {
      "first_name": firstName,
      "last_name": lastName,
      "username": userName,
      "title": userTitle,
      "about": userAbout,
      "avatar": _img
      // "avatar": new Blob([inputUploadDP.value], { type: 'image/jpeg' })
    }

    await eFetch(`/profile/${user?.id}`, 'PUT', token, data)
    router.push('/profile')

  }



  const cancelClick = async (e) => {
    await localStorage.setItem('el-bg', _Oldbgimg)
    router.push('/profile')
  }


  const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url("${_bgimg}");
    height: 754px;
    width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding:1.5em;
`


  return (
    <ProfileContainer>
      <HeroImage>
        <ProfileBanner>
          <ButtonPrimary onClick={saveChanges}>
            <FlexBetween>
              <Image src='/icons/check-white.svg' width={20} height={20} />
              &nbsp;&nbsp;SAVE CHANGES
          </FlexBetween>
          </ButtonPrimary>
          <ButtonSecondary onClick={cancelClick}>CANCEL</ButtonSecondary>
        </ProfileBanner>

        <FlexCenter>
          <ProfileCard
            img={user?.avatar == null || user?.avatar == "" ? 'https://via.placeholder.com/500x500.png?text=Profile+Image' : _img}
            fullname={user?.first_name == null || user?.last_name == null ? 'First & Last Name' : firstName + ' ' + lastName}
            title={userTitle}
            username={userName}
            star={0}
            rating={0}
            joined={joinedDate.toDateString()}
            onClick={() => document.getElementById("dpInput").click()}
          />
        </FlexCenter>
        <br />
        <ButtonPrimary onClick={() => document.getElementById("bgInput").click()}>
          <FlexBetween>
            <Image src='/icons/edit-white.svg' width={20} height={20} />
            &nbsp;&nbsp;CHANGE COVER IMAGE
          </FlexBetween>
        </ButtonPrimary>

      </HeroImage>


      <div if="formBG" style={{ display: 'none' }}>
        <input onClick={e => (e.target.value = null)} onChange={e => changeMyDP(e)} id="dpInput" name="dpInput" type="file" accept=".jpeg, .png, .jpg" />
        <input onClick={e => (e.target.value = null)} onChange={e => changeBG(e)} id="bgInput" name="bgInput" type="file" accept=".jpeg, .png, .jpg" />
      </div>



      <FormContainer>
        <FlexName>
          <FlexHalf>
            <SmallText>First Name</SmallText>
            <Input onChange={e => setfirstName(e.target.value)} defaultValue={user?.first_name} />
          </FlexHalf>
          <FlexHalf>
            <SmallText>Last Name</SmallText>
            <Input onChange={e => setlastName(e.target.value)} defaultValue={user?.last_name} />
          </FlexHalf>
        </FlexName>

        <SmallText>Title</SmallText>
        <Input onChange={e => setuserTitle(e.target.value)} defaultValue={user?.title} />

        <br />
        <SmallText>Username</SmallText>
        <Input onChange={e => setuserName(e.target.value)} defaultValue={user?.username} />

        <br />
        <SmallText>About</SmallText>
        <TextArea rows="10" cols="33" onChange={e => setuserAbout(e.target.value)} defaultValue={user?.about} />
        <br />

        {/* <HeaderThree>Services ({user.services.length})</HeaderThree> */}

        <FlexBetween style={{ alignItems: 'center' }}>
          <HeaderThree>Services ({services.length})</HeaderThree>
          <ButtonPrimary onClick={gotoServices}>ADD NEW SERVICES</ButtonPrimary>
        </FlexBetween>
        <DraggingArea>
          <Image src='/icons/info-gray.svg' width={20} height={20} />
          &nbsp;&nbsp;
          <PreTitle> DRAG CARDS TO CHANGE ORDER</PreTitle>
        </DraggingArea>

      </FormContainer>


      <ProfileServicesContainer>
        <ProfileServices>
          <SortableList
            items={card}
            onSortEnd={onSortEnd}
            axis="xy"
          />
        </ProfileServices>
      </ProfileServicesContainer>
    </ProfileContainer >
  );
};

export default EditProfile;
