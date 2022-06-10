import React from "react";
import { Routes, Route} from "react-router-dom";
import AccountDetails from "./AccountDetails";
import ReservationDetails from "./admin/ReservationDetail";
import ReservationsList from "./admin/Reservations";
import AllItems from "./admin/AllItems";
import ItemForm from "./ItemForm";
import MyItems from "./MyItems";
import "./dashboard.scss";
import DashboardHeader from "../../components/header/dashboardHeader";
// import axios from "axios";

const Dashboard = () => {
	// const src = "https://storage.cloud.google.com/wrinkle/";
	// const imgName = "photo-1591047139829-d91aecb6caea.jpg";
	// const images = await axios.get()

	return (
		<div className="Dashboard">
			<DashboardHeader/>
			{/* <img src={src + imgName} alt="test jacket" style={{maxWidth: "100%"}}/> */}
			<Routes>
				<Route path={"/"} element={<MyItems />} />
				<Route path={"/account-details"} element={<AccountDetails />} />
				<Route path={"/my-items"} element={<MyItems />} />
				<Route path={"/my-items/add"} element={<ItemForm />} />
				<Route path={"/my-items/edit/:id"} element={<ItemForm />} />
				<Route path={"/items"} element={<AllItems />} />
				{/* <Route path={"/items/:status"} element={<AllItems />} /> */}
				<Route path={"/items/:id"} element={<ItemForm />} />
				<Route path={"/reservations"} element={<ReservationsList />} />
				<Route path={"/reservations/:id"} element={<ReservationDetails />} />
			</Routes>
		</div>
	);
}

export default Dashboard;
