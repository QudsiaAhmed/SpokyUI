import React from 'react'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/navbar'
import GridBtn from '../../components/GridBtn'
import StandardPlan from '../../components/StandardPlan'
import ChatbotCreditCompo from '../../components/ChatbotCreditCompo'
import ChartGrid from '../../components/ChartGrid'
import Transactionbtn from '../../components/Transactionbtn'
const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <Navbar />
            <GridBtn/>
            <StandardPlan/>
            <ChatbotCreditCompo/>
            <ChartGrid/>
            <Transactionbtn/>
        </>
    )
}

export default Dashboard