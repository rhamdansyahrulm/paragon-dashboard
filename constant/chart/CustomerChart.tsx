import React, { useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables, scales } from "chart.js";
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

function AgeHijabChart () {
    const nonHijab = [40, 30, 30, 40, 50, 60, 70];
    const nonHijabData = nonHijab.map(item => item * -1);

    const data = {
        labels: ["65 +", "56 - 65", "46 - 55", "36 - 45", "26 - 35", "16 - 25", "0 - 15"],
        datasets: [
            {
                label: "Hijab",
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                barThickness: 40
            },
            {
                label: "Non-Hijab",
                data: nonHijabData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                barThickness: 40
            }
        ]
    };

    return (
        <>
            <Bar 
                data={data} 
                options={{
                    responsive : true,
                    maintainAspectRatio: true,
                    indexAxis: "y",
                    scales: {
                        x: {
                            stacked: true,
                            ticks: {
                                callback: function(value : any) {
                                    return Math.abs(value);
                                }
                            }
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true,
                        }
                    },
                    plugins: {
                        legend: {
                            position: 'chartArea',
                        },
                        title: {
                            display: true,
                            text: 'Age Distribution by Hijab and Non-Hijab',
                            font: {
                                size: 16,
                            }
                        }
                    }
                }} 
                height={350}/>
        </>
    );
};

function SkinToneBar () {
    const data = {
        labels: ["Light", "Medium Light", "Medium", "Medium Dark", "Dark"],
        datasets: [
            {
                label: "Cool",
                data: [10, 20, 30, 40, 50, 60, 70],
            },
            {
                label: "Neutral",
                data: [10, 20, 30, 40, 50, 60, 70]
            },
            {
                label: "Warm",
                data: [10, 20, 30, 40, 50, 60, 70]
            },

        ]
    };

    return (
        <>
            <Bar 
                data={data} 
                options={{
                    responsive : true,
                    maintainAspectRatio: true,
                    scales: {
                        x: {stacked: true},
                        y: {stacked: true, display: false}
                    },
                    plugins: {
                        legend: {
                            position: 'chartArea',
                        },
                        title: {
                            display: true,
                            text: 'Skin Tone - Undertone',
                            font: {
                                size: 16,
                            }
                        }
                    }
                }} 
            />
        </>
    )
}

function SkinTypeChart () {
    const totalRecommentVal = [400, 50, 100]

    return (
      <Doughnut 
        data={{
          labels: ["Dry", "Normal", "Combination", "Oily"],
          datasets: [{
            label: 'My First Dataset',
            data: totalRecommentVal,
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
          cutout: 65,
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
            title: {
              display: true,
              text: "Total Recommendations",
              font: {
                size: 16
              }
            }
          }
        }}
      />
    );
}

function CustomerReviewChart () {
    const TopCategories = [
        ['Frozen asd', 159, 159, 159],
        ['Ice cream', 237, 159, 159],
        ['Ice sandwich', 238, 159, 159],
        ['Ice cream sandwich', 239, 159, 159],
        ['Eclair', 262, 159, 159],
    ];

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
              <TableCell align = "left" sx={{...headerSetting}}>Username</TableCell>
              <TableCell  align = "center" sx={{...headerSetting}}>Followers</TableCell>
              <TableCell  align = "center" sx={{...headerSetting}}>Reviews</TableCell>
              <TableCell  align = "center" sx={{...headerSetting}}>Likes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TopCategories.map((row : any) => (
              <TableRow key={row[0]}>
                <TableCell component="td" scope="row">
                  {row[0]}
                </TableCell>
                <TableCell align="center">{row[1]}</TableCell>
                <TableCell align="center">{row[2]}</TableCell>
                <TableCell align="center">{row[3]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}


export { AgeHijabChart, SkinToneBar, SkinTypeChart, CustomerReviewChart }