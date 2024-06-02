import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut, Line, Bar } from "react-chartjs-2";

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

function ReviewLineChart({totalReview} : {totalReview : any}) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

function TotalRecommentChart ({TotalRecomment} : {TotalRecomment : any}) {
  return (
    <Doughnut 
      data={{
        labels: ["Yes", "No", "Neutral"],
        datasets: [{
          label: 'My First Dataset',
          data: TotalRecomment,
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
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
  );
}

function TopBrandChart({totalTopBrand} : {totalTopBrand : any}) {
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
  return (
    <Bar
      data={{
          labels: ['>1Month', '1M-3M', '3M-6M', '6M-1Y', '1Y+'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3]
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

function TopTableChart({ titleName, tableData } : {titleName : string, tableData : any}) {
  const headerSetting = {
    fontWeight: 'bold',
    backgroundColor: '#FAA0A0',
    color: 'white',
    fontSize: 15
  };

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
          {tableData.map((row : any) => (
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

export {ReviewLineChart, TotalRecommentChart, UsagePeriodsChart, TopBrandChart, TopTableChart}