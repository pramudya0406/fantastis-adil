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
  CircularProgress,
  CircularProgressLabel
} from "@chakra-ui/react";
import axios from 'axios';
import Status from '../../Utility/status';
import { brokerSensor } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import { useNavigate } from "react-router-dom";
import { buildStyles } from 'react-circular-progressbar';
import hexRgb from 'hex-rgb';
import moment from 'moment/moment';
import './value_sensor.css';

const ValueSensor = (props) => {
  const idSensor = props.data.id
  const color = props.data.color
  const kategori = props.data.category
  const satuan =props.data.unit
  const max = props.data.max
  const min = props.data.min
  const navigate = useNavigate();
  const [valueSensor,setValueSensor] = useState(0)
  const [time,setTime] = useState('')
  const [category,setCategory] = useState('')
  const [status, setStatus] = useState(1)

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
  },[onRefresh, firstCheck, valueSensor,status]);
  
  return (
    <>
  <Flex alignContent={'center'} justify={'center'} flexDir={'column'} alignItems={'center'} >
    {
      kategori == 'Persen' ? 
      <Flex justify={'center'} alignItems={'center'} textAlign='center' mb={'5px'} mt={'10px'} style={{ width: "100px" }}>
        <CircularProgress value={valueSensor} color={valueSensor > max || valueSensor < min ? 'var(--color-error)' : `${color}`} size='70px'>
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
      </Flex>:
        null
      }
      {
        kategori == 'Derajat' ?
        <Flex justify={'center'}  mb={'10px'} mt={'10px'} flexDir={'column'} alignItems={'center'} textAlign='center' style={{ width: "50px" }}>
          {
            <><Text fontSize={'20px'} color={valueSensor > max || valueSensor < min ? 'var(--color-error)' : `${color}`}>{valueSensor}°</Text><Text fontSize={'20px'} color={valueSensor > max || valueSensor < min ? 'var(--color-error)' : `${color}`}>{satuan}</Text></>
          }
          </Flex>:
           
         null
      }
      {
        kategori == 'Lainnya'  ?
        <Flex justify={'center'}  mb={'10px'} mt={'10px'} flexDir={'column'} alignItems={'center'} textAlign='center' style={{ width: "50px" }}>
          {
            <><Text fontSize={'20px'} color={
              valueSensor > max || valueSensor < min ? 'var(--color-error)' :  `${color}`
            }>{valueSensor}°</Text><Text fontSize={'20px'} color={valueSensor > max || valueSensor < min ? 'var(--color-error)' :  `${color}`}>{satuan}</Text></>
          }
        </Flex>
        : null
      }
      {
        Status.map((item,index)=>{
          return (
            item.id == status ? (
              <Flex flexDir={'row'}>
                <Flex>
                  <Text fontSize={`var(--header-5)`}>
                      Status :
                  </Text>
                </Flex>
                <Flex>
                  <Text fontSize={`var(--header-5)`} color={ item.id == 1 ? 'var(--color-secondary-variant)':'var(--color-error)'}>
                      {item.name}
                  </Text>
                </Flex>
              </Flex>
            ):<></>

          )
        }
        )
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