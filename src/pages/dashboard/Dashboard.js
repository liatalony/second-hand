import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AccountDetails from "./AccountDetails";
import ReservationDetails from "./admin/ReservationDetail";
import ReservationsList from "./admin/Reservations";
import AllItems from "./admin/AllItems";
import ItemForm from "./ItemForm";
import MyItems from "./MyItems";
import "./dashboard.scss";
import DashboardHeader from "../../components/header/dashboardHeader";

function Dashboard() {
	return (
		<div className="Dashboard">
			<DashboardHeader />
			<h1>Dashboard</h1>
			<Link to={"/dashboard/account-details"}>Account</Link>
			<Link to={"/dashboard/my-items"}>My Items</Link>
			<Link to={"/dashboard/my-items/add"}>Add item</Link>
			<Link to={"/dashboard/my-items/edit/:id"}>One item</Link>
			<Link to={"/dashboard/items"}>All Items</Link>
			<Link to={"/dashboard/items/:id"}>One Item</Link>
			<Link to={"/dashboard/reservations"}>Reservations</Link>
			<Link to={"/dashboard/reservations/:id"}>Reservation Details</Link>

			<Routes>
				<Route path={"/"} element={<MyItems />} />
				<Route path={"/account-details"} element={<AccountDetails />} />
				<Route path={"/my-items"} element={<MyItems />} />
				<Route path={"/my-items/add"} element={<ItemForm />} />
				<Route path={"/my-items/edit/:id"} element={<ItemForm />} />
				<Route path={"/items"} element={<AllItems />} />
				<Route path={"/items/:id"} element={<ItemForm />} />
				<Route path={"/reservations"} element={<ReservationsList />} />
				<Route path={"/reservations/:id"} element={<ReservationDetails />} />
			</Routes>
		</div>
	);
}

export default Dashboard;
