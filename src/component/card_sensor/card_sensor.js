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
} from "@chakra-ui/react";
import axios from 'axios';
import { paginationMonitoring } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import { useNavigate } from "react-router-dom";



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


    return (
        <>
          {dataTable == null || isLoading ? (
          <Loading/> 
          ):(
              <Flex>
                <Text>
                  halloooooo
                </Text>
              </Flex>
            )
          }
        </>
    )
}
export default CardSensor;