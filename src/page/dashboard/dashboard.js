import React, { useState, useEffect } from "react";
import { Flex, Image, Text, Wrap } from "@chakra-ui/react";
import CardDashboard from "../../component/card_dashboard/card_dashboard";
import { GiGreenhouse } from "react-icons/gi";
import { MdMonitor } from "react-icons/md";
import { AiOutlineControl } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import { TabTitle } from "../../Utility/utility";
import axios from "axios";
import Loading from "../../component/loading/loading";
import { dashboardApi } from "../../Utility/api_link";

const Dashboard = () => {
	TabTitle("Dashboard - ITERA Hero")
	const dispatch = useDispatch();

	const [dataApi, setDataApi] = useState(null)

	const header = localStorage.getItem('token')

	const getApiDashboard = async () => {
		await axios.get(dashboardApi, {
			headers: {
				'Authorization': 'Bearer ' + header
			}
		})
			.then(response => setDataApi(response.data.data))
			.catchcatch(error => console.log(error))
	}

	useEffect(() => {
		getApiDashboard()
		return () => {
			dispatch(routePageName("Dashboard"));
		};
	}, []);

	return (
		<>
			{dataApi == null ? <Loading />
				: <Flex w="100%" flexDir={"column"}>
					<Flex justify="center">
						<Wrap spacing="50px" justify="center">
							<CardDashboard
								data={{
									value: dataApi.greenhouse,
									icon: GiGreenhouse,
									name: "Jumlah GreenHouse",
								}}
							/>
							<CardDashboard
								data={{
									value: dataApi.sensor,
									icon: MdMonitor,
									name: "Jumlah Sensor",
								}}
							/>
							<CardDashboard
								data={{
									value: dataApi.actuator,
									icon: AiOutlineControl,
									name: "Jumlah Actuator",
								}}
							/>
						</Wrap>
					</Flex>

					<Flex
						w="100%"
						flexDir={"column"}
						justify="center"
						align={"center"}
						marginTop={"100px"}>
						<Text color={"black"} fontWeight={'semibold'} fontSize={'var( --header-3)'} fontFamily={'var(--font-family-secondary)'} marginBottom={"10px"} >
							Kolaborasi oleh :
						</Text>
						<Image
							src="https://res.cloudinary.com/diyu8lkwy/image/upload/v1663542541/itera%20herro%20icon/Frame_181_fmtxbh.png"
							marginBottom={"50px"}
						/>
					</Flex>
				</Flex>
			}
		</>
	);
};
export default Dashboard;
