import React, { useState, useEffect } from "react";
import "./monitoring.css";
import {
	Text,
	Button,
	Select,
	Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import { TabTitle } from "../../Utility/utility";
import TableMonitoring from "../../component/table/monitoring_table";
import { greenhouseByUserId } from "../../Utility/api_link";
import axios from "axios";
import Loading from "../../component/loading/loading";

const Monitoring = () => {
	TabTitle("Monitoring - ITERA Hero");
	const navigate = useNavigate();
	const [data, setData] = useState("36");
	const [dataApi, setDataApi] = useState(null);
	const header = localStorage.getItem("token");

	const getApiGreenhouse = async () => {
		await axios
			.get(greenhouseByUserId, {
				headers: {
					Authorization: "Bearer " + header,
				},
			})
			.then((response) => setDataApi(response.data.data))
			console.log(dataApi)
			.catch((error) => {
				localStorage.clear();
				navigate("/login");
			});
	};
	const dispatch = useDispatch();
	useEffect(() => {
		getApiGreenhouse();
		return () => {
			dispatch(routePageName("Monitoring"));
		};
	}, []);
	return (
		<>
			{dataApi == null ? (
				<Loading />
			) : (
				<Flex gap={"30px"} width={"100%"} flexDir={"column"}>
					<Flex justifyContent={"space-between"} width="100%">
						<Link>
							<Text
								fontWeight={"semibold"}
								fontSize={"var(--header-3)"}
								color={"var(--color-primer)"}>
								List Sensor pada Greenhouse
							</Text>
						</Link>
					</Flex>
					<Flex
						alignContent={"center"}
						alignItems={"center"}
						justifyContent={"space-between"}>
						<Flex width={"30%"}>
							<Formik
								initialValues={{
									greenhouse: "",
								}}
								onSubmit={(values) => {
									setData(values.greenhouse);
								}}>
								{({
									values,
									handleChange,
									handleSubmit,
									isSubmitting,
									setFieldValue,
								}) => (
									<form onSubmit={handleSubmit}>
										<Flex
											alignContent={"center"}
											alignItems={"center"}
											justify={"space-between"}>
											<Flex height={'auto'} width={"100%"}>
												<Select
													onChange={(e) => {
														setFieldValue("id", e.target.value);
														setData(e.target.value);
													}}
													value={values.id}
													placeholder="Pilih Greenhouse"
													color={"var(--color-border)"}
													width={"100%"}
													height={'auto'}
													borderRadius={'16px'}
													border={'1px solid var(--color-border)'}>
													{dataApi.map((item, index) => {
														return (
															<option
																color={"var(--color-border)"}
																key={index}
																value={item.id}>
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
						{data === "" ? (
							<></>
						) : (
							<Link to={"/unit/monitoring/add/" + data}>
								<Button
									data={{ name: data }}
									type="submit"
									bg={"var(--color-primer)"}>
									Tambah
								</Button>
							</Link>
						)}
					</Flex>
					{data === "" ? (
						<></>
					) : (
						<TableMonitoring
							data={{
								id: data,
							}}
						/>
					)}
				</Flex>
			)}
		</>
	);
};
export default Monitoring;
