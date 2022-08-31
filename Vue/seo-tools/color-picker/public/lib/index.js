
let colors;

function change() {
	let file = document.getElementById("file").files[0] || arguments[0];
	let img = document.getElementById("img");
	let reader = new FileReader();
	img.onload = e => {
        showHide(img);
        showHide(document.querySelector(".drag-area"));
		colors = new ColorThief().getPalette(img, 10).map((e, i) =>
			tinycolor({
				r: e[0],
				g: e[1],
				b: e[2],
			}).toHexString()
		);
		// log
		render(colors);
	};
	reader.onload = e => {
		img.src = e.target.result;
	};
	reader.readAsDataURL(file);
}

function showHide(elem) {
	if (elem.classList.contains("hide")) {
		elem.classList.remove("hide");
	} else {
		elem.classList.add("hide");
	}
}

function render(arr = []) {
	arr.forEach(e => {
		let pal = document.createElement("div");
		pal.classList = `w-full square`;
		pal.innerHTML = `
			<div style="background: ${e}" class="w-full h-full">&nbsp;</div>
			<p>${e}</p>
		`;
		// pal.style.background = e;
		document.getElementById("palette").appendChild(pal);
	});
}
