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
    Badge,
} from '@chakra-ui/react'
import { RiDeleteBinFill, RiPencilFill, RiMapPinFill } from 'react-icons/ri';
import CardGreenhouse from '../../component/card_greenhouse/card_green';

const GreenHouse = () => {

    const dummieData = [
        {
            image: 'https://bit.ly/2Z4KKcF',
            title: 'GreenHouse 1',
            location: 'Lampung Selatan',
        },
        {
            image: 'https://bit.ly/2Z4KKcF',
            title: 'GreenHouse 2',
            location: 'Lampung Selatan',
        },
        {
            image: 'https://bit.ly/2Z4KKcF',
            title: 'GreenHouse 3',
            location: 'Lampung Selatan',
        },
        {
            image: 'https://bit.ly/2Z4KKcF',
            title: 'GreenHouse 4',
            location: 'Lampung Selatan',
        },
        {
            image: 'https://bit.ly/2Z4KKcF',
            title: 'GreenHouse 5',
            location: 'Lampung Selatan',
        },
        {
            image: 'https://bit.ly/2Z4KKcF',
            title: 'GreenHouse 6',
            location: 'Lampung Selatan',
        },
    ]

    return (
        <>

            <Flex
                w='100%'
                flexDir={'column'}
            >
                <Flex
                    w='100%'
                    flexDir={'row'}
                    justifyContent='space-between'
                    alignItems={'center'}
                    marginBottom='40px'
                >
                    <Text color={'black'}>
                        List Greenhouse
                    </Text>
                    <Button bg='#14453E' size='sm' colorScheme={'teal'}>Tambah</Button>
                </Flex>
                <Wrap>
                    {
                        dummieData.map((placement) => (
                            <CardGreenhouse data={{
                                image: placement.image,
                                title: placement.title,
                                location: placement.location,
                            }} />
                        ))
                    }

                </Wrap>
            </Flex>

        </>
    )

}
export default GreenHouse