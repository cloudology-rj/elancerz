import Image from 'next/image';

import PropTypes from 'prop-types';

import { PreTitle, Bold } from '@/components/global/Text';
import { CardContainer,FlexBottom, CardImage, FlexContainer } from './ProfileServicesCardStyles';


const ProfileServicesCard = ({serviceImage,serviceName, serviceFee, serviceCompleted }) => {
  return (
    <CardContainer>
      <CardImage
        src={serviceImage}
        width="240px"
        height="240px"
      />
      <FlexContainer>
        <Bold>{serviceName}</Bold>
        <Bold>{serviceFee}</Bold>
      </FlexContainer>
      <FlexBottom>
        <PreTitle>{serviceCompleted}  Services Completed</PreTitle>
      </FlexBottom>
      <br/>
    </CardContainer>
  );
};

ProfileServicesCard.propTypes = {};

export default ProfileServicesCard;
