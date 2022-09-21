import React, { useState } from 'react'
import {
    Flex,
    Image,
    Box,
    Center,
    Text,
    Icon,
    calc,
    Button,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'
import * as yup from "yup"
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
const schema = yup.object({
	nama: yup
		.string()
		.required("Nama harus diisi"),
	ikon: yup
        .string()  
        .required("Ikon harus diisi"),
    satuan_ukur: yup
        .string()
        .required("Satuan Ukur harus diisi"),
    merek: yup 
        .string()
        .required("Merek harus diisi"),
    kategori: yup
        .string()
        .required("Kategori harus diisi"),
})
const   Monitoring_Add = () => {
    return (
            <Flex
                w='100%'
                flexDir={'column'}
            >
                <Flex width='100%' >
                <Link to={'/unit/monitoring'}>
                <Flex marginRight={'2'}>
                    <Text fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}>
                        List Sensor pada Greenhouse
                    </Text>
                </Flex>
                </Link>
                <Flex marginRight={'2'}>
                    <Text  fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}> {'>'} </Text>
                </Flex>
                <Link>
                <Flex>
                    <Text  fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}> Add </Text>
                </Flex>
                </Link>
            </Flex>
                <Formik 
                initialValues={{
                    nama:'',
                    ikon:'',
                    satuan_ukur:'',
                    merek:'',
                    kategori:'',
                }
                }>
                    {({ values,
						errors,
						touched,
                        handleChange,
                        handleBlur, 
                        handleSubmit, 
                        isSubmitting}) => (
                        <Form onSubmit={handleSubmit}>
                            <FormControl marginTop={'20px'}isInvalid={errors.nama && touched.nama}>
                                <FormLabel >
                                    Nama
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Ikon
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Satuan Ukur
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Merek
                                </FormLabel>
                            </FormControl>
                            <FormControl>
                                <FormLabel>
                                    Kategori
                                </FormLabel>
                            </FormControl>
                        </Form>
                    )}
                </Formik>
            </Flex>
    )
}
export default Monitoring_Add