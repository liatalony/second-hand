import { useState, React } from "react";
import Categories from "../../components/categories/Categories";
import Filter from "../../components/filter/Filter";
import Item from "../../components/list-item/Item";
import "./shop.scss";
import { Link, useParams } from "react-router-dom";

const Shop = () => {
	let { gender, subCategory } = useParams();
	const [openCategories, setOpenCategories] = useState(false);
	const [openFilter, setOpenFilter] = useState(false);

	function handleCategories() {
		setOpenCategories((prev) => !prev);
	}

	function handleFilter() {
		setOpenFilter((prev) => !prev);
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
					<button className="btn btn--secondary" onClick={handleFilter}>
						Filter &#38; sort
					</button>
				</div>
				{openCategories && (
					<div>
						<Categories />
					</div>
				)}
				{openFilter && (
					<div>
						<Filter />
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
