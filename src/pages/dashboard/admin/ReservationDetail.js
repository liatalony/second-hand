import React from "react";
import Item from "../../../components/list-item/Item";

function ReservationDetails() {
	return (
		<div className="Dashboard all-items">
			<h1>Admin - Reservation Details</h1>
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

export default ReservationDetails;
