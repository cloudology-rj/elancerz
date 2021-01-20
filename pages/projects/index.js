import React, { useState } from 'react';
import DashBoardLayout from './DashBoardLayout';
import TopBar from 'components/projects/TopBar';
import Freelancer from "./Freelancer"

import { VIEW } from './Constant'
import Employeer from './Employeer';

const Dashboard = () => {
    const [currentView, setCurrentView] = useState(VIEW.FREELANCER)

  return (
      <DashBoardLayout>
          <TopBar currentView={currentView} setCurrentView={setCurrentView}/>
          {currentView === VIEW.FREELANCER ? <Freelancer /> : <Employeer />}
      </DashBoardLayout>
  )
};

export default Dashboard;
