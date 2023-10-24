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
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 800);

  return (
    <>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Navbar />
      <Box style={{ height: '100%', marginLeft:collapsed?'130px': '18rem', width: collapsed?'calc(100% - 130px)'  :'calc(100% - 18rem)' }}>
        <Container style={{ padding: 0, maxWidth: '1400px' }} sx={{ marginTop: '6rem' }}>
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
