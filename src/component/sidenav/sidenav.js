import React, { useState } from "react";
import "./navigation.css";
import { Flex, Image, Box, Center } from "@chakra-ui/react";
import { FiHome, FiMonitor } from "react-icons/fi";
import { GiGreenhouse } from "react-icons/gi";
import { AiOutlineControl, AiOutlineHistory } from "react-icons/ai";
import NavItem from "../navitem/navitem";
import { useSelector, useDispatch } from "react-redux";
import { routePageName } from "../../redux/action";
import { Link } from "react-router-dom";

const SideNav = () => {
	const navSize = "large";

	const dispatch = useDispatch();

	const patchRoute = (data) => {
		dispatch(routePageName(data));
	};
	const { routeName } = useSelector((state) => state.userReducer);

	return (
		<>
			<Flex
				backgroundColor={"#607286"}
				display={{
					base: "none",
					lg: "flex",
				}}
				pos="sticky"
				h="100vh"
				boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
				w={"370px"}
				flexDir="column"
				justifyContent="space-between">
				<Flex
					flexDir="column"
					w="100%"
					as="nav"
					className="navbar">
					<Box paddingRight="5%">
						<Center>
							<Image src="/logofa.png" />
						</Center>
					</Box>

					<Link
						to={"/unit/dashboard"}
						onClick={() => {
							patchRoute("Dashboard");
						}}>
						<NavItem
							navSize={navSize}
							icon={FiHome}
							title="Dashboard"
							active={routeName === "Dashboard"}
						/>
					</Link>
					<Link
						to={"/unit/monitoring"}
						onClick={() => {
							patchRoute("Monitoring");
						}}>
						<NavItem
							navSize={navSize}
							icon={FiMonitor}
							title="Monitoring"
							active={routeName === "Monitoring"}
						/>
					</Link>
					<Link
						to={"/unit/controlling"}
						onClick={() => {
							patchRoute("Controlling");
						}}>
						<NavItem
							navSize={navSize}
							icon={AiOutlineControl}
							title="Controlling"
							active={routeName === "Controlling"}
						/>
					</Link>
					<Link
						to={"/unit/historynotifikasi"}
						onClick={() => {
							patchRoute("History Notification");
						}}>
						<NavItem
							navSize={navSize}
							icon={AiOutlineHistory}
							title="History Notification"
							active={routeName === "History Notification"}
						/>
					</Link>
				</Flex>
			</Flex>
		</>
	);
};
export default SideNav;
