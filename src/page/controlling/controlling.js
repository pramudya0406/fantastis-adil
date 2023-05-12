import React, { useState, useEffect } from "react";
import "./controlling.css";
import { Text, Button, Select, Flex, Form } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { TabTitle } from "../../Utility/utility";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import axios from "axios";
import { greenhouseByUserId } from "../../Utility/api_link";
import Loading from "../../component/loading/loading";
import TableControlling from "../../component/table/controlling_table";
import { Formik } from "formik";

const Controlling = () => {
	TabTitle("Controlling - ITERA Hero");
	const navigate = useNavigate();
	const [dataApi, setDataApi] = useState(null);
	const [data, setData] = useState("36");
	const header = localStorage.getItem("token");

	const getApiGreenhouse = async () => {
		await axios
			.get(greenhouseByUserId, {
				headers: {
					Authorization: "Bearer " + header,
				},
			})
			.then((response) => setDataApi(response.data.data))
			.catch((error) => {
				localStorage.clear();
				navigate("/login");
			});
	};
	const dispatch = useDispatch();
	useEffect(() => {
		getApiGreenhouse();
		return () => {
			dispatch(routePageName("Controlling"));
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
								List Controlling pada Greenhouse
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
							<Link to={"/unit/controlling/add/" + data}>
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
						<TableControlling
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
export default Controlling;
