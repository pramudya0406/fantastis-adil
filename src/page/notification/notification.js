import React, { useState, useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import CardNotification from "../../component/card_notification/card_notification";
import { TabTitle } from "../../Utility/utility";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getNotificationByUserId } from "../../Utility/api_link";
import Loading from "../../component/loading/loading";

const Notification = () => {
	TabTitle("Notifikasi - ITERA Hero");
	const navigate = useNavigate();

	const [dataNotification, setDataNotification] = useState(null);
	const header = localStorage.getItem("token");
	const dispatch = useDispatch();

	const getNotificationData = async () => {
		await axios
			.get(getNotificationByUserId, {
				headers: {
					Authorization: "Bearer " + header,
				},
			})
			.then((response) => {
				setDataNotification(response.data.data);
				console.log(response.data.data);
			})
			.catch((error) => {
				localStorage.clear();
				navigate("/login");
			});
	};

	useEffect(() => {
		getNotificationData();
		return () => {
			dispatch(routePageName("History Notification"));
		};
	}, []);

	return (
		<>
			{dataNotification == null ? (
				<Loading />
			) : (
				<Flex gap={"30px"} width={"100%"} flexDir={"column"}>
					<Flex w="100%" justifyContent="space-between">
						<Text
							fontWeight={"semibold"}
							fontSize={"var(--header-3)"}
							color={"var(--color-primer)"}>
							All Notifications
						</Text>
					</Flex>
					<Flex gap={"20px"} width={"100%"} flexDir={"column"}>
						{dataNotification.slice(0, 6).map((item, index) => {
							return <CardNotification key={index} data={item} index={index} />;
						})}
					</Flex>
				</Flex>
			)}
		</>
	);
};
export default Notification;
