import React, { useEffect, useState } from "react";
import Slider from "../../components/swiper/Slider";
import "./singleItem.scss";
// import Item from "../../components/list-item/Item";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import Item from "../../components/list-item/Item";

const SingleItem = () => {
	const [productDetails, setProductDetails] = useState(false);
	// const [productImages, setProductImages] = useState(false);
	const productId = useParams();
	const [reserved, setReserved] = useState(false);
	const [similar, setSimilar] = useState(false);
	let reservations = JSON.parse(localStorage.getItem("wrinkle-cart"));
	const [isActive, setIsActive] = useState(false);

	function handleReserve(e) {
		e.preventDefault();
		reservations = JSON.parse(localStorage.getItem("wrinkle-cart"));
		const product = {
			id: productDetails.product[0].product_id,
			name: productDetails.product[0].product_headline,
			price: productDetails.product[0].product_price,
		};
		if (!reserved) {
			reservations.push(product);
		} else if (reserved) {
			reservations = reservations.filter((item) => item.id !== product.id);
		}
		localStorage.setItem("wrinkle-cart", JSON.stringify(reservations));
		setReserved((prev) => !prev);
		setIsActive(!isActive);
	}

	useEffect(() => {
		try {
			axios
				.get(`/products/single-product/${productId.id}`)
				.then((res) => {
					setProductDetails(res.data);
					if (!localStorage.getItem("wrinkle-cart")) {
						localStorage.setItem("wrinkle-cart", "[]");
					}
					reservations = JSON.parse(localStorage.getItem("wrinkle-cart"));
					let product_id = res.data.product[0].product_id;

					if (reservations.filter((item) => item.id == product_id).length > 0) {
						setReserved(true);
						setIsActive(true);
					}
					// setProductImages(res.data[0]);
				})
				.then(() => {
					axios
						.get(`/products/single-product/${productId.id}/similar`)
						.then((res) => {
							setSimilar(res.data);
						});
				});
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	useEffect(() => {
		setProductDetails(false);
		setIsActive(false);
		setReserved(false);
		try {
			axios
				.get(`/products/single-product/${productId.id}`)
				.then((res) => {
					setProductDetails(res.data);
					reservations = JSON.parse(localStorage.getItem("wrinkle-cart"));
					let product_id = res.data.product[0].product_id;

					if (reservations.filter((item) => item.id == product_id).length > 0) {
						setReserved(true);
						setIsActive(true);
					}
					// setProductImages(res.data[0]);
				})
				.then(() => {
					axios
						.get(`/products/single-product/${productId.id}/similar`)
						.then((res) => {
							setSimilar(res.data);
						});
				});
		} catch (error) {
			console.log(error.message);
		}
	}, [productId]);

	// function addToCart() {
	// 	setIsActive(!isActive);
	// }

	return (
		<div className="single-item-page">
			{!productDetails ? (
				<h1>Loading...</h1>
			) : (
				<>
					<div className="container--wrapper">
						<section className="container--slider">
							<Slider images={productDetails.images} />
						</section>
						<div className="container--description">
							<section>
								<div className="title">
									<h1>{productDetails.product[0].product_headline}</h1>
									<p className="item-price">
										Kr. {productDetails.product[0].product_price}
									</p>
								</div>
								<div className="item-desc">
									<h2>Description</h2>
									{productDetails.product[0].product_description}
								</div>
							</section>
							<section>
								<div className="item-details">
									<div className="title">
										<h2>Product Specifications</h2>
									</div>
									<div className="table-container">
										<table>
											<tbody>
												<tr>
													<td className="detail-name">Size</td>
													<td className="detail-value">
														{productDetails.product[0].product_size}
													</td>
												</tr>
												<tr>
													<td className="detail-name">Color</td>
													<td className="detail-value">
														{productDetails.product[0].product_colour}
													</td>
												</tr>
												<tr>
													<td className="detail-name">Condition</td>
													<td className="">
														{productDetails.product[0].product_condition}
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="container--buy--desktop">
									<div className="button">
										<button
											className={
												isActive ? "btn btn--checkout" : "btn btn--primary"
											}
											onClick={handleReserve}
										>
											{isActive ? "Added" : "Add to bag"}
										</button>
									</div>
								</div>
							</section>
						</div>
					</div>
					<section className="container--similar-items">
						<div className="similar-items">
							<div className="similar-items-title">
								<h2>Similar Items</h2>
							</div>
							<div className={"similar-items-list"}>
								{!similar ? (
									<p>No similar products at the moment</p>
								) : (
									similar.map((item) => {
										return (
											<Item key={"item" + item.product_id} details={item} />
										);
									})
								)}
							</div>
						</div>
					</section>
					<section className="container--buy">
						<div className="buy">
							<div className="name-price">
								<h1 className="title">
									{productDetails.product[0].product_headline}
								</h1>
								<p className="item-price">
									kr. {productDetails.product[0].product_price}
								</p>
							</div>
							{/* button container for mobile */}
							<div className="button">
								<button
									className={
										isActive ? "btn btn--checkout" : "btn btn--primary"
									}
									onClick={handleReserve}
								>
									{isActive ? "Added" : "Add to bag"}
								</button>
							</div>
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default SingleItem;
