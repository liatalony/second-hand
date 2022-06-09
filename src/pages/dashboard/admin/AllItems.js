import React from "react";
import Item from "../../../components/list-item/Item";
import { Link } from "react-router-dom";
import "./allItems.scss";

function AllItems() {
	return (
		<div className="Dashboard all-items">
			<h1>Admin - All Items</h1>
			<div className="status-links">
				<Link to={""}>Active</Link>
				<Link to={""}>Pending</Link>
				<Link to={""}>Sold</Link>
			</div>
			<div className="item-list-container">
				<ul className="item-list">
					<li>
						<Item />
					</li>
					<li>
						<Item />
					</li>
					<li>
						<Item />
					</li>
					<li>
						<Item />
					</li>
					<li>
						<Item />
					</li>
					<li>
						<Item />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default AllItems;
