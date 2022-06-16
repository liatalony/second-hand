import React from "react";
import { Link } from "react-router-dom";
// import Item from "../../components/list-item/Item";
import "./myItems.scss";

function MyItems() {
	return (
		<div className="Dashboard all-items">
			<h1>My Items for sale</h1>
			<div className="item-list-container">
				<ul className="item-list">
					{/* 
					<li>
						<Item />
					</li> */}
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
