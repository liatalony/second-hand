import { useState, React } from "react";
import "./filter.scss";

const Filter = () => {
	const [isActive, setIsActive] = useState(false);
	const [isActiveSize, setIsActiveSize] = useState(false);
	const [isActiveCondition, setIsActiveCondition] = useState(false);

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
										price
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
										recommended
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
					<div className="accordion">
						<div className="accordion-item">
							<div
								className="accordion-title"
								onClick={() => setIsActiveSize(!isActiveSize)}
								onKeyDown={() => setIsActiveSize(!isActiveSize)}
								role="button"
								tabIndex="0"
							>
								<div>Size</div>
								<div>{isActiveSize ? "-" : "+"}</div>
							</div>
							{isActiveSize && (
								<div className="accordion-content">
									<label className="checkbox-container" htmlFor="filter-size">
										size
										<input
											type="checkbox"
											id="filter-size"
											name="filter-size"
											value="size"
										/>
										<span className="checkmark"></span>
									</label>
								</div>
							)}
						</div>
					</div>
					<div className="accordion">
						<div className="accordion-item">
							<div
								className="accordion-title"
								onClick={() => setIsActiveCondition(!isActiveCondition)}
								onKeyDown={() => setIsActiveCondition(!isActiveCondition)}
								role="button"
								tabIndex="0"
							>
								<div>Condition</div>
								<div>{isActiveCondition ? "-" : "+"}</div>
							</div>
							{isActiveCondition && (
								<div className="accordion-content">
									<label
										className="checkbox-container"
										htmlFor="filter-condition"
									>
										condition
										<input
											type="checkbox"
											id="filter-condition"
											name="filter-condition"
											value="condition"
										/>
										<span className="checkmark"></span>
									</label>
								</div>
							)}
						</div>
					</div>
				</fieldset>
				<div className="btn-container">
					<button className="btn btn--secondary" type="submit">
						Clear filter
					</button>
					<button className="btn btn--primary" type="submit">
						Submit filter
					</button>
				</div>
			</form>
		</div>
	);
};

export default Filter;
