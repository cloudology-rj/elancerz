import Image from 'next/image';

import PropTypes from 'prop-types';

import { PreTitle, Bold } from '@/components/global/Text';
import { CardContainer, CardImage, Name, FlexContainer, Position } from './ProfileCardStyles';


const ProfileCard = (props) => {
  return (
    <CardContainer>
      <CardImage
        src="data:image/jpeg;base64,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"
        width="200px"
        height="200px"
      />

      <Name>Charlie Levin</Name>
      <Position>Graphic Designer</Position>
      <Bold>charlielevin23</Bold>
      <br />

      <FlexContainer>
        <div>
          <Image src="/icons/yellow-star.svg" width="42px" height="42px" />
          <Image src="/icons/yellow-star.svg" width="42px" height="42px" />
          <Image src="/icons/yellow-star.svg" width="42px" height="42px" />
          <Image src="/icons/yellow-star.svg" width="42px" height="42px" />
          <Image src="/icons/white-star.svg" width="42px" height="42px" />
        </div>
        <PreTitle>4.5</PreTitle>
      </FlexContainer>
      <br />
      <PreTitle>JOINED ON MAY 23, 2018</PreTitle>

      {/*
       */}
    </CardContainer>
  );
};

ProfileCard.propTypes = {};

export default ProfileCard;
