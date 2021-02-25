import React from 'react';
import PropTypes from 'prop-types';

import ButtonsHeader from '../ButtonsHeader/index';
import ProfileCard from '../../Cards/ProfileCard/ProfileCard';

import { FlexCenter, HeroImage } from './ProfileHeaderStyles';

const ProfileHeader = ({ role, toggle, isPublic, ...props }) => {
  const joinedDate = new Date(props?.created_at);
  return (
    <HeroImage>
      <ButtonsHeader role={role} isPublic={isPublic} toggle={toggle} />

      <FlexCenter>
        <ProfileCard
          img={
            props?.avatar == null || props?.avatar == ''
              ? 'https://via.placeholder.com/500x500.png?text=Profile+Image'
              : props?.avatar
          }
          fullname={
            props?.first_name == null ||
            props?.last_name == null ||
            props?.first_name == '' ||
            props?.last_name == ''
              ? 'First & Last Name'
              : props?.first_name + ' ' + props?.last_name
          }
          title={props?.title}
          username={props?.username}
          star={0}
          rating={0}
          joined={joinedDate.toDateString()}
        />
      </FlexCenter>
    </HeroImage>
  );
};

ProfileHeader.propTypes = {};

export default ProfileHeader;
