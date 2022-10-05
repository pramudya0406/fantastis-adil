import { controllingApi  } from "../..//Utility/api_link";
import React, { useState, useEffect } from "react";
import {
  Table,
	Thead,
	Tbody,
	Button,
	Tr,
	Image,
	Th,
	Td,
	Box,
	TableContainer,
	Flex,
} from "@chakra-ui/react";
import { RiDeleteBinFill, RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/loading/loading";

const TableControlling = (props) => {
	const idApi = props.data.id
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
  
  const getApiControlling = async () => {
  const header = localStorage.getItem('token')
	await axios.get(controllingApi + idApi, {
			headers: {
					'Authorization': 'Bearer ' + header
			}
	})
	.then(response => { 
		setDataTable(response.data.data)
		setIsLoading(false)
	})
			.catch((error) => {
					localStorage.clear()
					navigate('/login')
			})
}
useEffect(() => {
  
  getApiControlling()
  return () => {
    
    setIsLoading(true)
    
  };
}, [idApi]);
  return (
    <>
      {dataTable == null || isLoading ? (
        <Loading />
      ) : (
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
							{dataTable.map((item,index) => {
									return (
										<Tr key={index}>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{index + 1}
											</Td>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item.name}
											</Td>
											<Td
												display={"flex"}
												justifyContent="center"
												alignItems={"center"}>
												<Image height={"30px"} src={item.icon} alt="icon" />
											</Td>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item.status_lifecycle}
											</Td>
											<Td display={"flex"}
												justifyContent="center"
												alignItems={"center"}>
												<Box width={'20px'} borderRadius={'100px'} height={'20px'} background={item.color}>
                        </Box>
											</Td>
											<Td textAlign={"center"}>
												<Flex justifyContent={"space-evenly"}>
													<Link
														to={{
															pathname: "/unit/controlling/edit/" + item.id,
														}}
														state={{
															data: item,
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
								})};     
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
      )}
    </>
  )
}
export default TableControlling;