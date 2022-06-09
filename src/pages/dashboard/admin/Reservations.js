import React from "react";

function ReservationsList() {
	const orderNumber = 2;
	const orderStatus = "pending";

	return (
		<div className="Dashboard all-items">
			<h1>Admin - Reservations</h1>
			<div className="item-list-container">
				<ul className="item-list">
					<li>
						<h2>Order number</h2>
						<h3>{orderNumber}</h3>
						<p>{orderStatus}</p>
					</li>
					<li>
						<h2>Order number</h2>
						<h3>{orderNumber}</h3>
						<p>{orderStatus}</p>
					</li>
					<li>
						<h2>Order number</h2>
						<h3>{orderNumber}</h3>
						<p>{orderStatus}</p>
					</li>
					<li>
						<h2>Order number</h2>
						<h3>{orderNumber}</h3>
						<p>{orderStatus}</p>
					</li>
					<li>
						<h2>Order number</h2>
						<h3>{orderNumber}</h3>
						<p>{orderStatus}</p>
					</li>
					<li>
						<h2>Order number</h2>
						<h3>{orderNumber}</h3>
						<p>{orderStatus}</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ReservationsList;
