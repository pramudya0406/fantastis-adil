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
  WrapItem,
  Center,
} from "@chakra-ui/react";
import axios from 'axios';
import { paginationMonitoring } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import moment, { now } from 'moment/moment';
import { useNavigate } from "react-router-dom";
import ValueSensor from '../value_sensor/value_sensor';



const CardSensor = (props) => {
    const idApi = props.data.id
    const [id,setId] = useState('')
    const navigate = useNavigate();
    const [dataTable, setDataTable] = useState([])
    const [name,setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const getPagination = async () => {
      setIsLoading(true)
    
    const header = localStorage.getItem('token')
    await axios.get(`${paginationMonitoring}${idApi}&&size=100`, {
        headers: {
            'Authorization': 'Bearer ' + header
          }
        })
        .then(response => { 
          setDataTable(response.data.data)
          setIsLoading(false)
        })
        .catch((error) => {
            localStorage.clear()
            navigate('/login')
        })
    }
    useEffect(() => {
      getPagination()
      return () => {
        
        setIsLoading(true)
        
      };
    },[idApi]);


    return (
        <>
          {dataTable == null || isLoading ? (
          <Loading/> 
          ):(
            <Flex align={'center'} justify={'center'} mt={'30px'}>
              <Wrap className='center-ul' align={'center'} spacing={'30px'} mt={'30px'} >
                  {dataTable.map((item,index) => (
                  <WrapItem key={index} 
                  w={['sm']}
                  bg={'#ffff'}
                  >
                    <Center justifyContent={'center'} flexDir={'column'} >
                      <Flex flexDir={'row'} justify={'center'}>
                        <Image src={`${item.icon}`} color={item.color} />
                        <Text color={`${item.color}`}>{item.name}</Text>
                      </Flex>
                      {
                        item.id === '' ? <></> : <ValueSensor data={{
                          id : item.id,
                        }} />
                      }
                      <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text  fontSize={'var(--caption)'}>Diperbarui : </Text>
                        <Text fontSize={'var(--caption)'}>
                          {moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}
                        </Text>
                    </Flex>
                    </Center>
                  </WrapItem>
                    ))}
              </Wrap>
              </Flex>
            )
          }
        </>
    )
}
export default CardSensor;