import React from "react";
import Item from "../../components/list-item/Item";
import "./myItems.scss";

function MyItems() {
	return (
		<div className="Dashboard all-items">
			<h1>My Items for sale</h1>
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
			<div className="button">
				<button className="btn btn--primary btn--primary--round">
					add item
				</button>
			</div>
		</div>
	);
}

export default MyItems;
