import { useState, useEffect, React } from "react";
import Item from "../../components/list-item/Item";
import axios from "../../api/axios";
import "./reservations.scss";

function Reservations() {
	// const [deleted, setDeleted] = useState(false);
	const [itemList, setItemsList] = useState();
	let reservations = JSON.parse(localStorage.getItem("wrinkle-favourites"));
	let items = [];

	useEffect(() => {
		if (!localStorage.getItem("wrinkle-cart")) {
			localStorage.setItem("wrinkle-cart", "[]");
		}
		reservations = JSON.parse(localStorage.getItem("wrinkle-cart"));

		if (reservations.length > 0) {
			try {
				axios.get("/products/saved/cart").then((res) => {
					console.log(res.data);
					console.log(res.data[0].product_id);
					if (res.data[0].product_id) {
						console.log("insode");
						items = res.data.filter((product) => {
							console.log(product);
							return reservations.find((item) => {
								console.log(item);
								console.log(product.product_id, " == ", item.id);
								return product.product_id === item.id;
							});
						});
						console.log(items);
					}
					setItemsList(items);
				});
				setItemsList(items);
			} catch (error) {
				setItemsList(false);
				console.log(error.message);
			}
		}
		console.log(itemList);
	}, []);
	// function cartRemove() {
	// 	console.log("removing from cart");
	// 	setDeleted(true);

	// }

	return (
		<div className="reservations">
			<h1>Reservations</h1>
			<div className="item-list-container">
				<div className="item-list">
					{!itemList ? (
						<p>No items in the bag</p>
					) : (
						itemList.map((item) => {
							console.log(item);
							return <Item key={"item" + item.product_id} details={item} />;
						})
					)}
					{/* {deleted ? (
						<></>
					) : (
						<div className="single-item-container">
							<Item />
							<button className="btn btn--secondary" onClick={cartRemove}>
								remove
							</button>
						</div>
					)} */}
				</div>
				<hr />
			</div>
			<div>
				<div>
					<h2>Reservation summary</h2>
					<h3>5 items</h3>
					<h3>Total</h3>
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
