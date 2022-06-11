import React from "react";
import Item from "../../components/list-item/Item";
import "./home.scss";
import Banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="Home">
			<div
				className="banner"
				style={{
					backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${Banner})`,
				}}
			>
				<h1 className="title">No planet B</h1>
				<p className="sub-title">
					Browse and reserve our second hand items before you come to our shop
				</p>
				<div className="buttons">
					<Link to={"/shop/women"} className={"btn btn--primary"}>
						Shop Women
					</Link>
					<Link to={"/shop/men"} className={"btn btn--primary"}>
						Shop Men
					</Link>
				</div>
			</div>
			<div className="new-products">
				<div className="title">
					<h3>New products</h3>
				</div>
				<div className="item-list">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
};

export default Home;
