import React, { useEffect, useState } from "react";
import Item from "../../components/list-item/Item";
import "./home.scss";
import Banner from "../../assets/banner-new-1-small.jpg";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

const Home = () => {
	const [itemList, setItemList] = useState(false);

	const title = "Wrinkle | Home";
	document.title = title;

	useEffect(() => {
		try {
			axios.get("/products/shop").then((res) => {
				console.log(res.data);
				setItemList(res.data);
			});
			setItemList(false);
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	return (
		<div className="Home">
			<div
				className="banner"
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,200,0.2)), url(${Banner})`,
					backgroundSize: "cover",
					backgroundPosition: "top",
				}}
			>
				<h1 className="title">No planet B</h1>
				<p className="sub-title">
					Browse and reserve our second hand items before you come to our shop
				</p>
				<div className="buttons">
					<Link to={"/shop/women"} className={"btn btn--primary btn--banner"}>
						Shop Women
					</Link>
					<Link to={"/shop/men"} className={"btn btn--primary btn--banner"}>
						Shop Men
					</Link>
				</div>
			</div>
			<div className="new-products">
				<div className="title">
					<h3>New products</h3>
				</div>
				{!itemList ? (
					<p>No items to show...</p>
				) : (
					<div className="item-list">
						{itemList.map((item) => {
							return <Item key={"item" + item.product_id} details={item} />;
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
