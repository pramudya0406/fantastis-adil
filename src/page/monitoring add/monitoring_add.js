import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Center,
    Text,
    Icon,
    calc,
    Button,
} from '@chakra-ui/react'
const   Monitoring_Add = () => {
    return (

            <Flex
                w='100%'
                flexDir={'column'}
            >
                <Flex
                    w='100%'
                    flexDir={'row'}
                    justifyContent='space-between'
                    alignItems={'center'}
                    marginBottom='40px'
                >
                    <Text color={'black'}>
                        List Greenhouse
                    </Text>
                    <Button bg='#14453E' size='sm' colorScheme={'teal'}>Tambah</Button>
                </Flex>
                <Text color={'black'}>hallo</Text>
            </Flex>
    )
}
export default Monitoring_Add