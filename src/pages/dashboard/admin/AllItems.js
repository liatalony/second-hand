import React from "react";
import Item from "../../../components/list-item/Item";
import { Link, useParams } from "react-router-dom";
import "./allItems.scss";

function AllItems() {
	let { status } = useParams();
	return (
		<div className="Dashboard all-items">
			<h1>Admin - All Items</h1>
			<div className="status-links">
				<Link
					to={"/dashboard/items/active"}
					className={status == "active" ? "active" : ""}
				>
					Active
				</Link>
				<Link
					to={"/dashboard/items/pending"}
					className={status == "pending" ? "active" : ""}
				>
					Pending
				</Link>
				<Link
					to={"/dashboard/items/sold"}
					className={status == "sold" ? "active" : ""}
				>
					Sold
				</Link>
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
