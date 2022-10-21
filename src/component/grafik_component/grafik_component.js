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
const { faker } = require('@faker-js/faker');
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const GrafikComponent= (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const id = props.data.id
  const value = props.data.value
  const [dataSensor,setDataSensor] = useState('')
  const getGrafik = async () => {
    const header = localStorage.getItem('token')
    await axios.get(`${getGrafikSensor}${id}?getDateQuery=${value}`, {
      headers: {
        'Authorization': 'Bearer ' + header
      }
    })
    .then(response => {
      setDataSensor(response.data.data[1])
      console.log(response.data.data)
    })
    .catch((error) => {
      localStorage.clear()
      navigate('/login')
    })
  }
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
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  useEffect(() => {
    getGrafik()
  }, [id,value]);
    return <Line options={options} data={data} />;
}
export default GrafikComponent
