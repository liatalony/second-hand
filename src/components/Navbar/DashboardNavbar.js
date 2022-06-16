import { React, useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import Burger from "../../assets/icons/burger-menu.svg";
import AuthContext from "../../context/AuthProvider";


import "./navbar.scss";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const logout = async () => {
		// if used in more components, this should be in context 
		// axios to /logout endpoint 
		setAuth({});
		navigate("/dashboard/login");
	}

	function handleNavigation() {
		setOpen((prev) => !prev);
	}
	return (
		<div>
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
							<Link to={"/dashboard/account-details"} onClick={handleNavigation}>
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
						<li>
							<div className="flexGrow">
								<button onClick={logout}>Sign Out</button>
							</div>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default Navbar;
