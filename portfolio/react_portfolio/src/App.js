import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/NavBar/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<>
			<Header></Header>
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/cv" element={<Main />} />
					<Route path="/about-me" element={<Main />} />
					<Route path="/portfolio" element={<Main />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/hire-me" element={<Main />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
