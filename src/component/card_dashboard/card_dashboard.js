import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Center,
    Text,
    Icon,
    Button,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { GiGreenhouse } from 'react-icons/gi';

const CardDashboard = (props) => {

    let data = props.data

    return (
        <WrapItem>
            <Flex
                h={'245px'}
                w={'sm'}
                bg={'#ffff'}
                borderRadius='30'
                borderWidth='1px'
                borderColor={'#D9D9D9'}
                justify={'space-between'}
                flexDir={'column'}
                alignItems='center'
                padding={35}
            >
                <Flex
                    w={'65px'}
                    h={'56px'}
                    borderRadius={'10px'}
                    bg={'#319795'}
                    justify='center'
                    align={'center'}

                >
                    <Icon as={data.icon} w={6} h={6} />
                </Flex>
                <Text color={'black'} fontSize={32}>
                    {data.value}
                </Text>
                <Text color={'black'} >
                    {data.name}
                </Text>
            </Flex>
        </WrapItem>
    )
}
export default CardDashboard