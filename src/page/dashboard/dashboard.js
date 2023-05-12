import React, { useState, useEffect } from "react";
import { Flex, Image, Text, Select, Wrap, Button, Menu, Box } from "@chakra-ui/react";
import CardDashboard from "../../component/card_dashboard/card_dashboard";
import { GiGreenhouse } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import { TabTitle } from "../../Utility/utility";
import axios from "axios";
import Loading from "../../component/loading/loading";
import { dashboardApi,greenhouseByUserId,paginationMonitoring } from "../../Utility/api_link";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import dashboardMenu from "../../Utility/dashboard_menu";
import CardSensor from "../../component/card_sensor/card_sensor";
import CardAktuator from "../../component/card_aktuator/card_aktuator";
const Dashboard = () => {
	TabTitle("Dashboard - FANTASTIS ADIL")
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const [data, setData] = useState('36');

	const [dataApi, setDataApi] = useState(null)
	const [selected, setSelected] = useState(1)
	const [dataGreenhouse, setDataGreenhouse] = useState(null)
	const [dataSensor, setDataSensor] = useState(null)
	
	const getApiDashboard = async () => {
		const header = localStorage.getItem('token')
		await axios.get(dashboardApi, {
			headers: {
				'Authorization': 'Bearer ' + header
			}
		})
			.then(response => setDataApi(response.data.data))
			.catch((error) => {
				localStorage.clear()
				navigate('/login')
			})
		}
	const getApiGreenhouse = async () => {
	const header = localStorage.getItem('token')
    await axios.get(greenhouseByUserId, {
        headers: {
            'Authorization': 'Bearer ' + header
        }
    })
        .then(response => setDataGreenhouse(response.data.data))
        .catch((error) => {
            localStorage.clear()
            navigate('/login')
        })
}

	useEffect(() => {
		getApiGreenhouse()
		getApiDashboard()
		return () => {
			dispatch(routePageName("Dashboard"));
		};
	}, []);
	


	return (
		<>
			{dataApi == null || dataGreenhouse == null ? <Loading />
				: <Flex w="100%"  flexDir={"column"} >
					<Flex  justify="center" mt={'-30px'}>
						<Wrap  spacing="50px" justify="center">
							
							<CardDashboard
								data={{
									value: 5,
									icon: MdMonitor,
									name: "Jumlah Sensor",
								}}
							/>
							<CardDashboard
								data={{
									value: 5,
									icon: AiOutlineControl,
									name: "Jumlah Actuator",
								}}
							/>
						</Wrap>
					</Flex>
					<Flex justifyContent={'flex-start'} width="100%">
			</Flex>
			<Wrap   mt={'30px'}  flexDir={'row'} >
			{
				dashboardMenu.map((item, index) => {
					return (
						<Flex key={index} mr={'3'} width={'169px'} height={'44px'}>
							<Button onClick={()=> setSelected(item.id)} w="100%" height={'100%'} borderRadius={'16'} border={selected == item.id ? null : '1px solid var(--color-primer)'} bg={ selected == item.id ? 'var(--color-primer)': 'var(--color-on-primary)' } flexDir={"row"} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
								<Text fontWeight={'semibold'} color={selected==item.id?  'var(--color-surface)': 'var(--color-on-background'} size={'var(--header-3)'}>{item.name}</Text>
							</Button>
						</Flex>
						
					)
				})
			}
			</Wrap>
			<Flex
			  mt={'30px'}
				alignContent={"center"}
				alignItems={"center"}
				justifyContent={'flex-start'}>
				<Flex width={"30%"}>
					<Formik
						initialValues={{
							greenhouse: "",
						}}
						onSubmit={(values) => {
							setData(values.greenhouse)
						}}>
						{({
							values,
							handleChange,
							handleSubmit,
							isSubmitting,
							setFieldValue,
						}) => (
							<form onSubmit={handleSubmit}>
								<Flex alignContent={"center"}
											alignItems={"center"}
											justify={"space-between"}> 
								<Flex height={'auto'} width={"100%"}>
									<Select
										onChange={(e) => {
											setFieldValue('id', e.target.value);
											setData(e.target.value)
										}}
										value={values.id}
										placeholder="Pilih Greenhouse"
										color={"var(--color-border)"}
										width={"100%"}
										height={'auto'}
										borderRadius={'16px'}
										border={'1px solid var(--color-border)'}>
										{dataGreenhouse.map((item, index) => {
											return (
												<option
													color={"var(--color-border)"}
													key={index}
													value={item.id = 36}>
													{item.name}
												</option>
											);
										})}
									</Select>
								</Flex>
								</Flex>
							</form>
						)}
					</Formik>
				</Flex>
			</Flex>
			<Wrap justify={'center'}>
				{
					selected === 1 && data !== ''  ? <CardSensor data={{id : data}}  /> :  <></>
				}
				{
					selected === 2 && data !== '' ? <CardAktuator data = {{id: data}} /> : <></>
				}
		
			</Wrap>
			</Flex>
			}
		</>
	);
};
export default Dashboard;
