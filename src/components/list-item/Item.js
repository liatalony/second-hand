import { React, useEffect, useState } from "react";
import Heart from "../../assets/heart.svg";
import { ReactSVG } from "react-svg";
import Jacket from "../../assets/jacket.jpg";
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

	return (
		<div className="Item">
			<div
				className={
					!isActive
						? "image-container"
						: "image-container image-container--inactive"
				}
			>
				<Link to={"/shop/:id"}>
					<div
						className="item-image"
						style={{
							backgroundImage: `url(${Jacket})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
						}}
					></div>
				</Link>
				<button
					onClick={handleLike}
					className={liked ? "item-heart-liked" : "item-heart"}
				>
					<ReactSVG src={Heart} />
				</button>
			</div>
			<div className="item-details">
				<h4>
					<Link to={"/shop/:id"}>Item Name</Link>
				</h4>
				<p className="price">
					kr. 100<span className="status"> {props.status}</span>
				</p>
			</div>
		</div>
	);
};

export default Item;
