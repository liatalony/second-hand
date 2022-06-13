import React, {useEffect, useState } from "react";
import Slider from "../../components/swiper/Slider";
import "./singleItem.scss";
import Item from "../../components/list-item/Item";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleItem = () => {

	const [productDetails, setProductDetails] = useState(false);
	// const [productImages, setProductImages] = useState(false);
	const productId = useParams();

	useEffect(()=>{
		try {
			axios.get(
				`http://localhost:3001/products/${productId.id}`,
			).then((res)=>{
				console.log(res.data);
				setProductDetails(res.data);
				// setProductImages(res.data[0]);
			})
		} catch (error) {
			console.log(error.message);
		}	},[])

	return (
		<div className="single-item-page">
			{!productDetails ? <h1>Loading...</h1> : (
				<>
					<div className="container--wrapper">
						<section className="container--slider">
							<Slider images={productDetails.images}/>
						</section>
						<div className="container--description">
							<section>
								<div className="title">
									<h1>{productDetails.product[0].product_headline}</h1>
									<h2>Kr. {productDetails.product[0].product_price}</h2>
								</div>
								<div className="item-desc">
									{productDetails.product[0].product_description}	
								</div>
							</section>
							<section>
								<div className="item-details">
									<div className="title">
										<h3>Product Specifications</h3>
									</div>
									<div className="table-container">
										<table>
											<tbody>
												<tr>
													<td className="detail-name">Size</td>
													<td className="detail-value">{productDetails.product[0].product_size}</td>
												</tr>
												<tr>
													<td className="detail-name">Color</td>
													<td className="detail-value">{productDetails.product[0].product_colour}</td>
												</tr>
												<tr>
													<td className="detail-name">Condition</td>
													<td className="">{productDetails.product[0].product_condition}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className="container--buy--desktop">
									<div className="button">
										<button className="btn btn--primary">Add to bag</button>
									</div>
								</div>
							</section>
						</div>
					</div>
					<section className="container--similar-items">
						<div className="similar-items">
							<div className="title">
								<h3>Similar Items</h3>
							</div>
							<div className={"similar-items-list"}>
								<Item />
								<Item />
								<Item />
								<Item />
								<Item />
							</div>
						</div>
					</section>
					<section className="container--buy">
						<div className="buy">
							<div className="name-price">
								<h1 className="title">{productDetails.product[0].product_headline}</h1>
								<h1 className="price">kr. {productDetails.product[0].product_price}</h1>
							</div>
							<div className="button">
								<button className="btn btn--primary">Add to bag</button>
							</div>
						</div>
					</section>
				</>
			)}
		</div>
	);
};

export default SingleItem;
