import React from "react";
import Item from "../../components/list-item/Item";
import "./reservations.scss";

function Reservations() {
	return (
		<div className="reservations">
			<h1>Reservations</h1>
			<div className="item-list-container">
				<div className="item-list">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
			<section className="container--buy">
				<div className="buy">
					<div className="name-price">
						<h1 className="title">Total</h1>
						<h1 className="price">kr. 100000</h1>
					</div>
					<div className="button">
						<button className="btn btn--primary">Reserve Bag</button>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Reservations;
