import React, { useEffect } from "react"
import { Box, Flex, Button, Image, Text, Input } from "@chakra-ui/react"
import { Formik, Form } from 'formik'
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/form-control"
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import { TabTitle } from "../../Utility/utility"
import axios from "axios"
import { loginApi } from "../../Utility/api_link"
const schema = yup.object({
  email: yup
    .string()
    .required("Email harus diisi"),
  password: yup
    .string()
    .min(6, "Password harus lebih dari 6 karakter")
    .required("Password harus diisi"),
})

const Login = () => {
  const navigate = useNavigate();

  const handleSubmitComplate = (emailValue, passwordValue) => {
    axios.post(loginApi, {
      email: emailValue,
      password: passwordValue,
    })
      .then((response) => {
        if (response.data == '' || response.data == ' ') {
          alert('Login gagal')
        }
        else {
          localStorage.setItem('token', response.data.data.accessToken)
          navigate('/unit/dashboard')
        }
      })
      .catch((error) => console.log(error))
  }

  const checkToken = () => {
    if (localStorage.getItem('token') != null) {
      navigate('/unit/dashboard')
    }
  }

  useEffect(() => {
    checkToken()

  }, [])


  TabTitle("Login - FANTASTIS ADIL")
  return (

    <Flex backgroundColor={"var(--color-on-primary)"} width='100%' height="100vh" alignItems='center' justifyContent='center'>
      <Flex flexDir={'column'} backgroundColor={"#607286"} width='100%' height="100%" alignItems='center' justifyContent='center' display={{ base: 'none', md: 'none', lg: 'flex' }}>
        <Image position={'Relative'} width={'80%'} maxWidth={'400px'} src="/logofa.png" />
        <Text p={3} fontWeight={'semibold'} fontFamily={'var(--font-family-secondary)'} fontSize={'var(--header-3)'} color={'#fff'} >Smart Fertilization Tanaman Melon Greenhouse ITERA Berbasis IoT dan Machine Learning</Text>
      </Flex>
      <Flex backgroundColor={{ lg: "#46525F" }} width='100%' height="100%" alignItems={{ lg: 'center' }} justifyContent='center'>
        <Box max-width='649px' borderRadius={'20px'} display="flex" gap="40px" flexDirection={"column"} size={'md'} width={{ base: '100%', md: '80%' }} padding="90px 50px 90px 50px" backgroundColor={"#607286"} justifyContent={{ lg: 'center' }} textAlign='center' alignItems='center'>
          <Image sizes="md" display={{ base: 'flex', lg: 'none' }} position={'Relative'} width={'80%'} maxWidth={'200px'} src="/logofa.png" />
          <Text size='md' fontWeight='bold' fontFamily='var(--font-family-secondary)' fontSize='var(--header-2)' color='var(--color-primer)' >Masuk</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={(values, actions) => {
              actions.resetForm()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form  onSubmit={handleSubmit}>
                <FormControl size={'md'} marginTop={'20px'} isInvalid={errors.email && touched.email} >
                  <FormLabel htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    backgroundColor={'#fff'}
                    size={'md'}
                    marginTop={'0 auto'}
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant='outline'
                    placeholder="Masukkan email"
                  />
                  <FormErrorMessage>
                    {errors.email}
                  </FormErrorMessage>
                </FormControl>
                <FormControl size={'md'} marginTop={'20px'} isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">
                    Password
                  </FormLabel>
                  <Input
                    size={'md'}
                    margin={'0 auto'}
                    variant='outline'
                    backgroundColor={'#fff'}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Masukkan password"
                    required='password harus diisi'
                    validate={value => value.length < 6 ? 'Password harus lebih dari 6 karakter' : null}
                  />
                  <FormErrorMessage>
                    {errors.password}
                  </FormErrorMessage>
                </FormControl>
                {/* <Link to={"/unit/dashboard"}> */}
                <Button
                  marginTop={'44px'}
                  width="100%"
                  height="50px"
                  borderRadius="10px"
                  backgroundColor="var(--color-primer)"

                  type="submit"
                  className="btn-login"
                  onClick={() => {
                    handleSubmitComplate(values.email, values.password)
                  }}>
                  <Text fontWeight='bold' fontFamily='var(--font-family-secondary)' fontSize='var(--header-3)' color='var(--color-on-primary)' >
                    Masuk
                  </Text>
                </Button>
                {/* </Link> */}
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Flex>
  )
};
export default Login