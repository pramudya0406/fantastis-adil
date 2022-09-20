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
import Dashboard from '../../page/dashboard/dashboard'
import { useSelector, useDispatch } from 'react-redux';
import Controlling from '../../page/controlling/controlling'
import GreenHouse from '../../page/greenhouse/greenhouse'
import Monitoring from '../../page/monitoring/monitoring'
import Notification from '../../page/notification/notification'
import GreenhouseAdd from '../../page/greenhouse/greenhouse_add'

const Baord = () => {
    const { routeName } = useSelector(
        state => state.userReducer,
    );
    return (
        <Flex color='white'>
            <Box bg='tomato' h={'100vh'}>
                <SideNav />
            </Box>
            <Box flex='1' >
                <Header />
                <Flex
                    padding={'20px'}
                    w='100%'
                    h={'calc(100vh - 80px)'}

                    overflowY={'scroll'}
                    flexDir='column'
                >
                    <Routes>
                        <Route path="/" exact element={<Dashboard />} />
                        <Route path="/unit/dashboard" element={<Dashboard />} />
                        <Route path="/unit/greenhouse" element={<GreenHouse />} />
                        <Route path="/unit/monitoring" element={<Monitoring />} />
                        <Route path="/unit/controlling" element={<Controlling />} />
                        <Route path="/unit/historynotifikasi" element={<Notification />} />
                        <Route path="/unit/greenhouse/add" element={<GreenhouseAdd />} />
                    </Routes>

                </Flex>
            </Box >
        </Flex >
    )
}
export default Baord