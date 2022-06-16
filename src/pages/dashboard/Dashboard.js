import React from "react";
import { Routes, Route} from "react-router-dom";
import AccountDetails from "./AccountDetails";
import ReservationDetails from "./admin/ReservationDetail";
import ReservationsList from "./admin/Reservations";
import AllItems from "./admin/AllItems";
import ItemForm from "./ItemForm";
import MyItems from "./MyItems";
import "./dashboard.scss";
import DashboardHeader from "../../components/header/DashboardHeader";
import RequireAuth from "../../components/requireAuth/RequireAuth";
import PersistLogin from "../../components/persistantLogin/PersistantLogin";

const Dashboard = () => {

	return (
		<div className="Dashboard">
			<DashboardHeader/>
			<Routes>
				<Route element={<PersistLogin/>}>
					<Route element={<RequireAuth allowedRole={1}/>}>
						<Route path={"/"} element={<MyItems />} />
						<Route path={"/account-details"} element={<AccountDetails />} />
						<Route path={"/my-items"} element={<MyItems />} />
						<Route path={"/my-items/add"} element={<ItemForm />} />
						<Route path={"/my-items/edit/:id"} element={<ItemForm />} />
					</Route>
					<Route element={<RequireAuth allowedRole={2}/>}>
						<Route path={"/items"} element={<AllItems />} />
						<Route path={"/items/view/:status"} element={<AllItems />} />
						<Route path={"/items/view/single-item/:id"} element={<AllItems />} />
						<Route path={"/reservations"} element={<ReservationsList />} />
						<Route path={"/reservations/:id"} element={<ReservationDetails />} />
					</Route>
				</Route>
			</Routes>
		</div>
	);
}

export default Dashboard;
