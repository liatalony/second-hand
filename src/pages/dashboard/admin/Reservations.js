import React from "react";
import Item from "../../../components/list-item/Item";

function ReservationsList() {
	return (
		<div className="Dashboard">
			<h1>Admin - Reservations</h1>
			<div className="item-list-container">
				<ul className="item-list">
					<li>
						<Item />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ReservationsList;
