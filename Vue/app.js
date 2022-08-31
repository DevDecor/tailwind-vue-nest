Vue.createApp({
	data(){
		return {
			books: [
				{
					title: "Jungle Cruise",
					author: "Me Day",
					isFav: true
				},
				{
					title: "Jungle Cruise 2",
					author: "Me D.",
					isFav: false
				},
				{
					title: "Jungle Cruise 3",
					author: "Me Dayy",
					isFav: true
				},
				{
					title: "Jungle Cruise 2",
					author: "Me D.",
					isFav: false
				},
				{
					title: "Jungle Cruise 3",
					author: "Me Dayy",
					isFav: true
				},
				{
					title: "Jungle Cruise 3",
					author: "Me Dayy",
					isFav: true
				},
				{
					title: "Jungle Cruise 3",
					author: "Me Dayy",
					isFav: true
				}
			]
		}
	},
	computed: {
		filtered(){
			return this.books.filter(e=>e.isFav)
		}
	}
}).mount("#app")