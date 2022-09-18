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
import CardDashboard from '../../component/card_dashboard/card_dashboard'
import { GiGreenhouse } from 'react-icons/gi';
import { MdMonitor } from 'react-icons/md';
import { AiOutlineControl } from 'react-icons/ai';

const Dashboard = () => {
    return (
        <>

            <Flex
                w='100%'
                flexDir={'column'}
            >
                <Flex
                    justify='center'
                >
                    <Wrap spacing='50px' justify='center'>
                        <CardDashboard data={{
                            value: 100,
                            icon: GiGreenhouse,
                            name: 'Jumlah GreenHouse'
                        }} />
                        <CardDashboard data={{
                            value: 100,
                            icon: MdMonitor,
                            name: 'Jumlah Sensor'
                        }} />
                        <CardDashboard data={{
                            value: 100,
                            icon: AiOutlineControl,
                            name: 'Jumlah Actuator'
                        }} />
                    </Wrap>
                </Flex>
            </Flex>

        </>
    )

}
export default Dashboard