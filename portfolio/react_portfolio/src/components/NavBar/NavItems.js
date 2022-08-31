// import React from "react";
// import { Router } from "react-router-dom";

function NavItems({ children, to, active }) {
	// Router.apply();
	return (
		<ul
			className={`h-full font-semibold overflow-hidden transform skew-x-12 hover:bg-gray-100 ${
				active ? "bg-red-200 text-red-800 font-bold" : ""
			}`}
		>
			<a className="h-full w-full center py-3 -skew-x-12 px-5" href={to}>
				<span>{children}</span>
			</a>
		</ul>
	);
}

export default NavItems;
