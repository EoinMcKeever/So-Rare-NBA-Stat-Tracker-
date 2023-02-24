
import React from "react"

import Nav from "./Nav"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
)



function App(){

    const data = {
        labels:['Mon','Tue', 'Wed'],
        datasets:[
            {label: '369',
            data: [3,6,9],
            backgroundColor:'aqua',
            borderColor: 'black',
            borderWidth: 1,
        }, 
            {label: '369',
            data: [3,6,9],
            backgroundColor:'marine',
            borderColor: 'black',
            borderWidth: 1,
        }
        ]
    }
    const options = {

    }

    return <div>
        <Nav />
        <div style = {{padding:'20px', width:'50%', height:'50%'}} >
        <Bar options={options} data={data} />
        </div>
    </div>
}

export default App