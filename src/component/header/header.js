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
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

    const { routeName } = useSelector(
        state => state.userReducer,
    );
    console.log(routeName)

    return (
        <Flex
            height={'80px'}
            bg={'#ffff'}
            padding={'20px'}
            justifyContent="space-between"
            alignItems={'center'}
            flexDirection={'row'}
        >
            <Text color={'black'}>
                {routeName}
            </Text>
            <Flex flexDirection={'row'}>
                <div>
                    <Icon as={ImExit} color={"#09322D"} fontSize="xl" />
                </div>
            </Flex>
        </Flex>
    )
}
export default Header