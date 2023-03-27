import { defineStore } from "pinia";
import axios from "axios";

export const useWeatherStore = defineStore("weatherStore", {
	state: () => ({
		location: {},
		forecast: {},
		loading: true,
	}),
	getters: {
		today() {
			if (!this.forecast.forecastday) return {};
			return this.forecast.forecastday[0].day;
		},
		rest() {
			if (!this.forecast.forecastday) return [];
			return this.forecast.forecastday.slice(1);
		},
	},
	actions: {
		async fetchForecast(lat, lon, callback) {
			const runtimeConfig = useRuntimeConfig();

			const response = await axios.get(runtimeConfig.public.API_URL, {
				params: { key: runtimeConfig.public.API_KEY, q: lat + "," + lon, days: 5 },
			});
			this.location = response.data.location;
			this.forecast = response.data.forecast;
			this.loading = false;
			callback();
		},
	},
});
