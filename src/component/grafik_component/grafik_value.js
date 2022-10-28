import { Flex,Text } from '@chakra-ui/layout'
import React,{useState,useEffect} from 'react'
import { getGrafikSensor } from '../../Utility/api_link';
import axios from 'axios';
import Loading from '../../component/loading/loading';
import { useNavigate } from 'react-router';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import GrafikVlue from './grafik_value';
import { $CombinedState } from 'redux';
const { faker } = require('@faker-js/faker');
const GrafikValue =(props) => {
  const value = props.data.value
  const label2 = props.data.label
  const datasets = props.data.data
  
  const labels = label2;
  
   const data = {
    labels,
    datasets: [
      {
        label: `Rata Rata Data Sensor per (${value})`,
        data: datasets,
        borderColor:  'rgb(53, 162, 235,0.5)',
        pointBorderColor:'#A4E0FF',
        backgroundColor: 'rgb(53, 162, 235,0.1)',
        pointBorderWidth: 4 ,
        // tension: 0.5,

        fill: true,
        pointStyle: 'circle',
        pointRadius: 7,
        pointHoverRadius: 15
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ctx => `${value}`== 'Week' ? 'Grafik Sensor Perminggu' : `${value}` == 'Month' ? 'Grafik Sensor Perbulan' : `${value}` == 'Year' ? 'Grafik Sensor Pertahun' : 'Tahun',
      },
    },
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: 'Nilai Sensor',
      },

    },
      x: {
        display: true,
        title: {
          display: true,
          text: ctx => `${value}`== 'Week' ? 'Tanggal' : `${value}` == 'Month' ? 'Minggu' : `${value}` == 'Year' ? 'Bulan' : 'Tahun',
    },
},
}
}

  useEffect(() => {
  }, [value]);
    return (
      <div widht={'300px'} height={'300px'} margin={'20px'} >
    <Line size={'lg'} options={options} data={data} />
      </div>
    )
  }
  export default GrafikValue
