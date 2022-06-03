import { useState, React } from "react";
import Item from "../../components/list-item/Item";
import "./reservations.scss";

function Reservations() {
	const [deleted, setDeleted] = useState(false);

	function cartRemove() {
		console.log("removing from cart");
		setDeleted(true);
	}

	return (
		<div className="reservations">
			<h1>Reservations</h1>
			<div className="item-list-container">
				<div className="item-list">
					{deleted ? (
						<></>
					) : (
						<div className="single-item-container">
							<Item />
							<button className="btn btn--secondary" onClick={cartRemove}>
								remove
							</button>
						</div>
					)}
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
			<div>
				<div>
					<h2>Reservation summary</h2>
					<hr />
					<h3>5 items</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
						incidunt maiores, officia nisi molestiae illo fugit totam quasi
						dolore, rem a architecto dolorum numquam necessitatibus tempora
						laudantium facilis eveniet! Animi.
					</p>
				</div>
				<div className="container--buy--desktop">
					<div className="button">
						<button className="btn btn--primary">Reserve Bag</button>
					</div>
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
