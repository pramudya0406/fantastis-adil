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
import Header from '../header/header'
import { Route, Routes, Outlet } from 'react-router-dom'
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
                    h={'calc(100vh - 100px)'}
                    overflowY={'scroll'}
                    flexDir='column'
                >
                    <Outlet />

                </Flex>
            </Box >
        </Flex >
    )
}
export default Board