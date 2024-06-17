import React from 'react'
import { ReviewLineChart, TotalRecommentChart, UsagePeriodsChart, TopBrandChart, TopTableChart } from '../constant/chart/ProductChart'

import { FaChessKing } from "react-icons/fa";
import { TbBrandAmigo } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdRecommend } from "react-icons/md";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js/auto";
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(...registerables);
ChartJS.defaults.scale.grid.display = false;

ChartJS.register(ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
    display: false
});

type SummaryCardProps = {
    title: string,
    total: number
}


function SummaryCard({ title, total, imgLogo }: { title: string, total: string, imgLogo:any }) {
    return (
        <div className='h-[100px] w-[250px] bg-white p-4 rounded shadow-md flex'>
            <div className='h-full w-20 flex items-center justify-center rounded-full'>
                {imgLogo}
            </div>
            <div className='h-full'>
                <p className='text-[20px] font-bold mt-1'>{total}</p>
                <p className='text-md text-gray-600'>{title}</p>
            </div>
        </div>
    );
}

function FirstRowProductDashboard() {
    const totalRecommentVal = [400, 50, 100]
    const totalReviewVal = [67, 80, 100, 20, 33, 55, 44, 77, 55, 40, 70, 80]
    const topBrandVal = [20, 14, 3, 5]

    return (
        <div className='w-full h-[39vh] flex ml-[2.5vw]'>
            <div className='w-[70%] h-[35vh] bg-white p-4 rounded shadow-md flex'>
                <div className='w-[70%] h-full flex items-center justify-center'>
                    <ReviewLineChart totalReview={totalReviewVal}/>
                </div>
                <div className='w-[30%] h-full flex items-center justify-center'>
                    <TotalRecommentChart TotalRecomment={totalRecommentVal}/>
                    <p className='mt-[-15px] text-[18px] font-bold text-gray-600 absolute'>Most People</p>
                    {totalRecommentVal[0] > totalRecommentVal[1] ? (
                        <>
                        <p className='mt-[25px] text-[18px] font-bold absolute text-blue-400'>Recommend</p>
                        <p className='mt-[65px] text-[12px] font-bold absolute text-gray-600'>({totalRecommentVal[0]} People)</p>
                        </>
                    ) : (
                        <>
                        <p className='mt-[25px] text-[18px] font-bold absolute text-red-400'>Not Recommend</p>
                        <p className='mt-[65px] text-[12px] font-bold absolute text-gray-600'>({totalRecommentVal[1]} People)</p>
                        </>
                    )}
                </div>
            </div>
            <div className='w-[21.5%] ml-9 h-[35vh] bg-white p-4 rounded shadow-md flex'>
                    <TopBrandChart totalTopBrand={topBrandVal}/>
            </div>
        </div>
    )
}

function SecondRowProductDashboard() {
      
      const TopCategories = [
        ['Frozen asd', 159],
        ['Ice cream', 237, ],
        ['Ice sandwich', 238],
        ['Ice cream sandwich', 239],
        ['Eclair', 262],
      ];

      const TopSubCategories = [
        ['Frozen yoghurt', 159],
        ['Ice cream', 237, ],
        ['Ice sandwich', 238],
        ['Ice cream sandwich', 239],
        ['Eclair', 262],
      ];

    return (
        <div className='w-full h-[39vh] flex ml-[2.5vw]'>
            <div className='w-[39.5%] h-[37vh] bg-white p-4 rounded shadow-md flex items-end justify-center'>
                <UsagePeriodsChart />
            </div>
            <div className='w-[25%] ml-8 h-[37vh] bg-white p-4 rounded shadow-md'>
                <TopTableChart titleName='Categories' tableData={TopCategories}/>
            </div>
            <div className='w-[25%] ml-8 h-[37vh] bg-white p-4 rounded shadow-md'>
                <TopTableChart titleName='Sub Categories' tableData={TopSubCategories}/>
            </div>
        </div>
    )
}

function ProductDashboard() {
  const summaryCardImg = {
    "brands" : <TbBrandAmigo size={50} className='text-purple-400'/>,
    "productItems" : <FaChessKing size={50} className='text-blue-400'/>,
    "totalReviews" : <MdReviews size={50} className='text-green-400'/>,
    "averageStar" : <MdStar size={50} className='text-yellow-500'/>,
    "recommandations" : <MdRecommend size={50} className='text-orange-500'/>
  }
    
  return (
    <div className='h-[93vh] w-[85vw] bg-gray-200 overflow-x-hidden'>
        <div className='flex flex-col'>
            <div className='w-full h-[15vh] flex justify-evenly items-center start'>
                <SummaryCard title="Brands" total="123" imgLogo= {summaryCardImg.brands}/>
                <SummaryCard title="Product Items" total="123" imgLogo= {summaryCardImg.productItems}/>
                <SummaryCard title="Total Reviews" total="123" imgLogo= {summaryCardImg.totalReviews}/>
                <SummaryCard title="Average Star" total="4.2 / 5" imgLogo= {summaryCardImg.averageStar}/>
                <SummaryCard title="Recommandations" total="123" imgLogo= {summaryCardImg.recommandations}/>
            </div>
            <FirstRowProductDashboard />
            <SecondRowProductDashboard />
        </div>
    </div>
  )
}

export default ProductDashboard