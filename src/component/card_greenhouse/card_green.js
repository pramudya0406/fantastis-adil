import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Text,
    Icon,
    WrapItem,
} from '@chakra-ui/react'
import { RiDeleteBinFill, RiPencilFill, RiMapPinFill } from 'react-icons/ri';

const CardGreenhouse = (props) => {
    let data = props.data
    return (
        <WrapItem>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={data.image} h={'250px'} w={'350px'} />

                <Flex p='2' justifyContent={'space-between'} flexDirection='row' w={'100%'} >

                    <Text color={'black'}>
                        {data.title}
                    </Text>
                    <Flex>
                        <Icon as={RiDeleteBinFill} size={'24px'} color={'#B00020'} />
                        <Icon as={RiPencilFill} size={'24px'} color={'#007BFF'} marginStart={'10px'} />
                    </Flex>

                </Flex>
                <Flex p='2' justifyItems={'center'}>
                    <Icon as={RiMapPinFill} size={'30px'} color={'black'} />
                    <Text color={'black'} flexDirection='row' w={'100%'} marginStart={'10px'}>
                        {data.location}
                    </Text>
                </Flex>
            </Box>
        </WrapItem>
    )
}
export default CardGreenhouse
