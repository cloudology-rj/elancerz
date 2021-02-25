import Image from 'next/image';
import Router from 'next/router';
import PropTypes from 'prop-types';

import { PreTitle } from '@/components/global/Text';
import {
  CardContainer,
  CardImage,
  Name,
  FlexContainer,
  ImageContainer,
  ImageOverlay,
} from './FreelancerCardStyles';

import YellowStar from '../../../public/icons/yellow-star.svg';
import WhiteStar from '../../../public/icons/white-star.svg';

const FreelancerCard = ({
  fullWidth,
  id,
  first_name,
  last_name,
  avatar,
  address,
  ...props
}) => {


  return (
    <CardContainer
      fullWidth={fullWidth}
      onClick={() => Router.push(`/profile/view/${id}`)}
    >
      <ImageContainer>
        <CardImage
          src={avatar ? avatar : `/images/profile.png`}
          width="127px"
          height="127px"
        />
        <ImageOverlay />
      </ImageContainer>
      <Name>
        {first_name} {last_name}
      </Name>
      <PreTitle>{address ? address : 'No Address'}</PreTitle>
      <FlexContainer>
        <div>
          <YellowStar />
          <YellowStar />
          <YellowStar />
          <YellowStar />
          <WhiteStar />
        </div>
        <PreTitle>4.75</PreTitle>
      </FlexContainer>

      {/*
       */}
    </CardContainer>
  );
};

FreelancerCard.propTypes = {};

export default FreelancerCard;
