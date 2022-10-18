import React,{ useState,useEffect} from 'react'
import {
  Text,
  Button,
  Select,
  Tr,
  Image,
  Flex,
} from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../component/loading/loading';
import { useNavigate } from 'react-router';
import { idSensor } from '../../Utility/api_link';
const  Grafik = () => {
 
const [data, setData] = useState(null)
const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false)
const { id } = useParams()
console.log(id)
const getSensor = async () => {
  setIsLoading(true)
  const header = localStorage.getItem('token')
  await axios.get(`${idSensor}${id}`, {
      headers: {
          'Authorization': 'Bearer ' + header
        }
      })
      .then(response => {
        setData(response.data.data[0].name)
        console.log(response.data.data)
        setIsLoading(false)
      })
      .catch((error) => {
          localStorage.clear()
          navigate('/login')
      }) 
}
  useEffect(() => {
    getSensor()
  }, [id]);
  return (
    <>
    {data == null ? (
      <Loading />
    ) : (
      // {
      //   data.id ==
      // }
      <Flex
        w="100%"
        h="100%"
        bg="white"
        borderRadius="10px"
        p="10px"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="20px" fontWeight="bold" mb="10px">
          {'Grafik ' + data}
        </Text>
      </Flex>
    )}
    </>
  )
}
export default Grafik
