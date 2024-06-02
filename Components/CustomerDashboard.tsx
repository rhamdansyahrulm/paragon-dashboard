import React from 'react'
import { ReviewLineChart, TotalRecommentChart, UsagePeriodsChart, TopBrandChart, TopTableChart } from '../constant/chart/ProductChart'

import { FaChessKing } from "react-icons/fa";
import { TbBrandAmigo } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdRecommend } from "react-icons/md";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut, Line, Bar } from "react-chartjs-2";

ChartJS.register(...registerables);
ChartJS.defaults.scale.grid.display = false;

ChartJS.register(ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
    display: false
});

function FirstRowCustomerDashboard() {
    return (
        <div className='w-[100%] h-[60vh] flex gap-5 items-center justify-center'>
            <div className='w-[65%] h-[60vh] flex flex-col gap-3'>
                <div className='w-[100%] h-[33vh] bg-white p-4 rounded'></div> 
                <div className='w-[100%] h-[28vh] bg-white p-4 rounded'></div> 
            </div>
            <div className='w-[30%] h-[60vh] bg-white p-4 rounded shadow-md'></div>
        </div>
    )
}

function CustomerDashboard() {
    
  return (
    <div className='h-[93vh] w-[85vw] bg-gray-200 overflow-x-hidden'>
        <div className='flex flex-col items-center justify-center pt-5 gap-5'>
            <FirstRowCustomerDashboard />
        </div>
    </div>
  )
}

export default CustomerDashboard