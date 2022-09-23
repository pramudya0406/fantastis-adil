import React, { useState, useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import CardNotification from "../../component/card_notification/card_notification";

const Notification = () => {
	const [data, setData] = useState([
		{
			code: 200,
			status: "OK",
			data: [
				{
					id: 6,
					detail: "Ada buah yang rusak dan butuh pupuk",
					created_at: "2022-09-13T11:02:28.000Z",
					type: "Cek deh",
					status: "1",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 7,
					detail: "Ada buah yang rusak dan butuh pupuk",
					created_at: "2022-09-13T11:02:54.000Z",
					type: "Cek deh",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 8,
					detail: "Ada buah yang rusak dan butuh air",
					created_at: "2022-09-13T11:07:29.000Z",
					type: "Cek deh",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 9,
					detail: "Ada buah yang rusak dan butuh air",
					created_at: "2022-09-13T20:04:05.000Z",
					type: "Cek deh 1",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 10,
					detail: "Ada buah yang rusak dan butuh air",
					created_at: "2022-09-13T20:07:33.000Z",
					type: "Cek deh 1",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 11,
					detail: "Ada buah yang rusak dan butuh air",
					created_at: "2022-09-13T20:08:26.000Z",
					type: "Cek deh 2",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 12,
					detail: "Di rumah hiaju 12",
					created_at: "2022-09-15T12:13:15.000Z",
					type: "Parah",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 13,
					detail: "Di rumah hiaju 13",
					created_at: "2022-09-15T12:14:36.000Z",
					type: "Parah ",
					status: "0",
					id_actuator: 2,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 14,
					detail: "Di rumah hiaju 13",
					created_at: "2022-09-15T12:14:55.000Z",
					type: "Parah ",
					status: "0",
					id_actuator: 3,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
				{
					id: 15,
					detail: "Di rumah hiaju 13",
					created_at: "2022-09-15T12:23:54.000Z",
					type: "Parah ",
					status: "0",
					id_actuator: 3,
					id_greenhouse: 2,
					greenhouse_loc: "Bogor",
				},
			],
		},
	]);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(routePageName("History Notification"));
		};
	}, []);

	return (
		<>
			<Flex gap={"30px"} width={"100%"} flexDir={"column"}>
				<Flex w="100%" justifyContent="space-between">
					<Text
						fontWeight={"semibold"}
						fontSize={"var(--header-3)"}
						color={"var(--color-primer)"}>
						All Notifications
					</Text>
				</Flex>
				<Flex>
					<CardNotification />
				</Flex>
			</Flex>
			{/* <div
            >
                Hallo notification
            </div> */}
		</>
	);
};
export default Notification;
