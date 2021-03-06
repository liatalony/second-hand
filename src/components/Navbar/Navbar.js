import { React, useState } from "react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
import Burger from "../../assets/icons/burger-menu.svg";
import BurgerClose from "../../assets/icons/cross-white.svg";

import "./navbar.scss";

const Navbar = (props) => {
	const [open, setOpen] = useState(false);

	function handleNavigation() {
		setOpen((prev) => !prev);
	}
	return (
		<div>
			<button className="menu--burger" onClick={handleNavigation}>
				<ReactSVG src={Burger} />
			</button>
			{open && (
				<nav>
					<button className="menu--burger--close" onClick={handleNavigation}>
						{/* <img src={Burger} alt="Secont hand shop name" /> */}
						<ReactSVG src={BurgerClose} />
					</button>

					<ul>
						{props.pages.map((page) => (
							<li key={page.id}>
								<Link to={`/${page.slug}`} onClick={handleNavigation}>
									{page.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
