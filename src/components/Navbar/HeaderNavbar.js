import { React, useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../../assets/icons/burger-menu.svg";

import "./navbar.scss";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	function handleNavigation() {
		setOpen((prev) => !prev);
	}
	return (
		<div className="test">
			<button className="menu--burger" onClick={handleNavigation}>
				<img src={Burger} alt="Secont hand shop name" />
			</button>
			{open && (
				<nav>
					<button className="menu--burger" onClick={handleNavigation}>
						<img src={Burger} alt="Secont hand shop name" />
					</button>

					<ul>
						<li>
							<Link to={"/dashboard/my-items"} onClick={handleNavigation}>
								My Items For Sale
							</Link>
						</li>
						<li>
							<Link to={"/dashboard/reservations"} onClick={handleNavigation}>
								Reservations
							</Link>
						</li>
						<li>
							<Link to={"/dashboard/items"} onClick={handleNavigation}>
								All Items
							</Link>
						</li>
						<li>
							<Link
								to={"/dashboard/account-details"}
								onClick={handleNavigation}
							>
								Account Details
							</Link>
						</li>
						<li>
							<Link to={"/"} onClick={handleNavigation}>
								Back to shop
							</Link>
						</li>
						<li>
							<Link to={"/"} onClick={handleNavigation}>
								Logout
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
