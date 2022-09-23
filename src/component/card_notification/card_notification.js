import React, { useState } from "react";
import { Flex, Image, Box, Center, Text, Icon, Button } from "@chakra-ui/react";
import { RiMapPinFill } from "react-icons/ri";
import { CloseButton } from "@chakra-ui/react";
import moment from "moment";

const CardNotification = (props) => {
	let data = props.data;

	// const sliceDateTime = (date) => {
	// 	let yearSlice = date.slice(0, 4);
	// 	let monthSlice = date.slice(5, 7);
	// 	let daySlice = date.slice(8, 10);
	// 	let result = [yearSlice, monthSlice, daySlice];
	const eleminateZ = (date) => {
		let result = date.replace("T", " ").replace("Z", " +0700");
		console.log(result);
		return result;
	};
	// 	return result;
	// };
	// moment.locale("in");
	var idLocale = require("moment/locale/id");
	moment.locale("id", idLocale);
	return (
		<Flex
			w={"100%"}
			h={"80%"}
			bg={"#ffff"}
			borderRadius={"xl"}
			borderWidth="1px"
			borderColor={"#D9D9D9"}
			boxShadow={"md"}
			justify={"space-between"}
			flexDir={"row"}
			alignItems="center"
			padding={"2%"}>
			<Flex justify={"start"} gap={70} flexDir={"row"} alignItems="center">
				<Flex
					w={"65px"}
					h={"56px"}
					borderRadius={"10px"}
					justify="center"
					align={"center"}>
					<Image src="https://res.cloudinary.com/diyu8lkwy/image/upload/v1663905296/itera%20herro%20icon/icon-notif_owss6p.png" />
				</Flex>
				<Flex flexDir={"column"} gap={3}>
					<Text
						fontWeight={"semibold"}
						fontSize={"var(--header-3)"}
						color={"var(--color-primer)"}>
						{data.detail}
					</Text>
					<Flex flexDir={"row"} gap={2} alignItems={"center"}>
						<Icon as={RiMapPinFill} w={25} h={25} color={"black"} />
						<Text color={"var(--color-primer)"} fontSize={"var(--header-5)"}>
							{data.greenhouse_loc}
						</Text>
					</Flex>
					<Text
						fontWeight={"semibold"}
						fontSize={"var(--header-3)"}
						color={"var(--color-grey)"}>
						{moment(eleminateZ(data.created_at)).startOf("seconds").fromNow()}
					</Text>
				</Flex>
			</Flex>
			<CloseButton w={35} h={35} color={"black"} size={20} />
		</Flex>
	);
};

export default CardNotification;
