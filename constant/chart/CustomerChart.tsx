import React, { useEffect, useRef, useState } from 'react'
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
  const [AgeHijabChart, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/customerAgeAppereance").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])


  const AgeHijabData = AgeHijabChart.map((row: any) => ({
    label: row.label,
    data: row.data,
    backgroundColor : row.backgroundColor,
    borderColor : row.borderColor,
    borderWidth : 1,
    barThickness : 40
  }))

  const nonHijab = [40, 30, 30, 40, 50, 60, 70];
  const nonHijabData = nonHijab.map(item => item * -1);

  const data = {
      labels: ["65 +", "56 - 65", "46 - 55", "36 - 45", "26 - 35", "16 - 25", "0 - 15"],
      datasets: AgeHijabData
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
  const [SkinToneData, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/customerSkinTone").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

  const data = {
      labels: ["Light", "Medium Light", "Medium", "Medium Dark", "Dark"],
      datasets: SkinToneData.map((row: any) => ({
        label: row.label,
        data: row.data,
      }))
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
                          position: 'bottom',
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
  const [totalRecommentVal, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/totalRecommentVal").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

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
            'rgb(255, 205, 86)',
            'rgb(0, 0, 0, 0.7)',
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
  const [customerInfo, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/customersDataInfo").then(
      res=>res.json()
    ).then(
      data=> {
        setData(data)
      }
    )
  }, [])

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
          {customerInfo.map((row : any) => (
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

function TopCustomerConcern({ titleName, tableData } : {titleName : string, tableData : string}) {
  const headerSetting = {
    fontWeight: 'bold',
    backgroundColor: '#FAA0A0',
    color: 'white',
    fontSize: 15
  };

  const [tableDataVal, setData] = useState([{}])

  useEffect( () => {
    fetch("http://localhost:5000/topCustomerConcern").then(
      res=>res.json()
    ).then(
      data=> {
        switch (tableData) {
          case 'hairConcern':
            setData(data.hairConcern)
            break;
          case 'bodyConcern':
            setData(data.bodyConcern)
            break;
          case 'skinConcern':
            setData(data.skinConcern)
            break;
        }
      }
    )
  }, [])

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

export { AgeHijabChart, SkinToneBar, SkinTypeChart, CustomerReviewChart, TopCustomerConcern }