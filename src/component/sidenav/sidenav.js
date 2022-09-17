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
    FiCalendar,
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
    const [navSize, changeNavSize] = useState("large")
    const [navigation, changeNavigation] = useState('Dashboard')

    const dispatch = useDispatch()

    const patchRoute = (data) => {
        dispatch(routePageName(data))
    }

    return (
        <>
            <Flex
                backgroundColor={'#09322D'}
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
                        changeNavigation('Dashboard')
                        patchRoute('Dashboard')
                    }}>
                        <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active={navigation === 'Dashboard'} />
                    </div>
                    <div onClick={() => {
                        changeNavigation('Greenhouse')
                        patchRoute('Greenhouse')
                    }}>
                        <NavItem navSize={navSize} icon={GiGreenhouse} title="Greenhouse" active={navigation === 'Greenhouse'} />
                    </div>
                    <div onClick={() => {
                        changeNavigation('Monitoring')
                        patchRoute('Monitoring')
                    }}>
                        <NavItem navSize={navSize} icon={FiMonitor} title="Monitoring" active={navigation === 'Monitoring'} />
                    </div>
                    <div onClick={() => {
                        changeNavigation('Controlling')
                        patchRoute('Controlling')
                    }}>
                        <NavItem navSize={navSize} icon={AiOutlineControl} title="Controlling" active={navigation === 'Controlling'} />
                    </div>
                    <div onClick={() => {
                        changeNavigation('History Notification')
                        patchRoute('History Notification')
                    }}>
                        <NavItem navSize={navSize} icon={AiOutlineHistory} title="History Notification" active={navigation === 'History Notification'} />
                    </div>

                </Flex>

            </Flex>

        </>
    )

}
export default SideNav