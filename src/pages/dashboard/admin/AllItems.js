import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import React, { useEffect, useState } from "react";
import Item from "../../../components/list-item/Item";
import { Link, useParams } from "react-router-dom";
import "./allItems.scss";

const AllItems = () => {
	let { status } = useParams();
	const [itemList, setItemList] = useState(false);
	const axiosPrivate = useAxiosPrivate();
	
	useEffect(()=>{
		try {
			axiosPrivate.get(`/products/dashboard/all-items/${status}`).then(res =>{
				console.log(res.data);
				setItemList(res.data);
			})
		} catch (error) {
			console.log(error.message);
		}
		setItemList(false);
	},[])
	useEffect(()=>{
		try {
			axiosPrivate.get(`/products/dashboard/all-items/${status}`).then(res =>{
				console.log(res.data);
				setItemList(res.data);
			})
		} catch (error) {
			console.log(error.message);
		}
		setItemList(false);
	},[status])
	
	return (
		<div className="Dashboard all-items">
			<h1>Admin - All Items</h1>
			<div className="status-links">
				<Link
					to={"/dashboard/items/view/active"}
					className={status == "active" ? "active" : ""}
				>
					Active
				</Link>
				<Link
					to={"/dashboard/items/view/pending"}
					className={status == "pending" ? "active" : ""}
				>
					Pending
				</Link>
				<Link
					to={"/dashboard/items/view/sold"}
					className={status == "sold" ? "active" : ""}
				>
					Sold
				</Link>
			</div>
			<div className="item-list-container">
				{!itemList ? (
					<p>There are no {status} products at the moment</p>
				) : (
					<div className="item-list">
						{itemList.map((item) => {
							return <Item key={"item" + item.product_id} details={item} lead={"form"} shop_status={status} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default AllItems;
