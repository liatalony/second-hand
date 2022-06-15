import { React, useEffect, useState } from "react";
import Heart from "../../assets/heart.svg";
import { ReactSVG } from "react-svg";
import "./item.scss";
import { Link } from "react-router-dom";

const Item = (props) => {
	const [liked, setLiked] = useState(false);
	const [isActive, setIsActive] = useState(null);

	function handleLike() {
		setLiked((prev) => !prev);
	}

	useEffect(() => {
		if (props.status) {
			setIsActive(props.status);
		}
	}, []);

	if (!props.details) return <h2>Loading</h2>;

	return (
		<div className="Item" data-testid="item">
			<div
				className={
					!isActive
						? "image-container"
						: "image-container image-container--inactive"
				}
			>
				<Link to={`/shop/product/${props.details.product_id}`}>
					<div
						className="item-image"
						style={{
							backgroundImage: `url(${props.details.image_name})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					></div>
				</Link>
				<button
					onClick={handleLike}
					className={liked ? "item-heart-liked" : "item-heart"}
					data-testid="btn"
				>
					<ReactSVG src={Heart} />
				</button>
			</div>
			<div className="item-details">
				<p className="list-item-price">
					<Link to={"/shop/product/:id"}>{props.details.product_headline}</Link>
				</p>
				<p className="price">
					kr. {props.details.product_price}
					<span className="status"> {props.status}</span>
				</p>
			</div>
		</div>
	);
};

export default Item;
