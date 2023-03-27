export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-headlessui"],

	css: ["~/assets/css/aos.css"],

	headlessui: {
		prefix: "",
	},

	app: {
		head: {
			title: "Weather App",
			meta: [{ name: "description", content: "Weather App" }],
			link: [
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
				{ rel: "icon", href: "https://www.accuweather.com/images/weathericons/1.svg" },
			],
		},
	},

	runtimeConfig: {
		public: {
			API_KEY: process.env.API_KEY,
			API_URL: process.env.API_URL,
		},
	},
});
