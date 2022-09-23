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
import GreenhouseEdit from '../../page/greenhouse/greenhouse_edit'
import Monitoring_Add from '../../page/monitoring/monitoring_add'
import Controlling_Add from '../../page/controlling/controlling_add'


const Board = () => {
    const { routeName } = useSelector(
        state => state.userReducer,
    );
    return (
        <Flex color='white' width="100%">
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
                        <Route path="/unit" element={<Dashboard />} />
                        <Route path="/unit/dashboard" element={<Dashboard />} />
                        <Route path="/unit/greenhouse" element={<GreenHouse />} />
                        <Route path="/unit/monitoring" element={<Monitoring />} />
                        <Route path="/unit/controlling" element={<Controlling />} />
                        <Route path="/unit/historynotifikasi" element={<Notification />} />
                        <Route path="/unit/greenhouse/add" element={<GreenhouseAdd />} />
                        <Route path="/unit/greenhouse/:slug" element={<GreenhouseEdit />} />
                        <Route path="/unit/monitoring/add" element={<Monitoring_Add />} />
                        <Route path="/unit/controlling/add" element={<Controlling_Add />} />
                    </Routes>

                </Flex>
            </Box >
        </Flex >
    )
}
export default Board