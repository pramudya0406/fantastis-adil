import { monitoringApi,deleteSensorApi  } from "../..//Utility/api_link";
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
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalHeader,
	ModalFooter,
	ModalBody,
	TableContainer,
	useDisclosure,
	Flex,
} from "@chakra-ui/react";
import { RiDeleteBinFill, RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/loading/loading";

const TableMonitoring = (props) => {
	const idApi = props.data.id
	function deleteItem (id) {
		axios.delete(deleteSensorApi+id, {
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			}
		})
			.then(response => {
				window.location.reload()
			}
			)
			.catch((error) => {
				console.log(error)
			}
			)
	}
  const navigate = useNavigate();
  const [dataTable, setDataTable] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getApiMonitoring = async () => {
  const header = localStorage.getItem('token')
	await axios.get(monitoringApi + idApi, {
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
  
  getApiMonitoring()
  return () => {
    
    setIsLoading(true)
    
  };
}, [idApi]);
  
  return (
    <>
      {dataTable == null  || isLoading ? (
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
								<Th textAlign={"center"}>Satuan Ukur</Th>
								<Th textAlign={"center"}>Merek</Th>
                <Th textAlign={"center"}>Warna</Th>
                <Th textAlign={"center"}>Range Min</Th>
                <Th textAlign={"center"}>Range Max</Th>
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
												{item.unit_measurement}
											</Td>
											<Td textAlign={"center"} color={"var(--color-primer)"}>
												{item.brand}
											</Td>
											<Td display={"flex"}
												justifyContent="center"
												alignItems={"center"}>
												<Box width={'30px'} borderRadius={'100px'} height={'30px'}  background={item.color}>
                        </Box>
											</Td>
                      <Td textAlign={"center"} color={"var(--color-primer)"}>
                        {item.range_min}
                      </Td>
                      <Td textAlign={"center"} color={"var(--color-primer)"}>
                        {item.range_max}
                      </Td>
											<Td textAlign={"center"}>
												<Flex justifyContent={"space-evenly"}>
													<Link
														to={{
															pathname: "/unit/monitoring/edit/" + item.id,
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
													<Modal  isOpen={isOpen} onClose={onClose}>
														<ModalOverlay />
														<ModalContent>
															<ModalHeader>Peringatan !</ModalHeader>
															<ModalCloseButton />
															<ModalBody>
																Apakah anda yakin ingin menghapus data ini?
															</ModalBody>
															<ModalFooter>
																<Button
																	colorScheme="blue"
																	onClick={() => {
																		deleteItem(item.id);
																	}}
																	mr={3}>
																	Hapus
																</Button>
																<Button 
																onClick={() =>{
																	onClose()
																}}
																variant="ghost">Batal</Button>
															</ModalFooter>
														</ModalContent>
													</Modal>
													<Button
														onClick={() => {
															onOpen();
														}}
														bg={"var(--color-on-primary)"}
														color={"var(--color-error)"}>
														<RiDeleteBinFill />
													</Button>
												</Flex>
											</Td>
										</Tr>
									);
							})}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
          )}
          </>
        )
      }
      export default TableMonitoring;