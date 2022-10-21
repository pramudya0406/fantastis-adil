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
const { faker } = require('@faker-js/faker');
const GrafikValue =(props) => {
  const value = props.data.value
  const label2 = props.data.label
  const datasets = props.data.data

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Grafik Sensor ${value}`,
      },
    },
  };
  
  const labels = label2;
  
   const data = {
    labels,
    datasets: [
      {
        label: `Rata Rata Data Sensor per (${value})`,
        data: datasets,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  useEffect(() => {
  }, [value]);
    return <Line options={options} data={data} />;
  }
  export default GrafikValue
