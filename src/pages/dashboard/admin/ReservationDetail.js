import React from "react";
// import Item from "../../../components/list-item/Item";

function ReservationDetails() {
	return (
		<div className="Dashboard all-items">
			<h1>Admin - Reservation Details</h1>
			<div className="item-list-container">
				<ul className="item-list">
					{/* <li>
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
					</li> */}
				</ul>
			</div>
			<section className="container--buy">
				<div className="buy">
					<div className="name-price">
						<h1 className="title">Totale</h1>
						<h1 className="price">kr. 100</h1>
					</div>
					<div className="button">
						<button className="btn btn--primary">Confirm bag</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ReservationDetails;
