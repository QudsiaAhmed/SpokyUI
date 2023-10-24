import React from 'react'
import MyChatBotNavbar from '../../components/MyChatBot/MyChatBotNavbar';
import Sidebar from '../Sidebar';
import MyChatBotPlan from '../../components/MyChatBot/MyChatBotPlan';
import Filtertion from '../../components/MyChatBot/CardFilteration'
const MyChatBot = () => {
  return (
    <>
      <MyChatBotNavbar/>
      <Sidebar/>
      <MyChatBotPlan/>
      <Filtertion/>
    </>
  )
}

export default MyChatBot
