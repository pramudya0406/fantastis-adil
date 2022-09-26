import React, { useState, useEffect } from "react";
import "./controlling.css";
import {
	Table,
	Thead,
	Tbody,
	Text,
	Button,
	Select,
	Tr,
	Image,
	Th,
	Td,
	Box,
	TableContainer,
	Flex,
} from "@chakra-ui/react";
import { RiDeleteBinFill, RiPencilFill, RiMapPinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";

const Controlling = () => {
	const [data, setData] = React.useState([
		{
			id: 1,
			name: "Greenhouse 1",
			info: [
				{
					id: 1,
					nomor: 1,
					icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1663229870/itera%20herro%20icon/Lovepik_com-400222655-test-tube_1_jhq5uo.png",
					life_cycle: "On",
					nama_alat: "Pompa Air",
					warna: "red",
				},
				{
					id: 2,
					nomor: 2,
					icon: "https://res.cloudinary.com/diyu8lkwy/image/upload/v1663229870/itera%20herro%20icon/Lovepik_com-400222655-test-tube_1_jhq5uo.png",
					life_cycle: "Off",
					nama_alat: "Kipas",
					warna: "red",
				},
			],
		},
	]);

	const columns = Array.from({ length: 100 });

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(routePageName("Controlling"));
		};
	}, []);

	return (
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
				justify={"space-between"}>
				<Flex width={"30%"}>
					<Select
						size="xs"
						borderRadius={"10"}
						color={"var(--color-primer)"}
						placeholder="Pilih Greenhouse">
						{data.map((item, index) => {
							return (
								<option key={index} value={item.id}>
									{item.name}
								</option>
							);
						})}
					</Select>
				</Flex>
				<Link to={"/unit/controlling/add"}>
					<Button bg={"var(--color-primer)"}>Tambah</Button>
				</Link>
			</Flex>

			<Box
				width={"100%"}
				borderRadius={"md"}
				boxShadow={"md"}
				bg={"var(--color-on-primary)"}
				justify="flex-start"
				mt={30}>
				<TableContainer
					borderRadius={"md"}
					bg={"white"}
					width="100%"
					overflowX="auto">
					<Table variant="simple">
						<Thead>
							<Tr
								textAlign={"center"}
								alignContent={"center"}
								alignItems={"center"}
								justifyContent={"center"}>
								<Th textAlign={"center"}>No</Th>
								<Th textAlign={"center"}>Nama Alat</Th>
								<Th textAlign={"center"}>Icon</Th>
								<Th textAlign={"center"}>Life Cycle</Th>
								<Th textAlign={"center"}>Warna</Th>
								<Th textAlign={"center"}>Aksi</Th>
							</Tr>
						</Thead>
						<Tbody>
							{data.map((item) => {
								return item.info.map((item2, index2) => {
									return (
										<Tr key={index2}>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item2.nomor}
											</Td>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item2.nama_alat}
											</Td>
											<Td
												display={"flex"}
												justifyContent="center"
												alignItems={"center"}>
												<Image height={"30px"} src={item2.icon} alt="icon" />
											</Td>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item2.life_cycle}
											</Td>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item2.warna}{" "}
											</Td>
											<Td textAlign={"center"}>
												<Flex justifyContent={"space-evenly"}>
													<Link
														to={{
															pathname: "/unit/controlling/edit/" + item2.id,
														}}
														state={{
															data: item2,
														}}>
														<Button
															bg={"var(--color-on-primary)"}
															color={"var(--color-info)"}>
															<RiPencilFill />
														</Button>
													</Link>
													<Button
														bg={"var(--color-on-primary)"}
														color={"var(--color-error)"}>
														<RiDeleteBinFill />
													</Button>
												</Flex>
											</Td>
										</Tr>
									);
								});
							})}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
		</Flex>
	);
};
export default Controlling;
