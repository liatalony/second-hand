import { useState, React, useEffect } from "react";
import Categories from "../../components/categories/Categories";
import Filter from "../../components/filter/Filter";
import Item from "../../components/list-item/Item";
import "./shop.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Shop = () => {
	const { gender, subCategory } = useParams();
	// document title to sentence-case
	const uppercase = gender[0].toUpperCase() + gender.substring(1);
	const title = `Wrinkle | ${uppercase}`;
	document.title = title;
	// const [open, setOpen] = useState(false);
	const [itemsList, setItemsList] = useState(false);
	const [openCategories, setOpenCategories] = useState(false);
	const [openFilter, setOpenFilter] = useState(false);
	useEffect(() => {
		try {
			setItemsList(false);
			if (gender && !subCategory) {
				axios
					.get(`http://localhost:3001/products/all/${gender}`)
					.then((res) => {
						setItemsList(res.data);
					});
			} else if (gender && subCategory) {
				axios
					.get(`http://localhost:3001/products/all/${gender}/${subCategory}`)
					.then((res) => {
						console.log(subCategory);
						if (res.data) {
							setItemsList(res.data);
						} else {
							setItemsList(false);
						}
					});
			}
		} catch (error) {
			console.log(error.message);
		}
	}, []);
	useEffect(() => {
		try {
			setItemsList(false);
			if (gender && !subCategory) {
				axios
					.get(`http://localhost:3001/products/all/${gender}`)
					.then((res) => {
						setItemsList(res.data);
					});
			} else if (gender && subCategory) {
				axios
					.get(`http://localhost:3001/products/all/${gender}/${subCategory}`)
					.then((res) => {
						console.log(subCategory);
						if (res.data) {
							setItemsList(res.data);
						} else {
							setItemsList(false);
						}
					});
			}
		} catch (error) {
			console.log(error.message);
		}
	}, [gender, subCategory]);

	// function handleSubCategory(){
	// 	console.log(gender, subCategory);
	// }

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
						// onClick={handleSubCategory}
					>
						Clothes
					</Link>
					<Link
						to={`/shop/${gender}/shoes`}
						className={subCategory == "shoes" ? "active" : ""}
						// onClick={handleSubCategory}
					>
						Shoes
					</Link>
					<Link
						to={`/shop/${gender}/accessories`}
						className={subCategory == "accessories" ? "active" : ""}
						// onClick={handleSubCategory}
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
