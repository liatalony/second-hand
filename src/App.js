import { React, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { request } from "graphql-request";
import "./app.scss";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./components/header/Header";
import Icons from "./components/icons/Icons";
import Home from "./pages/home/Home";
import Favourites from "./pages/favourites/Favourites";
import Reservations from "./pages/reservations/Reservations";
import Page from "./pages/page/Page";
import SingleItem from "./pages/single-item/SingleItem";

function App() {
	const [pages, setPages] = useState(null);
	const [icons, setIcons] = useState(null);

	useEffect(() => {
		const fetchPages = async () => {
			const { pages, icons } = await request(
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
          }
          icons {
            id
            iconName
            iconImage {
              id
              url
            }
          }
        }
        `
			);
			setPages(pages);
			setIcons(icons);
		};
		fetchPages();
	}, []);

	// console.log(pages, icons);

	return (
		<div className="App">
			<Header pages={pages} icons={icons} />
			<Icons icons={icons} />
			{/* <Main pages={pages} /> */}
			<Routes>
				<Route exact path={"/"} element={<Home />} />
				<Route path={"/:slug"} element={<Page pages={pages} />} />
				<Route path={"/favourites"} element={<Favourites />} />
				<Route path={"/reservations"} element={<Reservations />} />
				<Route path={"/dashboard"} element={<Dashboard />} />
				<Route path={"/id"} element={<SingleItem />} />
				{/* <Route path={`/shop/${gender}`} element={<Shop gender={gender}/>}/>
				<Route path={`/shop/${gender}/${subCategory}`} element={<SingleItem/>}/> */}
			</Routes>
			<footer></footer>
		</div>
	);
}

export default App;
