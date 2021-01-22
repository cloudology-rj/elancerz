import React, { useState } from 'react';
import DashBoardLayout from ' ../../components/projects/DashBoardLayout';
import TopBar from '../../components/projects/TopBar/';
import Freelancer from "../../components/projects/Freelancer"

import { VIEW } from '../../components/projects/Constant'
import Employeer from '../../components/projects/Employeer';

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
