import React from "react";
import Item from "../../../components/list-item/Item";
import "./allItems.scss";

function AllItems() {
	return (
		<div className="Dashboard all-items">
			<h1>Admin - All Items</h1>
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
