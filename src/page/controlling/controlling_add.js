import React, { useState, useEffect } from 'react'
import {
    Flex,
    Image,
    Text,
    Input,
    Icon,
    calc,
    Circle,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select,
} from '@chakra-ui/react'
import { useParams,useNavigate } from "react-router";
import * as yup from "yup"
import { Link } from "react-router-dom";
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { routePageName } from '../../redux/action';
import { TabTitle } from '../../Utility/utility';
import { getApiGreenhouse,addActuatorApi } from '../../Utility/api_link';
import axios from 'axios';
import Loading from "../../component/loading/loading";
import iconsList from '../../Utility/icon_list_aktuator';

const schema = yup.object({
    name: yup
        .string()
        .required("Nama harus diisi"),
    icon: yup
        .string()
        .required("Ikon harus diisi"),
    color: yup
        .string()
        .required("Warna harus diisi"),
})
const Controlling_Add = () => {
    TabTitle("Tambah Aktuator - ITERA Hero")
    const { id } = useParams();
    const navigate = useNavigate();
    const [dataApi, setDataApi] = useState(null);
    const [iconSelected, setIconSelected] = useState('');
    const getDataApi = async () => {
        axios.get( getApiGreenhouse + id, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }}
            )
            .then(response => {
                setDataApi(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const dispatch = useDispatch()

    useEffect(() => {
        getDataApi()
        return () => {
            dispatch(routePageName('Controlling'))
        };
    }, []);

    return (
        <>
            {dataApi == null ? <Loading />:
        <Flex
            w='100%'
            flexDir={'column'}
        >
            <Flex width='100%' >
                <Link to={'/unit/controlling'}>
                    <Flex marginRight={'2'}>
                        <Text fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}>
                            List Controlling pada Greenhouse
                        </Text>
                    </Flex>
                </Link>
                <Flex marginRight={'2'}>
                    <Text fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}> {'>'} </Text>
                </Flex>
                <Link>
                <Flex>
                        {
                            dataApi.id == id ? (
                                <Text fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}> {dataApi.name} </Text>
                            ) : (
                                <Text fontWeight={'semibold'} fontSize={'var(--header-3)'} color={'var(--color-primer)'}> {dataApi.name} </Text>
                            )
                        }
                    </Flex>
                </Link>
            </Flex>
            <Formik
            validationSchema={schema}
            validateOnChange={false}
            validateOnBlur={false}
                initialValues={{
                    name : '',
                    icon : '',
                    color : '',
                    id_greenhouse : id,
                }
                } 
                onSubmit={(values,{ setSubmitting }) => {
                    setTimeout(() => {
                        const submitedData = new FormData();
                        submitedData.append('name', values.name);
                        submitedData.append('icon', values.icon);
                        submitedData.append('color', values.color);
                        submitedData.append('id_greenhouse', values.id_greenhouse);
                        axios.post(addActuatorApi, submitedData, {
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                                'content-type': 'multipart/form-data'
                            }
                        })
                        .then((response) => {
                            if (response.status === 201) {
                                alert("Data berhasil ditambahkan")
                                navigate(-1)
                            } else {
                                alert("Data gagal ditambahkan")
                            }
                        })
                        .catch((error) => {})
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ values,
                    errors,
                    touched,
                    handleChange,
                    setFieldValue,
                    handleBlur,
                    handleSubmit,
                    isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormControl marginTop={'20px'} isInvalid={errors.name && touched.name}>
                            <FormLabel color={'var(--color-primer)'} >
                                Name
                            </FormLabel>
                            <Input
                                color={'var(--color-primer)'}
                                maxWidth={'100%'}
                                marginTop={'0 auto'}
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outline'
                                placeholder="Name..." />
                            <FormErrorMessage>
                                {errors.name}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl marginTop={'20px'} isInvalid={errors.icon && touched.icon}>
                            <FormLabel color={'var(--color-primer)'}>
                                Icon
                            </FormLabel>
                            <Select color={'var(--color-primer)'}
                                onChange={(e) => {
                                    setFieldValue('icon', e.target.value);
                                    setIconSelected(e.target.value)
                                }}
                                onBlur={handleBlur}
                                value={values.icon}
                                name="icon"
                                id="icon">
                                <option value="" selected>
                                    Pilih Icon
                                </option>
                                {iconsList.map((item) => (
                                    <option value={item.icon} color={'var(--color-primer)'}>
                                        {item.nama}
                                    </option>
                                )
                                )
                                }
                            </Select>
                            <Flex m={'15px'}>
                                <Image src={iconSelected} />
                            </Flex>
                            <FormErrorMessage>
                                {errors.icon}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl marginTop={'20px'} isInvalid={errors.color && touched.color}>
                            <FormLabel color={'var(--color-primer)'}>
                                Warna
                            </FormLabel>
                            <Select
                                color={'var(--color-primer)'}
                                maxWidth={'100%'}
                                marginTop={'0 auto'}
                                type="text"
                                name="color"
                                value={values.color}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outline'
                                >
                                <option value="" >
                                    Pilih Warna
                                </option>
                                {iconsList.map((item) => (
                                    <option value={item.color} color={'var(--color-primer)'}>
                                        {item.nama}
                                    </option>
                                )
                                )
                                }
                            </Select>
                            <Flex m={'15px'}>
                                    <Circle bg={values.color} size="30px" />
                            </Flex>
                            <FormErrorMessage>
                                {errors.color}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <Input
                                type="hidden"
                                value={id}
                                name="id_greenhouse"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                variant='outline'
                                placeholder="id..." />
                        </FormControl>
                        <Link to={'/unit/controlling'}>
                            <Button
                                marginTop={'44px'}
                                width="100%"
                                height="50px"
                                borderRadius="10px"
                                backgroundColor="var(--color-primer)"
                                type="submit"
                                className="btn-login"
                                disabled={isSubmitting}
                                onClick={handleSubmit}
                            >
                                <Text fontWeight='bold' fontFamily='var(--font-family-secondary)' fontSize='var(--header-3)' color='var(--color-on-primary)'>
                                    Tambah
                                </Text>
                            </Button>
                        </Link>
                    </Form>
                )}
            </Formik> 
        </Flex>
        }
        </>
    )
}
export default Controlling_Add