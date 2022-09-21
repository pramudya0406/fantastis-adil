import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Text,
    Icon,
    WrapItem,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { RiDeleteBinFill, RiPencilFill, RiMapPinFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CardGreenhouse = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    let data = props.data
    return (
        <>
            <WrapItem>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Image src={data.image} h={'250px'} w={'350px'} />

                    <Flex p='2' justifyContent={'space-between'} flexDirection='row' w={'100%'} >

                        <Text color={'black'}>
                            {data.title}
                        </Text>
                        <Flex>
                            <div onClick={() => {
                                onOpen()
                            }}>
                                <Icon as={RiDeleteBinFill} size={'24px'} color={'#B00020'} />
                            </div>
                            <Link to={{
                                pathname: '/unit/greenhouse/' + data.title
                            }}>
                                <Icon as={RiPencilFill} size={'24px'} color={'#007BFF'} marginStart={'10px'} />
                            </Link >
                        </Flex>

                    </Flex>
                    <Flex p='2' justifyItems={'center'}>
                        <Icon as={RiMapPinFill} size={'30px'} color={'black'} />
                        <Text color={'black'} flexDirection='row' w={'100%'} marginStart={'10px'}>
                            {data.location}
                        </Text>
                    </Flex>
                </Box>
            </WrapItem>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {'Hapus ' + data.title}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            {'Apakah kamu yakin menghapus ' + data.title}
                        </Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button bg={'#E2E8F0'} mr={3} onClick={onClose}>
                            Batal
                        </Button>
                        <Button variant='#09322D' bg={'#09322D'} color={'#ffff'} onClick={onClose}>
                            Hapus
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default CardGreenhouse