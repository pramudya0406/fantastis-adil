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
import { paginationMonitoring } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import moment, { now } from 'moment/moment';
import { useNavigate } from "react-router-dom";
import { date } from 'yup';



const CardSensor = (props) => {
    const idApi = props.data.id
    console.log(idApi)
    const [id,setId] = useState('')
    const navigate = useNavigate();
    const [dataTable, setDataTable] = useState([])
    const [name,setName] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const getPagination = async () => {
      setIsLoading(true)
    
    const header = localStorage.getItem('token')
    await axios.get(`${paginationMonitoring}${idApi}`, {
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
              <Wrap mt={'30px'} mb={'30px'}>
                  {dataTable.map((item,index) => (
                  <Flex key={index} 
                  marginTop={'30px'}
                  mb={'30px'}
                  >
                      <Flex
                      w="100%"
                      h="100%"
                      bg="white"
                      borderRadius="10px"
                      boxShadow="0px 0px 10px 0px rgba(0,0,0,0.1)"
                      paddingRight={'40px'}
                      justifyContent="space-between"
                      marginRight={'20px'}
                      flexDirection="column"

                      >
                      <Flex flexDir={'row'} justify={'center'}>
                        <Image src={`${item.icon}`} color={item.color} />
                        <Text color={`${item.color}`}>{item.name}</Text>
                      </Flex>
                      <Flex flexDir={'row'} justifyContent={'space-between'}>
                        <Text  fontSize={'var(--caption)'}>Diperbarui : </Text>
                      <Text fontSize={'var(--caption)'}>
                        {moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')}
                      </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                    ))}
              </Wrap>
            )
          }
        </>
    )
}
export default CardSensor;