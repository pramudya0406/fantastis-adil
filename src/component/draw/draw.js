import React, { useState, } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import NavItem from '../navitem/navitem'
import { FiHome, FiMonitor, } from 'react-icons/fi'
import { GiGreenhouse } from 'react-icons/gi'
import { AiOutlineControl, AiOutlineHistory } from 'react-icons/ai'
import { routePageName } from '../../redux/action'
import { Link } from "react-router-dom";

const Draw = (props) => {

    const data = props.data
    const navSize = "large"

    const { routeName } = useSelector(
        state => state.userReducer,
    );
    console.log(routeName)

    const dispatch = useDispatch()

    const patchRoute = (data) => {
        dispatch(routePageName(data))
    }

    return (
        <Drawer placement={'left'} onClose={data.onclose} isOpen={data.isopen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <Link to={'/unit/dashboard'} onClick={() => {
                        patchRoute('Dashboard')
                    }}>
                        <NavItem navSize={navSize} icon={FiHome} title="Dashboard" active={routeName === 'Dashboard'} />
                    </Link>
                    <Link to={'/unit/greenhouse'} onClick={() => {
                        patchRoute('Greenhouse')
                    }}>
                        <NavItem navSize={navSize} icon={GiGreenhouse} title="Greenhouse" active={routeName === 'Greenhouse'} />
                    </Link>
                    <Link to={'/unit/monitoring'} onClick={() => {
                        patchRoute('Monitoring')
                    }}>
                        <NavItem navSize={navSize} icon={FiMonitor} title="Monitoring" active={routeName === 'Monitoring'} />
                    </Link>
                    <Link to={'/unit/controlling'} onClick={() => {
                        patchRoute('Controlling')
                    }}>
                        <NavItem navSize={navSize} icon={AiOutlineControl} title="Controlling" active={routeName === 'Controlling'} />
                    </Link>
                    <Link to={'/unit/historynotifikasi'} onClick={() => {
                        patchRoute('History Notification')
                    }}>
                        <NavItem navSize={navSize} icon={AiOutlineHistory} title="History Notification" active={routeName === 'History Notification'} />
                    </Link>

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
export default Draw