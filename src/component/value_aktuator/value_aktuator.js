import React,{useState,useEffect} from 'react';
import {
	Text,
  FormControl,
	Image,
	Flex,
  Stack
} from "@chakra-ui/react";
import axios from 'axios';
import useSound from 'use-sound';
import clickSound from '../../assets/switch.mp3';
import Status from '../../Utility/status_aktuator';
import { postLogAktuator } from "../..//Utility/api_link";
import Loading from "../../component/loading/loading";
import { useNavigate } from "react-router-dom";
import { Switch } from '@chakra-ui/react'
import { Formik,Form, replace } from 'formik';
import './value_aktuator.css';

const ValueAktuator = (props) => {
  const idApi = props.data.id
  const life_cycle = props.data.life_cycle
  const [id,setId] = useState('')
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [isEnable, setIsEnable] = useState('')
  const [play] = useSound(clickSound, {
    playbackRate,
    interrupt: true,
  });
  const convertValue = () => {
    if (life_cycle == 1){
      return true
    }
    else{
      return false
    }
  }
  const [status,setStatus] = useState(convertValue);
  const toogleSwitch = () => {
    if(status == true){
      setTimeout(() => {
      axios.post(`${postLogAktuator}`,{
        id_actuator:idApi,
        on_off_status: 0})
        .then(response => {
          console.log(response)
          setIsLoading(false)
          setStatus(replace => !replace)
        })
      }, 200);
    }
    else{
      setTimeout(() => {
        axios.post(`${postLogAktuator}`,{
          id_actuator:idApi,
          on_off_status: 1})
          .then(response => {
            console.log(response)
            setIsLoading(false)
            setStatus(replace => !replace)
          })
     }, 200); 
    }
  }
    useEffect(() => {
      return () => {
        setIsLoading(true)
      };
    },[idApi,status]);
  return (
  <>
  { status == null && isLoading ? <Loading/> :(
  <><Flex justify={'center'} mt='30px' mb={'30px'}>
          <Image className='Image' w={'180px'} h={'auto'} src={status == 0 ? '/Off.png' : '/On.png'} alt="image" boxSize="100px" />
        </Flex><Flex flexDir={'row'}>
            {Status.map((item, index) => {
              return (
                item.id === status ? (
                  <Flex flexDir={'row'} key={`${index}`}>
                    <Flex>
                      <Text fontSize={`var(--header-5)`}>
                        Status :
                      </Text>
                    </Flex>
                    <Flex>
                      <Text fontSize={`var(--header-5)`} color={item.id == true ? 'var(--color-secondary-variant)' : 'var(--color-error)'}>
                        {item.name}
                      </Text>
                    </Flex>
                  </Flex>
                ) : <></>
              );
            }
            )}
          </Flex><FormControl mt={'10px'} alignContent={'center'} justify={'center'} columns={{ base: 2, lg: 4 }}>
            <Stack align='center' onClick={play} className='touchable'>
              {
                isLoading ?
                <Switch colorScheme="green" size="lg"  onChange={()=>{
                  setIsLoading(true)
                  toogleSwitch()
                } } value={status} isChecked={status}  
                />:<Switch size="lg" onChange={()=>{
                  setIsLoading(true)
                  toogleSwitch()
                }
                } value={status}  isInvalid={status} isChecked={status} />
              }
            </Stack>
          </FormControl></>
  )
}
  </>
    )}
export default ValueAktuator