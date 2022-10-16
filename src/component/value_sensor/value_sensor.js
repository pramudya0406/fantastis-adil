import React,{useState,useEffect} from 'react';
import {
	Table,
	Thead,
	Tbody,
	Text,
	Button,
	Select,
	Tr,
	Image,
	Th,
	Td,
	Box,
	TableContainer,
	Flex,
  Wrap,
} from "@chakra-ui/react";
import axios from 'axios';
import { brokerSensor } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import { useNavigate } from "react-router-dom";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';
import hexRgb from 'hex-rgb';
import moment from 'moment/moment';
import './value_sensor.css';

const ValueSensor = (props) => {
  const idSensor = props.data.id
  const color = props.data.color
  const kategori = props.data.category
  const satuan =props.data.unit
  const navigate = useNavigate();
  const [valueSensor,setValueSensor] = useState(0)
  const [time,setTime] = useState('')
  const [category,setCategory] = useState('')
  console.log( kategori)
  
  const [onRefresh,setOnRefresh] = useState(true)
  const [firstCheck,setFirstCheck] = useState(true)
  const warna = hexRgb(color)
  delete warna.alpha

  const getValueRefreshFirst = async () => {
    setTimeout(() => {
      axios.get(`${brokerSensor}${idSensor}`)
      .then(response => { 
        setValueSensor(response.data.data[0].value)
        setTime(response.data.data[0].created_at)
        setOnRefresh(true)
      })
    }
    , 1000)
  }
  const getValueRefreshSecond = async () => {
    setTimeout(() => {
      axios.get(`${brokerSensor}${idSensor}`)
      .then(response => { 
        setValueSensor(response.data.data[0].value)
        setOnRefresh(false)
      })
    }
    , 1000)
  }
  const needDominantBaselineFix = true;
  
  const onRefreshUpdate = () => {
    if(onRefresh == false){
      getValueRefreshFirst()
    }
    if (onRefresh == true){
      getValueRefreshSecond()
    }
  }
  const getValue = async () => {
    axios.get(`${brokerSensor}${idSensor}`)
    .then(response => { 
      setValueSensor(response.data.data[0].value)
      })
    }
    

    useEffect(() => { 
      if(firstCheck == true){
      getValue()
    }
    else{
      onRefreshUpdate()
    }
    return () => setFirstCheck(false);
  },[onRefresh, firstCheck, valueSensor]);
  
  return (
    <>
  <Flex alignContent={'center'} justify={'center'} flexDir={'column'} alignItems={'center'} >
    {
      kategori == 'Persen' ? 
  <Flex justify={'center'} alignItems={'center'} textAlign='center' mb={'5px'} mt={'10px'} style={{ width: "100px" }}>
      <CircularProgressbarWithChildren className='circular'
      
      value={valueSensor}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0.25,
        
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
        
        // Text size
        
        
        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,
        
        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',
        
        // Colors
          pathColor: `rgba( ${warna.red},  ${warna.green},  ${warna.blue}  ,${valueSensor / 100})`,
          textColor: '#10B8DD',
          trailColor: '#d6d6d6',
          textAlignment: 'center',
          backgroundColor: '#10B8DD',
        })}
        >
          <Text dy={needDominantBaselineFix ? -15 : 0} color={`${color}`} fontSize={'20px'}>{valueSensor}%</Text>  
        </CircularProgressbarWithChildren> 
      </Flex>:
        null
      }
      {
        kategori == 'Derajat' ? 
        <Flex justify={'center'}  mb={'10px'} mt={'10px'} flexDir={'column'} alignItems={'center'} textAlign='center' style={{ width: "50px" }}>
          <Text fontSize={'20px'} color={`${color}`}>{valueSensor}°</Text> 
          <Text fontSize={'20px'}  color={`${color}`}>{satuan}</Text> 
        </Flex>:
           null
      }
      {
        kategori == 'Lainnya' ?
        <Flex justify={'center'}  mb={'10px'} mt={'10px'} flexDir={'column'} alignItems={'center'} textAlign='center' style={{ width: "50px" }}>
          <Text fontSize={'20px'} color={`${color}`}>{valueSensor}</Text>
          <Text fontSize={'20px'}  color={`${color}`}>{satuan}</Text>
        </Flex>:
        null
      }

    {
          <Flex flexDir={'row'} justifyContent={'space-between'}>
            <Text  fontSize={'var(--caption)'}>Diperbarui : </Text>
              <Text fontSize={'var(--caption)'}>
                {moment(time).format('MMMM Do YYYY, h:mm:ss a')}
              </Text>
          </Flex>
    }
  </Flex>
  </>
  )
}
export default ValueSensor