

import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar({ setIsLoggedIn }) {
const history = useHistory();

function handleLogout() {
setIsLoggedIn(false);
history.push("/login");
}

return (
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/about">About</Link>
</li>
<li>
<button onClick={handleLogout}>Logout</button>
</li>
</ul>
</nav>
);
}

export default Navbar;




