import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { HeaderThree,HeaderTwo, Bold, PreTitle } from '@/components/global/Text';

import ServicesCard from '../Cards/ServicesCard/ServicesCard';

import { ButtonPrimary, ButtonSecondary, ButtonTransparent } from '@/components/global/Button';
import Dropdown from '@/components/global/Dropdown';
import {
  GridContainer,
  FlexSpaceBetween,
  FlexRow
} from './ServicesStyles';
import Modal from '@/components/global/Modal';



const Services = (props) => {

  return (
    <GridContainer>
      {/* title and add button */}
      <FlexSpaceBetween>
        <HeaderThree>Services(3)</HeaderThree>
        <ButtonPrimary>
          ADD
        </ButtonPrimary>        
      </FlexSpaceBetween>
      <Dropdown list={['1','2']}/>
      <ServicesCard  />
    </GridContainer>
  );
};



export default Services;
