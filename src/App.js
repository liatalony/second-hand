import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { request } from "graphql-request";
import "./app.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Favourites from "./pages/favourites/Favourites";
import Reservations from "./pages/reservations/Reservations";
import Page from "./pages/page/Page";
import Shop from "./pages/shop/Shop";
import SingleItem from "./pages/single-item/SingleItem";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
	const [pages, setPages] = useState(null);
	const [roles, setRoles] = useState(false);

	console.log(pages);

	useEffect(() => {
		console.log("running");
		getRoles();
	}, []);

	function getRoles() {
	fetch("http://localhost:3001")
		.then(response => {
			return response.text();
		})
		.then(data => {
			setRoles(data);
		});
	}


	useEffect(() => {
		const fetchPages = async () => {
			const { pages } = await request(
				"https://api-eu-central-1.graphcms.com/v2/cl3a5qe60007q01xmfuo8ga8x/master",
				`
				{
					pages {
					  name
					  id
					  slug
					  meta {
						title
						description
					  }
					  pageContent {
						... on Section {
						  id
						  heading
						  subHeading
						  bodyText
						  image {
							url
						  }
						}
						... on Hero {
							id
							heroCta
							heroText
							heroTitle
						  }
						... on Button {
							id
							name
						  }
					  }
					  pageFooter {
						copyrightText
					  }
					}
				  }
        `
			);
			setPages(pages);
		};
		fetchPages();
	}, []);

	const ShopPage= () => {
		return (
			<>
				<Header pages={pages} />
				{roles ? roles : "there are no roles"}
				{/* <Main pages={pages} /> */}
				<Routes>
					<Route exact path={"/"} element={<Home />} />
					<Route path={"/:slug"} element={<Page pages={pages} />} />
					<Route path={"/favourites"} element={<Favourites />} />
					<Route path={"/reservations"} element={<Reservations />} />
					<Route path={"/dashboard"} element={<Dashboard />} />
					<Route path={"/id"} element={<SingleItem/>}/>
					<Route path={"/shop/:gender"} element={<Shop/>}/>
					<Route path={"/shop/:gender/:subCategory"} element={<Shop />}/>
				</Routes>
				<footer></footer>
			</>
		)
	}

	const DashboardPage= () => {
		return (
			<>
				{/* <Header pages={pages} /> */}
				{roles ? roles : "there are no roles"}
				{/* <Main pages={pages} /> */}
				<Routes>
					<Route exact path={"/"} element={<Login />} />
					<Route exact path={"/login"} element={<Login />} />
					<Route exact path={"/signup"} element={<Signup />} />
				</Routes>
				<footer></footer>
			</>
		)
	}

	const loaded = pages;

	if (!loaded) {
		return "loading....";
	}
	return (
		<div className="App">
			<Routes>
				<Route path={"/*"} element={<ShopPage />} />
				<Route path={"/dashboard/*"} element={<DashboardPage />} />
			</Routes>	
			
		</div>
	);
}

export default App;
