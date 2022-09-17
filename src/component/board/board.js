import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Center,
    Text,
    Icon,
} from '@chakra-ui/react'
import SideNav from '../sidenav/sidenav'
import { ImExit } from 'react-icons/im'
import Header from '../header/header'

const Baord = () => {
    return (
        <Flex color='white'>
            <Box bg='tomato' h={'100vh'}>
                <SideNav />
            </Box>
            <Box flex='1' bg='tomato'>
                <Header />
            </Box>
        </Flex>
    )
}
export default Baord