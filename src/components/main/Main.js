import React from "react";
import { Route, Routes } from "react-router-dom";
import Favourites from "../../pages/favourites/Favourites";
import Home from "../../pages/home/Home";
import Reservations from "../../pages/reservations/Reservations";
import Dashboard from "../../pages/dashboard/Dashboard";
import Page from "../../pages/page/Page";

const Main = (props) => {
	console.log(props);

	return (
		<main>
			{props.pages.map((page) => (
				<li key={page.id}>
					{/* <Route path={`/${page.slug}`} element={<Page />} /> */}
					<h2>{page.name}</h2>
				</li>
			))}
			<Routes>
				{/* <Route exact path={"/"} element={<Home />} />
				<Route path={"/favourites"} element={<Favourites />} />
				<Route path={"/reservations"} element={<Reservations />} />
				<Route path={"/dashboard"} element={<Dashboard />} /> */}
			</Routes>
		</main>
	);
};

export default Main;
