import React, { useState } from 'react';

import { 
    TopBarWrapper,  
    Heading, 
    Tab,
    Button
} from './TopBarStyles'

import { VIEW } from '../../../pages/dashboard/Constant'

const TopBar = ({ currentView, setCurrentView }) => {
 
  return (
        <TopBarWrapper>
          <Heading>Active Projects(2)</Heading>
          <Tab>
                <Button 
                    active={ currentView === VIEW.FREELANCER ? true : false } 
                    onClick={()=> setCurrentView(VIEW.FREELANCER)}>
                    Freelancer
                </Button>
                <Button
                    active={ currentView === VIEW.EMPLOYER ? true : false  } 
                    onClick={()=> setCurrentView(VIEW.EMPLOYER)}>
                    Employeer
                </Button>
          </Tab>
        </TopBarWrapper>
  )
};

export default TopBar;
