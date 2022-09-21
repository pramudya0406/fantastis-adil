import React, { useState } from 'react'
import {
    Flex,
    Text,
    Button,
    Wrap,
    Input,
    Image
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import * as yup from "yup"
import FilePicker from 'chakra-ui-file-picker'

const GreenhouseAdd = () => {
    let data = {
        name: '',
        location: '',
    }

    const [image, onChangeImage] = useState(null)


    const schema = yup.object({
        name: yup.string().required("data harus diisi"),
        location: yup.string().required("data harus diisi"),
        image: yup.object().required("data harus diisi"),
    })

    const submit = (name, location) => {
        data.name = name
        data.location = location

        if (image == null || data.name == '' || data.location == '' || image == {} || image == '') {
            return (alert('Masih ada yang belum di isi'))
        }
        else {
            return (alert('mantap'))
        }
    }

    return (
        <>
            <Flex
                w='100%'
                flexDir={'column'}
            >
                <Flex
                    w='100%'
                    flexDir={'row'}
                    alignItems={'center'}
                    marginBottom='70px'
                >
                    <Link to={'/unit/greenhouse'}>
                        <Text color={'black'} marginRight={'20px'}>
                            List Greenhouse
                        </Text>
                    </Link>
                    <Text color={'black'} marginRight={'20px'}>{'>'}</Text>
                    <Text color={'black'} >Tambah</Text>
                </Flex>

                <Flex
                    w='100%'
                    flexDir={'column'}
                >
                    <Formik
                        initialValues={{
                            name: '',
                            location: '',
                            image: {}
                        }}
                        validationSchema={schema}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => (
                            <Form>
                                <FormControl marginTop={'20px'} isInvalid={errors.name && touched.name}>
                                    <FormLabel htmlFor="name" color={'black'}>
                                        Nama Greenhouse
                                    </FormLabel>
                                    <Input
                                        width={'100%'}
                                        h='60px'
                                        maxWidth={'100%'}
                                        marginTop={'0 auto'}
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant='outline'
                                        placeholder="Masukkan nama"
                                        color={'black'}
                                    />
                                    <FormErrorMessage>
                                        {errors.name}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl marginTop={'20px'} isInvalid={errors.location && touched.location}>
                                    <FormLabel htmlFor="location" color={'black'}>
                                        Lokasi Greenhouse
                                    </FormLabel>
                                    <Input
                                        width={'100%'}
                                        h='60px'
                                        maxWidth={'100%'}
                                        marginTop={'0 auto'}
                                        type="text"
                                        name="location"
                                        value={values.location}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        variant='outline'
                                        placeholder="Masukkan lokasi"
                                        color={'black'}
                                    />
                                    <FormErrorMessage>
                                        {errors.location}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl marginTop={'20px'} isInvalid={errors.image && touched.image}>
                                    <FormLabel htmlFor="image" color={'black'}>
                                        Gambar Greenhouse
                                    </FormLabel>
                                    <Flex
                                        width={'100%'}
                                        h='100px'
                                        borderRadius={'5px'}
                                        maxWidth={'100%'}
                                        marginTop={'0 auto'}
                                        variant='outline'
                                        placeholder="Masukkan email"
                                        color={'black'}
                                        alignItems='center'
                                        borderWidth='1px'
                                        borderColor={'#D9D9D9'}
                                        padding={'20px'}
                                    >
                                        <FilePicker
                                            onFileChange={(fileList) => onChangeImage(fileList)}
                                            placeholder="Pilih Gambar"
                                            clearButtonLabel="Hapus"
                                            multipleFiles={true}
                                            accept="image/*"
                                            hideClearButton={false}
                                        />
                                    </Flex>
                                    <FormErrorMessage>
                                        {errors.image}
                                    </FormErrorMessage>
                                </FormControl>
                                <Button
                                    marginTop={'44px'}
                                    width="100%"
                                    height="50px"
                                    borderRadius="10px"
                                    backgroundColor="var(--color-primer)"
                                    type="submit"
                                    // className="btn-login"
                                    onClick={() => submit(values.image, values.location)}
                                >
                                    <Text
                                        fontWeight='bold'
                                        fontFamily='var(--font-family-secondary)'
                                        fontSize='var(--header-3)'
                                        color='var(--color-on-primary)'
                                        colorScheme={'var(--color-on-primary)'}
                                    >
                                        Tambah
                                    </Text>
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Flex>
            </Flex>
        </>
    )
}

export default GreenhouseAdd