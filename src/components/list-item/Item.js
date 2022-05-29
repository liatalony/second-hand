import { React, useState } from "react";
import Heart from "../../assets/heart.svg";
import { ReactSVG } from "react-svg";
import Jacket from "../../assets/jacket.jpg";
import "./item.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Item = () => {
	const [liked, setLiked] = useState(false);

	function handleLike() {
		setLiked((prev) => !prev);
	}

	return (
		<div className="Item">
			<Router>
				<div className="image-container">
					<Link to={"/id"}>
						<div
							className="item-image"
							style={{
								backgroundImage: `url(${Jacket})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
							}}
						>
							<button
								onClick={handleLike}
								className={liked ? "item-heart-liked" : "item-heart"}
							>
								<ReactSVG src={Heart} />
							</button>
						</div>
					</Link>

					<div className="item-details">
						<h3>
							<Link to={"/id"}>Item name</Link>
						</h3>
						<p>kr. 100</p>
					</div>
				</div>
				<div className="item-detail">
					<h3>Item name</h3>
					<p>kr. 100</p>
				</div>
			</Router>
		</div>
	);
};

export default Item;
