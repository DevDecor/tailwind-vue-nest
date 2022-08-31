// import React from "react";
import Brand from "./Brand";
import Nav from "./MyNav";

function Header({ theme }) {
	return (
		<header className="flex justify-between h-16 px-5 shadow-md">
			<Brand></Brand>
			<Nav></Nav>
		</header>
	);
}

export default Header;
