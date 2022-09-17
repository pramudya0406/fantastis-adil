import React, { useState } from 'react'
import './navigation.css';
import {
    Flex,
    Image,
    Box,
    Center,
} from '@chakra-ui/react'
import {
    FiHome,
    FiMonitor,
} from 'react-icons/fi'
import {
    GiGreenhouse
} from 'react-icons/gi'
import {
    AiOutlineControl,
    AiOutlineHistory
} from 'react-icons/ai'
import NavItem from '../navitem/navitem'
import { useSelector, useDispatch } from 'react-redux';
import { routePageName } from '../../redux/action';

const SideNav = () => {
    const navSize = "large"

    const dispatch = useDispatch()

    const patchRoute = (data) => {
        dispatch(routePageName(data))
    }
    const { routeName } = useSelector(
        state => state.userReducer,
    );

    return (
        <>
            <Flex
                backgroundColor={'#09322D'}
                display={{
                    base: 'none',
                    lg: 'flex',

                }}

                pos="sticky"
                h="100vh"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                w={'370px'}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    as="nav"
                >
                    <Box >
                        <Center>
                            <Image src='https://res.cloudinary.com/diyu8lkwy/image/upload/v1663396824/itera%20herro%20icon/Frame_9_1_sznmbk.png' />
                        </Center>
                    </Box>

                    <div onClick={() => {
                        patchRoute('Dashboard')
                    }}>
                        <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active={routeName === 'Dashboard'} />
                    </div>
                    <div onClick={() => {
                        patchRoute('Greenhouse')
                    }}>
                        <NavItem navSize={navSize} icon={GiGreenhouse} title="Greenhouse" active={routeName === 'Greenhouse'} />
                    </div>
                    <div onClick={() => {
                        patchRoute('Monitoring')
                    }}>
                        <NavItem navSize={navSize} icon={FiMonitor} title="Monitoring" active={routeName === 'Monitoring'} />
                    </div>
                    <div onClick={() => {
                        patchRoute('Controlling')
                    }}>
                        <NavItem navSize={navSize} icon={AiOutlineControl} title="Controlling" active={routeName === 'Controlling'} />
                    </div>
                    <div onClick={() => {
                        patchRoute('History Notification')
                    }}>
                        <NavItem navSize={navSize} icon={AiOutlineHistory} title="History Notification" active={routeName === 'History Notification'} />
                    </div>

                </Flex>

            </Flex>

        </>
    )

}
export default SideNav