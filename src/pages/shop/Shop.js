import { useState, React, useEffect } from "react";
import Categories from "../../components/categories/Categories";
import Filter from "../../components/filter/Filter";
import Item from "../../components/list-item/Item";
import "./shop.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Shop = () => {
	let { gender, subCategory } = useParams();
	// const [open, setOpen] = useState(false);
	const [itemsList, setItemsList] = useState(false);
	useEffect(() => {
		try {
			axios.get("http://localhost:3001/products/all").then((res) => {
				setItemsList(res.data);
			});
		} catch (error) {
			console.log(error.message);
		}
	});
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
				{!itemsList ? (
					<p>There are no products at the moment</p>
				) : (
					<div className="item-list">
						{itemsList.map((item) => {
							return <Item key={"item" + item.product_id} details={item} />;
						})}
					</div>
				)}
				{openFilter && (
					<div>
						<Filter />
					</div>
				)}
			</div>
		</div>
	);
};

export default Shop;
