import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosPrivate } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import Item from "../../components/list-item/Item";
import "./myItems.scss";

function MyItems() {
	const { auth } = useAuth();
	const [itemList, setItemList] = useState(false);

	useEffect(() => {
		axiosPrivate
			.get(`/products/dashboard/user-items/${auth.id}`)
			.then((res) => {
				console.log(res.data);
				setItemList(res.data);
			});
	}, []);

	return (
		<div className="Dashboard all-items">
			<h1>My Items for sale</h1>
			<div className="item-list-container">
				<ul className="item-list">
					{!itemList ? (
						<p>You dont have any items yet...</p>
					) : (
						itemList.map((item) => {
							return <Item key={"item" + item.product_id} details={item} />;
						})
					)}
				</ul>
			</div>
			<div className="button">
				<Link to={"/dashboard/my-items/add"}>
					<button className="btn btn--primary btn--primary--round">
						add item
					</button>
				</Link>
			</div>
		</div>
	);
}

export default MyItems;
