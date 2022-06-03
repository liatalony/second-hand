import { useState, React } from "react";
import "./filter.scss";

const Filter = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="container-filter">
			<form action="">
				<fieldset>
					<legend>Filter options</legend>
					<div className="accordion">
						<div className="accordion-item">
							<div
								className="accordion-title"
								onClick={() => setIsActive(!isActive)}
								onKeyDown={() => setIsActive(!isActive)}
								role="button"
								tabIndex="0"
							>
								<div>Sort By</div>
								<div>{isActive ? "-" : "+"}</div>
							</div>
							{isActive && (
								<div className="accordion-content">
									<label className="checkbox-container" htmlFor="filter-price">
										Price
										<input
											type="checkbox"
											id="filter-price"
											name="filter-price"
											value="price"
										/>
										<span className="checkmark"></span>
									</label>
									<label
										className="checkbox-container"
										htmlFor="filter-recommended"
									>
										Recommended
										<input
											type="checkbox"
											id="filter-recommended"
											name="filter-recommended"
											value="recommended"
										/>
										<span className="checkmark"></span>
									</label>
								</div>
							)}
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	);
};

export default Filter;
