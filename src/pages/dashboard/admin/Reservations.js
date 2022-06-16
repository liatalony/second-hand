import React from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import Check from "../../../assets/icons/check-outline.svg";
import Dots from "../../../assets/icons/dots-pending-filled.svg";
import Cross from "../../../assets/icons/cross-cancel.svg";
import "./reservationsAdmin.scss";

function ReservationsList() {
	const orderNumber = 2123123;
	const orderStatus = "accepted";

	return (
		<div className="Dashboard all-items">
			<h1>Admin - Reservations</h1>
			<div className="item-list-container">
				<ul className="item-list">
					<li>
						<Link to={"/dashboard/reservations/:id"} className="order">
							<div className="order-contents">
								<div className="order-icon">
									<ReactSVG src={Check} />
								</div>
								<div className="order-text">
									<h2>Order number</h2>
									<h3>{orderNumber}</h3>
									<p>{orderStatus}</p>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to={"/dashboard/reservations/:id"} className="order">
							<div className="order-contents">
								<div className="order-icon">
									<ReactSVG src={Dots} />
								</div>
								<div className="order-text">
									<h2>Order number</h2>
									<h3>{orderNumber}</h3>
									<p>{orderStatus}</p>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to={"/dashboard/reservations/:id"} className="order">
							<div className="order-contents">
								<div className="order-icon">
									<ReactSVG src={Cross} />
								</div>
								<div className="order-text">
									<h2>Order number</h2>
									<h3>{orderNumber}</h3>
									<p>{orderStatus}</p>
								</div>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ReservationsList;
