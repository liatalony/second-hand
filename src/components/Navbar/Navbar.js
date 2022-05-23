import { React, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo192.png";

import "./navbar.scss";

const Navbar = (props) => {
	const [open, setOpen] = useState(false);

	function handleNavigation() {
		setOpen((prev) => !prev);
	}
	return (
		<div>
			<button className="menu--burger" onClick={handleNavigation}>
				<img src={Logo} alt="Secont hand shop name" />
			</button>
			{open && (
				<nav>
					<button className="menu--burger" onClick={handleNavigation}>
						<img src={Logo} alt="Secont hand shop name" />
					</button>
					<ul>
						{props.pages.map((page) => (
							<li key={page.id}>
								<Link to={`/${page.slug}`} onClick={handleNavigation}>
									{page.name}
								</Link>
							</li>
							// <li>
							// 	<Link to={"/"} onClick={handleNavigation}>
							// 		Home
							// 	</Link>
							// </li>
							// <li>
							// 	<Link to={"/men"} onClick={handleNavigation}>
							// 		Men
							// 	</Link>
							// </li>
							// <li>
							// 	<Link to={"/women"} onClick={handleNavigation}>
							// 		Women
							// 	</Link>
							// </li>
							// <li>
							// 	<Link to={"/about"} onClick={handleNavigation}>
							// 		About
							// 	</Link>
							// </li>
							// <li>
							// 	<Link to={"/how-it-works"} onClick={handleNavigation}>
							// 		How It Works
							// 	</Link>
							// </li>
						))}
					</ul>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
