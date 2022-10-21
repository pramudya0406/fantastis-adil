import { Flex,Text } from '@chakra-ui/layout'
import React,{useState,useEffect} from 'react'
import { getGrafikSensor } from '../../Utility/api_link';
import axios from 'axios';
import GrafikValue from './grafik_value';
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
  console.log(value)
  const [dataSensor,setDataSensor] = useState([])
  const getGrafik = async () => {
    const header = localStorage.getItem('token')
    await axios.get(`${getGrafikSensor}${id}?getDateQuery=${value}`, {
      headers: {
        'Authorization': 'Bearer ' + header
      }
    })
    .then(response => {
      setDataSensor(response.data.data)
      console.log(response.data.data)
    })
    .catch((error) => {
      localStorage.clear()
      navigate('/login')
    })
  }
  useEffect(() => {
    getGrafik()
  }, [id,value]);
    return <GrafikValue data={{
      value: value,
      label: dataSensor.map((item) => item.label),
      data: dataSensor.map((item) => item.data),
    }
    } />;
}
export default GrafikComponent
