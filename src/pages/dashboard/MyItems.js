import React from "react";
import Item from "../../components/list-item/Item";

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
		</div>
	);
}

export default MyItems;
