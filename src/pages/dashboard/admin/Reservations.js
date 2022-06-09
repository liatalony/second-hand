import React from "react";
import { Link } from "react-router-dom";
import "./reservations.scss";

function ReservationsList() {
	const orderNumber = 2;
	const orderStatus = "pending";

	return (
		<div className="Dashboard all-items">
			<h1>Admin - Reservations</h1>
			<div className="item-list-container">
				<ul className="item-list">
					<li>
						<Link to={"/dashboard/reservations/:id"} className="order">
							<div>
								<h2>Order number</h2>
								<h3>{orderNumber}</h3>
								<p>{orderStatus}</p>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ReservationsList;
