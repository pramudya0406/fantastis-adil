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
import moment, { now } from 'moment/moment';

const ValueSensor = (props) => {
  const idSensor = props.data.id
  const navigate = useNavigate();
  const [valueSensor,setValueSensor] = useState(0)
  const [onRefresh,setOnRefresh] = useState(true)
  const [firstCheck,setFirstCheck] = useState(true)

  const getValueRefreshFirst = async () => {
    setTimeout(() => {
      axios.get(`${brokerSensor}${idSensor}`)
      .then(response => { 
        setValueSensor(response.data.data[0].value)
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
        console.log(response.data.data[0].value)
        setOnRefresh(false)
      })
    }
    , 1000)
  }
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
        console.log(response.data.data[0].value)
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
  <Flex justify={'center'} >
    <Text>{valueSensor}</Text>
  </Flex>
  </>
)
}
export default ValueSensor