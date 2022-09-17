import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Center,
    Text,
    Icon,
    calc,
} from '@chakra-ui/react'
import SideNav from '../sidenav/sidenav'
import { ImExit } from 'react-icons/im'
import Header from '../header/header'
import { Route, Routes } from 'react-router-dom'

const Baord = () => {
    return (
        <Flex color='white'>
            <Box bg='tomato' h={'100vh'}>
                <SideNav />
            </Box>
            <Box flex='1' >
                <Header />
                <Flex
                    padding={'20px'}
                    bg='tomato'
                    w='100%'
                    h={'calc(100vh - 80px)'}
                >
                    <Routes>
                        <Route>

                        </Route>
                    </Routes>
                </Flex>
            </Box >
        </Flex >
    )
}
export default Baord