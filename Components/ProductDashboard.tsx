import React from 'react'
import { CardInfoProduct, ReviewLineChart, TotalRecommentChart, UsagePeriodsChart, TopBrandChart, TopTableChart } from '../constant/chart/ProductChart'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(...registerables);
ChartJS.defaults.scale.grid.display = false;

ChartJS.register(ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
    display: false
});

function FirstRowProductDashboard() {
    return (
        <div className='w-full h-[39vh] flex ml-[2.5vw]'>
            <div className='w-[70%] h-[35vh] bg-white p-4 rounded shadow-md flex'>
                <div className='w-[70%] h-full flex items-center justify-center'>
                    <ReviewLineChart/>
                </div>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <TotalRecommentChart/>
                </div>
            </div>
            <div className='w-[21.5%] ml-9 h-[35vh] bg-white p-4 rounded shadow-md flex'>
                    <TopBrandChart/>
            </div>
        </div>
    )
}

function SecondRowProductDashboard() {
    return (
        <div className='w-full h-[39vh] flex ml-[2.5vw]'>
            <div className='w-[39.5%] h-[37vh] bg-white p-4 rounded shadow-md flex items-end justify-center'>
                <UsagePeriodsChart />
            </div>
            <div className='w-[25%] ml-8 h-[37vh] bg-white p-4 rounded shadow-md'>
                <TopTableChart titleName='Categories' tableData='categories'/>
            </div>
            <div className='w-[25%] ml-8 h-[37vh] bg-white p-4 rounded shadow-md'>
                <TopTableChart titleName='Sub Categories' tableData='subCategories'/>
            </div>
        </div>
    )
}

function ProductDashboard() {
  return (
    <div className='h-[93vh] w-[85vw] bg-gray-200 overflow-x-hidden'>
        <div className='flex flex-col'>
            <CardInfoProduct />
            <FirstRowProductDashboard />
            <SecondRowProductDashboard />
        </div>
    </div>
  )
}

export default ProductDashboard