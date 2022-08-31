import { useReducer } from "react";
import NavItems from "./NavItems";
let initialActivity = [true, false, false, false, false, false];

function Nav() {
	const [active, dispatch] = useReducer(reducer, initialActivity);
	dispatch(2);
	return (
		<ul className="flex h-full">
			<NavItems active={active[0]} to="/">
				Home
			</NavItems>
			<NavItems active={active[1]} to="/cv">
				CV
			</NavItems>
			<NavItems active={active[2]} to="/about-me">
				About Me
			</NavItems>
			<NavItems active={active[3]} to="/portfolio">
				Portfolio
			</NavItems>
			<NavItems active={active[4]} to="/hire-me">
				Hire Me
			</NavItems>
			<NavItems active={active[5]} to="/contact">
				Contact Me
			</NavItems>
		</ul>
	);
}

function reducer(state, active) {
	state.map((e, i) => {
		if (i === active) {
			return true;
		}
		return false;
	});
}
export default Nav;
