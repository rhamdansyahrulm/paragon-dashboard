import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { AgeHijabChart, SkinToneBar, SkinTypeChart, CustomerReviewChart, TopCustomerConcern } from '../constant/chart/CustomerChart'

ChartJS.register(...registerables);
ChartJS.defaults.scale.grid.display = false;

ChartJS.register(ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
    display: false
});

function FirstRowCustomerDashboard() {
    return (
        <div className='w-[100%] h-[70vh] flex gap-5 items-center justify-center'>
            <div className='w-[65%] h-[70vh] flex flex-col gap-3'>
                <div className='w-[100%] h-[35vh] bg-white p-4 rounded shadow-md'>
                </div> 
                <div className='w-[100%] h-[35vh] bg-white p-4 rounded shadow-md flex flex-row'>
                    <div className='h-[100%] w-[60%]'><SkinToneBar /></div>
                    <div className='h-[100%] w-[40%] flex items-center justify-center'><SkinTypeChart /></div>
                </div> 
            </div>
            <div className='w-[30%] h-[70vh] bg-white p-4 rounded shadow-md flex items-center justify-center'>
            < AgeHijabChart />
            </div>
        </div>
    )
}

function SecondRowCustomerDashboard() {
    return (
        <div className='w-[100%] h-[40vh] flex gap-5 items-center justify-center'>
            <div className='w-[47.5%] h-[40vh] bg-white p-4 rounded shadow-md'>
                <CustomerReviewChart />
            </div>
            <div className='w-[47.5%] h-[40vh] bg-white p-4 rounded shadow-md flex flex-row gap-5'>
                <TopCustomerConcern titleName='Hair Concern' tableData='hairConcern'/>
                <TopCustomerConcern titleName='Body Concern' tableData='bodyConcern'/>
                <TopCustomerConcern titleName='Skin Concern' tableData='skinConcern'/>
            </div>
        </div>
    )
}

function CustomerDashboard() {
    
  return (
    <div className='h-[93vh] w-[85vw] bg-gray-200 overflow-x-hidden'>
        <div className='flex flex-col items-center justify-center pt-5 gap-5 pb-5'>
            <FirstRowCustomerDashboard />
            <SecondRowCustomerDashboard />
        </div>
    </div>
  )
}

export default CustomerDashboard