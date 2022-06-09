import React from "react";
import Item from "../../components/list-item/Item";


function MyItems() {

	return (
		<div className="Dashboard">
			<h1>My Items for sale</h1>
			<div className="item-list-container">
				<div className="item-list">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
}

export default MyItems;
