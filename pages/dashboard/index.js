import React, { useState } from 'react';
import DashBoardLayout from '../../components/dashboard/DashboardLayout/DashBoardLayout';
import TopBar from 'components/dashboard/TopBar';
import Freelancer from "../../components/dashboard/DashboardLayout/Freelancer"

import { VIEW } from '../../components/dashboard/DashboardLayout/Constant'
import Employeer from '../../components/dashboard/DashboardLayout/Employeer';

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
