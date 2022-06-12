import React from "react";
import "./categories.scss";

const Categories = () => {
	return (
		<div className="container-categories">
			<form action="">
				<fieldset>
					<legend>Choose your categories</legend>
					<label className="checkbox-container" htmlFor="category-shirts">
						Shirts
						<input
							type="checkbox"
							id="category-shirts"
							name="category-shirts"
							value="shirts"
							data-testid="hello"
						/>
						<span className="checkmark"></span>
					</label>
					<label className="checkbox-container" htmlFor="category-jackets">
						Jackets
						<input
							type="checkbox"
							id="category-jackets"
							name="category-jackets"
							value="jackets"
						/>
						<span className="checkmark"></span>
					</label>
					<label className="checkbox-container" htmlFor="category-shoes">
						Shoes
						<input
							type="checkbox"
							id="category-shoes"
							name="category-shoes"
							value="shoes"
						/>
						<span className="checkmark"></span>
					</label>
					<label className="checkbox-container" htmlFor="category-dresses">
						Dresses
						<input
							type="checkbox"
							id="category-dresses"
							name="category-dresses"
							value="dresses"
						/>
						<span className="checkmark"></span>
					</label>
					<label className="checkbox-container" htmlFor="category-pants">
						Pants
						<input
							type="checkbox"
							id="category-pants"
							name="category-pants"
							value="pants"
						/>
						<span className="checkmark"></span>
					</label>
					<div className="btn-container">
						<button className="btn btn--secondary" type="submit">
							Clear categories
						</button>
						<button className="btn btn--primary" type="submit">
							Submit categories
						</button>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default Categories;
