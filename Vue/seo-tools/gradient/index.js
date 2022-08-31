let app = Vue.createApp({
	data() {
		return {
			type: 1,
			first: "",
			second: "",
			fp: 0,
			sp: 0,
			vd: 0,
			hd: 0,
			circle: false,
			types: [
				"linear-gradient",
				"repeating-linear-gradient",
				"radial-gradient",
				"repeating-radial-gradient",
				"conic-gradient",
				"repeating-conic-gradient",
			],
			direction: 0,
			shape: "",
		};
	},
	methods: {
		random(num) {
			let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
			let color = "#";
			for (let i = 0; i < 6; i++) {
				color += arr[Math.floor(Math.random() * arr.length)];
			}
			num == 1 ? (this.first = color) : (this.second = color);
		},
		copy() {
			navigator.clipboard.writeText(this.gradient);
		},
	},
	computed: {
		gradient() {
			let {
				types,
				type,
				fp,
				sp,
				position,
				isLinear,
				isConic,
				direction,
				circle,
				first,
				second
			} = this;
			return `background: ${types[type - 1]}(${
				circle && !isLinear && !isConic ? `circle` : ""
			} ${position && !isLinear ? position : ""}${
				!isLinear && !isConic && (circle || position)
					? ","
					: ""
			} ${isLinear && direction > 0 ? direction + "deg, " : ""}${
				first
			} ${fp > 0 ? fp + "%" : ""}, ${second} ${
				sp > 0 ? sp + "%" : ""
			});`;
		},
		isLinear() {
			return this.types[this.type - 1].includes("linear");
		},
		position() {
			let { vd, hd, isConic } = this;
			if (isConic) return null;
			if ((vd != 0 || hd != 0) && (vd > 0 || hd > 0)) {
				// vd = Math.abs(vd);
				// hd = Math.abs(hd);
				return `farthest-side at ${hd}% ${vd}%`;
			} else {
				vd = Math.abs(vd);
				hd = Math.abs(hd);
				return `closest-side at ${hd}% ${vd}%`;
			}
		},
		isConic() {
			let { type, types } = this;
			if (types[type - 1].includes("conic")) return true;
			return false;
		},
	},
	mounted() {
		this.random(1)
		this.random(2)
	},
}).mount("#app");
