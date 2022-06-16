// import axios from "../../api/axios";
import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Item from "../../components/list-item/Item";
// import Item from "../../components/list-item/Item";
import "./favourites.scss";

function Favourites() {
	const [itemList, setItemsList] = useState();
	let favourites = JSON.parse(localStorage.getItem("wrinkle-favourites"));
	let items = [];

	useEffect(() => {
		if (!localStorage.getItem("wrinkle-favourites")) {
			localStorage.setItem("wrinkle-favourites", "[]");
		}
		favourites = JSON.parse(localStorage.getItem("wrinkle-favourites"));

		if (favourites.length > 0) {
			console.log("favourites");
			try {
				// axios.get("/products/saved/favourites").then((res)=>{
				// 	items = res.data.filter(product => {
				// 		return favourites.find(item => {
				// 			return product.product_id === item.id;
				// 		})
				// 	})
				// 	console.log(items);
				// 	setItemsList(items)
				// })
				setItemsList(items)
			} catch (error) {
				console.log(error.message);
			}
		}
		console.log(itemList);
	}, []);


	return (
		<div className="favourites">
			<h1>Favourites</h1>
			<div className="products">
				<div className="item-list">
					{!itemList ? <p>You don&apos;t have any favourite items. <Link to={"/home"}>Look at out items to find your favourites</Link></p> : (
						itemList.map(item => {
							return <Item key={"item" + item.product_id} details={item} />
						})
					)}
				</div>
			</div>
		</div>
	);
}

export default Favourites;
