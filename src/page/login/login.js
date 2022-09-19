import { Box, Flex, Button, Image, Text,Input} from "@chakra-ui/react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {FormControl,FormLabel,FormErrorMessage} from "@chakra-ui/form-control"
import * as yup from "yup"
const schema = yup.object({
	email: yup
		.string()
		.required("Email harus diisi"),
	password: yup.string().required("Password harus diisi"),
})

const Login = () => {
  return (
    <Flex backgroundColor={"var(--color-on-primary)"} width='100%' height ="100vh" alignItems = 'center' justifyContent = 'center'>
         <Flex flexDir={'column'} backgroundColor={"var(--color-on-primary)"} width='100%' height ="100%" alignItems = 'center' justifyContent = 'center' display={{ base: 'none', md: 'none', lg: 'flex' }}>
            <Image position={'Relative'} width={'80%'} maxWidth={'400px'} src="https://res.cloudinary.com/diyu8lkwy/image/upload/v1663418492/itera%20herro%20icon/Frame_3_2_3_1_hfojfh.png"/>
            <Text p={3} fontWeight={'semibold'} fontFamily={'var(--font-family-secondary)'} fontSize={'var(--header-3)'} color={'{var(--color-primer)}'} >Kerjasama ITERA dan PT. Kharisma Agri Inovasi</Text>
         </Flex>
         <Flex backgroundColor={{lg:"var(--color-primer)"}}  width='100%' height ="100%" alignItems = {{lg:'center'}} justifyContent = 'center'>
           <Box max-width = '649px' borderRadius={'20px'} display="flex" gap="40px" flexDirection={"column"} width={{base:'100%',md:'80%'}} padding="90px 50px 90px 50px" backgroundColor={"var(--color-on-primary)"} justifyContent = {{lg:'center'}} textAlign='center' alignItems = 'center'>
              <Image display={{ base: 'flex', lg: 'none'}} position={'Relative'} width={'80%'} maxWidth={'200px'} src="https://res.cloudinary.com/diyu8lkwy/image/upload/v1663418492/itera%20herro%20icon/Frame_3_2_3_1_hfojfh.png"/>
              <Text fontWeight='bold' fontFamily='var(--font-family-secondary)' fontSize='var(--header-2)' color='var(--color-primer)' >Masuk</Text>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={schema}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2))
                }}
              >
                {({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
						}) =>(
                  <Form onSubmit={handleSubmit}>
                    <FormControl  marginTop={'20px'}isInvalid={errors.email && touched.email} >
                      <FormLabel htmlFor="email">
                          Email
                      </FormLabel>
                      <Input 
                        width={'420px'}
                        maxWidth={'100%'}
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
                    <FormControl marginTop={'20px'} isInvalid={!!errors.password&&touched.password}>
                      <FormLabel htmlFor="password">
                          Password
                      </FormLabel>
                      <Input
                        width={'420px'}
                        maxWidth={'100%'}
                        margin={'0 auto'}
                        variant='outline'
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Masukkan password"
                        required = 'password harus diisi'
                        validate={value => value.length < 6 ? 'Password harus lebih dari 6 karakter' : null}
                      />
                      <FormErrorMessage>
                        {errors.password}
                      </FormErrorMessage>
                    </FormControl>
								<Button
                  marginTop={'44px'}
                  width="100%"
                  height="50px"
                  borderRadius="10px"
                  backgroundColor="var(--color-primer)"
									type="submit"
									className="btn-login"
									onClick={() => {
                    handleSubmit();
                  }}>
								{">"}
                  <Text fontWeight='bold' fontFamily='var(--font-family-secondary)' fontSize='var(--header-3)' color='var(--color-on-primary)' >
  									Masuk
                  </Text>
								</Button>
                  </Form>
            )}
              </Formik>
           </Box>
         </Flex>
    </Flex>
  )};
export default Login