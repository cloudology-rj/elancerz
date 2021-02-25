import { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';


import { PreTitle, Bold, HeaderTwo } from '@/components/global/Text';
import { CardContainer, FlexContainer, Position, EditCardImage, TextEdit, CardImage } from './ProfileCardStyles';
import data from 'components/search/FilterSearch/data';
import { date } from 'yup/lib/locale';


const Star = (star) => {

  const d = 5
  const y = d - star
  const yStars = []
  const wStars = []

  for (let index = 0; index < star; index++) {
    yStars.push(index)
  }

  for (let index = 0; index < y; index++) {
    wStars.push(index)
  }

  const yRes = yStars.map((key) => (<Image key={key} src="/icons/yellow-star.svg" width="42px" height="42px" />))
  const wRes = wStars.map((key) => (<Image key={key} src="/icons/white-star.svg" width="42px" height="42px" />))

  return (<>{yRes}{wRes}</>)
}



const ProfileCard = ({ img, fullname, title, username, star, rating, joined, onClick }) => {

  const hoverEdit = (x) => {
    onClick != undefined ?
      document.getElementById('editHover').style.opacity = x
      :
      ''
  }

  return (
    <CardContainer>
      <FlexContainer>
        <CardImage
          style={{ display: 'none' }}
          id="dpIMG"
          src={img}
        />
        <EditCardImage
          id="dpIMG2"
          onClick={onClick}
          img={img}
          width="240px"
          height="240px"
          state={onClick}
          onMouseOver={() => hoverEdit(1)}
          onMouseOut={() => hoverEdit(0)}
        >
          <TextEdit id="editHover">
            <Image src="/icons/edit-white.svg" width="28" height="28" />
          </TextEdit>
        </EditCardImage>
      </FlexContainer>



      <HeaderTwo style={{
        alignContent: 'center',
        width: '352',
        lineHeight: fullname.length > 12 || 25 < fullname.length ? 1.2 : '',
        whiteSpace: 'wrap',
        overflowWrap: 'break-word',
        fontSize: fullname.length > 12 || 25 < fullname.length ? 29 : '',
        marginBottom: 12,
        marginTop: 12,
      }}>{fullname}</HeaderTwo>
      <Position>{title}</Position>
      <Bold>{username}</Bold>
      <br />

      <FlexContainer>
        <div>
          {Star(star)}
        </div>
        <PreTitle>{rating}</PreTitle>
      </FlexContainer>
      <br />
      <PreTitle>JOINED ON {joined}</PreTitle>

      {/*
       */}
    </CardContainer >
  );

};

ProfileCard.propTypes = {};

export default ProfileCard;

