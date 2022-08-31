// import React from "react";

function MyInfo() {
	let pic = "/me.png";
	return (
		<div className="grid grid-cols-3 w-full h-full text-center">
			<div className="flex flex-col justify-end w-full text-xl mt-14 col-span-2">
				<h1 className="text-2xl font-semibold">
					Hi, I am
					<br />
					<i className="text-4xl font-bold mt-5">Tiamiyu Samad Olanrewaju</i>
				</h1>
			</div>
			<div className="w-full row-span-2 flex flex-col">
				<img className="md:w-[75%] w-full my-10" alt="ME" src={pic} />
			</div>
			<div className="flex flex-col justify-start gap-5 items-center w-full mb-12 col-span-2 italics font-bold">
				<span className="text-xl mt-4 text-center">
					A Full-Stack Web Developer
				</span>
				<button className="hire">Hire Me!</button>
			</div>
		</div>
	);
}

export default MyInfo;
