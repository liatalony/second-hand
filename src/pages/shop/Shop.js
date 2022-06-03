import { useState, React } from "react";
import Categories from "../../components/categories/Categories";
import Item from "../../components/list-item/Item";
import "./shop.scss";
import { Link, useParams } from "react-router-dom";

const Shop = () => {
	let { gender, subCategory } = useParams();
	const [open, setOpen] = useState(false);

	function handleCategories() {
		setOpen((prev) => !prev);
	}

	return (
		<div className="shop">
			<h1 className="title">{gender}</h1>
			<div className="products">
				<div className="sub-categories">
					<Link
						to={`/shop/${gender}/clothes`}
						className={subCategory == "clothes" ? "active" : ""}
					>
						Clothes
					</Link>
					<Link
						to={`/shop/${gender}/shoes`}
						className={subCategory == "shoes" ? "active" : ""}
					>
						Shoes
					</Link>
					<Link
						to={`/shop/${gender}/accessories`}
						className={subCategory == "accessories" ? "active" : ""}
					>
						Accessories
					</Link>
				</div>
				<div className="filters">
					<button className="btn btn--secondary" onClick={handleCategories}>
						Categories
					</button>
					<button className="btn btn--secondary">Filter &#38; sort</button>
				</div>
				{open && (
					<div>
						<Categories />
					</div>
				)}
				<div className="item-list">
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
				</div>
			</div>
		</div>
	);
};

export default Shop;
