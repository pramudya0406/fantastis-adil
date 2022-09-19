import React from "react";
import './monitoring.css'
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
  } from '@chakra-ui/react'
import { RiDeleteBinFill,RiPencilFill, RiMapPinFill } from 'react-icons/ri'
import { Link } from "react-router-dom";

const Monitoring = () => {
    const [data, setData] = React.useState([
        {
            id:1,
            name: 'Greenhouse 1',
            info:[
                {
                    id: 1,
                    nomor : 1,
                    icon : 'https://res.cloudinary.com/diyu8lkwy/image/upload/v1663229870/itera%20herro%20icon/Lovepik_com-400222655-test-tube_1_jhq5uo.png',
                    satuan_ukur : 'Lux',
                    nama : 'Suhu Lingkungan',
                    merek: 'adafruit',
                    kode_warna:'red',
                },
                {
                    id: 2,
                    nomor : 2,
                    icon : 'https://res.cloudinary.com/diyu8lkwy/image/upload/v1663229870/itera%20herro%20icon/Lovepik_com-400222655-test-tube_1_jhq5uo.png',
                    satuan_ukur : 'Lux',
                    nama : 'Cahaya',
                    merek: 'adafruit',
                    kode_warna:'red',
                },
            ]
        },
        ])

        const columns = Array.from({ length: 100 });
    return (
        <Flex gap={'30px'} width={'100%'} flexDir={'column'}>
            <Flex justifyContent={'space-between'} width='100%' >
                <Link>
                    <Text fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}>
                    List Sensor pada Greenhouse
                    </Text>
                </Link>
            </Flex>
            <Flex alignContent={'center'} alignItems={'center'} justify={'space-between'}>
                <Flex width={'30%'}>
                <Select size='xs' borderRadius={'10'} color={'var(--color-primer)'} placeholder="Pilih Greenhouse">
                    {data.map((item,index) =>{
                        return (
                            <option key={index} value={item.id}>{item.name}</option>
                        )
                    })}
                </Select>
                </Flex>
                <Button bg={'var(--color-primer)'}>
                    Tambah
                </Button>
            </Flex>
            
            <Box width={'100%'} borderRadius={'md'}  boxShadow={'md'}  bg={'var(--color-on-primary)'} justify='flex-start' mt={30}>
                <TableContainer borderRadius={'md'} bg={'white'} width='100%'  overflowX='auto'>
                    <Table variant='simple'>
                        <Thead >
                        <Tr textAlign={'center'} alignContent={'center'} alignItems={'center'} justifyContent={'center'}>
                                <Th textAlign={'center'} >No</Th>
                                <Th textAlign={'center'} >Nama</Th>
                                <Th textAlign={'center'} >Icon</Th>
                                <Th textAlign={'center'} >Satuan Ukur</Th>
                                <Th textAlign={'center'} >Merek</Th>
                                <Th textAlign={'center'} >Warna</Th>
                                <Th textAlign={'center'} >Aksi</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                            {data.map((item) => {
                                return (
                                    item.info.map((item2, index2) => {
                                        return (
                                            <Tr key={index2}>
                                                <Td textAlign={'center'}  color={'var(--color-primer)'}>{item2.nomor}</Td>
                                                <Td textAlign={'center'}  color={'var(--color-primer)'}>{item2.nama}</Td>
                                                <Td display={'flex'} justifyContent='center' alignItems={'center'} ><Image height={'30px'} src= {item2.icon} alt="icon" /></Td>
                                                <Td textAlign={'center'}  color={'var(--color-primer)'}>{item2.satuan_ukur}</Td>
                                                <Td textAlign={'center'}  color={'var(--color-primer)'}>{item2.merek}</Td>
                                                <Td textAlign={'center'}  color={'var(--color-primer)'}>{item2.kode_warna} </Td>
                                                <Td textAlign={'center'}>
                                                    <Flex justifyContent={'space-evenly'}>
                                                        <Button bg={'var(--color-on-primary)'} color={'var(--color-info)'}><RiPencilFill/></Button>
                                                        <Button bg={'var(--color-on-primary)'} color={'var(--color-error)'}><RiDeleteBinFill/></Button>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                        )
                                    })
                                    )})
                                }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Flex>
            
    )

}
export default Monitoring