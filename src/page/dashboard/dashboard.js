import React, { useState, useEffect } from 'react'
import {
    Flex,
    Image,
    Text,
    Wrap,
} from '@chakra-ui/react'
import CardDashboard from '../../component/card_dashboard/card_dashboard'
import { GiGreenhouse } from 'react-icons/gi';
import { MdMonitor } from 'react-icons/md';
import { AiOutlineControl } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { routePageName } from '../../redux/action';

const Dashboard = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(routePageName('Dashboard'))
        };
    }, []);

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

                <Flex
                    w='100%'
                    flexDir={'column'}
                    justify='center'
                    align={'center'}
                    marginTop={'100px'}
                >
                    <Text color={'black'} marginBottom={'10px'}>
                        Kalaborasi oleh :
                    </Text>
                    <Image src='https://res.cloudinary.com/diyu8lkwy/image/upload/v1663542541/itera%20herro%20icon/Frame_181_fmtxbh.png' marginBottom={'50px'} />
                </Flex>
            </Flex>

        </>
    )

}
export default Dashboard