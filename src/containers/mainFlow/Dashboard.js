import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/navbar';
import GridBtn from '../../components/GridBtn';
import StandardPlan from '../../components/StandardPlan';
import ChatbotCreditCompo from '../../components/ChatbotCreditCompo';
import ChartGrid from '../../components/ChartGrid';
import Transactionbtn from '../../components/Transactionbtn';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 1200);

  const dashboardStyles = {
    height: '100%',
    marginLeft: '18rem',
    width: 'calc(100% - 18rem)',
  };

  if (window.innerWidth <= 1200) {
    dashboardStyles.marginLeft = '0';
    dashboardStyles.width = '100%';
  }

  return (
    <>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navbar collapsed={collapsed} />
      <Box style={dashboardStyles}>
        <Container style={{ maxWidth: '1400px', marginTop: '2rem' }}>
          <GridBtn />
          <StandardPlan />
          <ChatbotCreditCompo />
          <ChartGrid />
          <Transactionbtn />
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
