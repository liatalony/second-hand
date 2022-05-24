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
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
