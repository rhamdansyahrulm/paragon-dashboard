import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut, Line, Bar } from "react-chartjs-2";

import { FaChessKing } from "react-icons/fa";
import { TbBrandAmigo } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { MdRecommend } from "react-icons/md";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

ChartJS.register(...registerables);
ChartJS.defaults.scale.grid.display = false;

ChartJS.register(ChartDataLabels);
ChartJS.defaults.set('plugins.datalabels', {
    display: false
});

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

function CardInfoProduct() {
  const summaryCardImg = [
    <TbBrandAmigo size={50} className='text-purple-400'/>,
    <FaChessKing size={50} className='text-blue-400'/>,
    <MdReviews size={50} className='text-green-400'/>,
    <MdStar size={50} className='text-yellow-500'/>,
    <MdRecommend size={50} className='text-orange-500'/>    
  ]


  const [cardInfoProductVal, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/cardInfoProduct").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

  return (
    <div className='w-full h-[15vh] flex justify-evenly items-center start'>
        {cardInfoProductVal.map((valueList : any, index : number) =>
            <SummaryCard title={valueList[0]} total={valueList[1]} imgLogo={summaryCardImg[index]}/>
        )}
    </div>
  )
}

function ReviewLineChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [totalReview, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/totalReview").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

  return (
    <>
    <Line
        data={{
            labels: months,
            datasets: [{
                label: 'My First Dataset',
                data: totalReview,
              }]
            }}
            options={{
              plugins : {
                title : {
                  display : true,
                  text : "Total Reviews",
                  font : {
                    size : 18,
                    weight : "bold"
                  }
                },
                legend : {
                  position : "bottom"
                }
              },
              scales: {
                y: {
                    display: false
                }
            }
            }}
    />
    </>
  )
}

function TotalRecommentChart () {

  const [totalRecomment, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/totalRecomment").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

  return (
    <>
    <Doughnut 
      data={{
        labels: ["Yes", "No"],
        datasets: [{
          label: 'My First Dataset',
          data: totalRecomment,
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
          ],
          hoverBorderDashOffset: 10,
          hoverBorderWidth: 4,
          hoverBorderColor: 'rgba(255,255,255,0.8)'
        }]
      }}
      options={{
        parsing: {
          xAxisKey: 'x',
          yAxisKey: 'y',
        },
        cutout: 80,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          },
          title: {
            display: true,
            text: "Total Recommendations",
            font: {
              size: 18
            }
          }
        }
      }}
    />
    <p className='mt-[-15px] text-[18px] font-bold text-gray-600 absolute'>Most People</p>
    {totalRecomment[0] > totalRecomment[1] ? (
        <>
        <p className='mt-[25px] text-[18px] font-bold absolute text-blue-400'>Recommend</p>
        <p className='mt-[65px] text-[12px] font-bold absolute text-gray-600'>({JSON.stringify(totalRecomment[0])} People)</p>
        </>
    ) : (
        <>
        <p className='mt-[25px] text-[18px] font-bold absolute text-red-400'>Not Recommend</p>
        <p className='mt-[65px] text-[12px] font-bold absolute text-gray-600'>({JSON.stringify(totalRecomment[1])} People)</p>
        </>
    )}
    </>
  );
}

function TopBrandChart() {

  const [totalTopBrand, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/topBrand").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

  return (
    <Bar
      data={{
          labels: ['Kahf', 'Wardah', 'Emina', 'Make-Over'],
          datasets: [{
              label: '# of Votes',
              data: totalTopBrand
          }]
      }}
      options={{
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: {
              legend: {
                  display: false},
              title: {
                  text: "5 Top Brands",
                  display: true,
                  font: {
                      size: 16,
                  }
              },
              datalabels: {
                  display: true,
                  align : 'center',
                  anchor: 'center',
                  color: 'white',
                  font: {
                      size: 14,
                      weight: 'bold'
                  }
              }
          },
          scales: {
              x: {
                  display: false
              }
          }
      }}    
    />
  )
}

function UsagePeriodsChart() {
  const [usagePeriodsVal, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/usagePeriods").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

  return (
    <Bar
      data={{
          labels: ['>1Month', '1M-3M', '3M-6M', '6M-1Y', '1Y+'],
          datasets: [{
              label: '# of Votes',
              data: usagePeriodsVal
          }]
      }}
      options={{
          plugins: {
              legend: {
                  display: false},
              title: {
                  text: "Usage Periods",
                  display: true,
                  font: {
                      size: 18,
                  },
                  padding: {
                    bottom : 50
                  }
              },
              datalabels: {
                  display: true,
                  align : 'center',
                  anchor: 'center',
                  color: 'white',
                  font: {
                      size: 14,
                      weight: 'bold'
                  }
              }
          },
          scales: {
              y: {
                  display: false
              }
          }
      }}    
    />
  )
}

function TopTableChart({ titleName, tableData } : {titleName : string, tableData : string}) {
  const headerSetting = {
    fontWeight: 'bold',
    backgroundColor: '#FAA0A0',
    color: 'white',
    fontSize: 15
  };

  const [tableDataVal, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/topTable").then(
      res=>res.json()
    ).then(
      data=> {
        tableData === 'categories' ? setData(data.categories) : setData(data.subCategories) 
      }
    )
  }, [])

  console.log(tableDataVal)

  return (
    <TableContainer sx={{ backgroundColor : 'transparent' }} elevation={0} component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow >
            <TableCell align = "left" sx={{...headerSetting}}>{titleName}</TableCell>
            <TableCell  align = "center" sx={{...headerSetting}}>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDataVal.map((row : any) => (
            <TableRow key={row[0]}>
              <TableCell component="th" scope="row">
                {row[0]}
              </TableCell>
              <TableCell align="center">{row[1]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { CardInfoProduct, ReviewLineChart, TotalRecommentChart, UsagePeriodsChart, TopBrandChart, TopTableChart }