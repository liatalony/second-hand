import React from "react";
import Item from "../../components/list-item/Item";
import "./favourites.scss";

function Favourites() {
	return (
		<div className="favourites">
			<h1>Favourites</h1>
			<div className="products">
				<div className="item-list">
					<Item status={"sold"} />
					<Item />
					<Item status={"sold"} />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
}

export default Favourites;
