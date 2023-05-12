import React,{useState,useEffect} from 'react';
import {
	Text,
	Image,
	Flex,
  Wrap,
  WrapItem,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom"
import axios from 'axios';
import { paginationMonitoring } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import { useNavigate } from "react-router-dom";
import './card_sensor.css'
import ValueSensor from '../value_sensor/value_sensor';



const CardSensor = (props) => {
    const idApi = props.data.id
    const navigate = useNavigate();
    const [dataTable, setDataTable] = useState([])
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
      setIsLoading(true)
    },[idApi]);


    return (
        <>
          {dataTable == null || isLoading ? (
          <Loading/> 
          ):(
            <Flex align={'center'} justify={'center'} mt={'30px'}>
              <Wrap className='center-ul' align={'center'} spacing={'30px'} mt={'30px'}  >
                  {dataTable.map((item,index) => (
                  <Link to={`/unit/dashboard/sensor/${item.id}`
                  } >
                  {
                    item.id === 7 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        {
                          item.id === 7 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }
                   {
                    item.id === 8 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        { 
                          item.id === 8 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }
                  {
                    item.id === 9 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        { 
                          item.id === 9 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }{
                    item.id === 10 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        { 
                          item.id === 10 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }{
                    item.id === 11 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        { 
                          item.id === 11 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }
                  {
                    item.id === 20 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        { 
                          item.id === 20 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }
                  {
                    item.id === 21 ? <WrapItem key={index} 
                    w={['sm']}
                    className='card-sensor'
                    bg={'#ffff'}
                    borderRadius={'10px'}
                    border={'1px solid #E2E8F0'}
                    paddingTop={'30px'}
                    paddingBottom={'30px'}
                    >
                      <Center justifyContent={'center'} flexDir={'column'} data={{data : idApi}} >
                        <Flex flexDir={'row'} justify={'space-between'}>
                          <Image size={'1px'} src={`${item.icon}`} color={item.color} />
                          <Text color={`${item.color}`}>{item.name}</Text>
                        </Flex>
                        { 
                          item.id === 21 ?
                          <ValueSensor data={{
                            id : item.id,
                            color : item.color,
                            category : item.category.name,
                            unit: item.unit_measurement,
                            max: item.range_max,
                            min: item.range_min,
                          }} /> : <></>
                        }
                      </Center>
                    </WrapItem> : <></>
                  }
                  </Link>
                    ))}
              </Wrap>
              </Flex>
            )
          }
        </>
    )
}
export default CardSensor;