function Contact() {
	return (
		<div className="w-full h-full center">
			<form className="center flex-col py-8">
				<h1>My Contacts</h1>
				<div className="flex flex-col">
					<label>Gmail: </label>
					<input
						className="p-5"
						type="text"
						value="olanrewajusamad070@gmail.com"
						disabled
					/>
				</div>
			</form>
		</div>
	);
}

export default Contact;
