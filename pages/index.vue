<template>
	<div v-show="!loading" class="overflow-hidden">
		<HeroRight />
		<GridList />
	</div>
	<div v-show="loading">
		<Loading />
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useWeatherStore } from "@/stores/WeatherStore";

const loading = ref(true);
const error = ref(null);
const weatherStore = useWeatherStore();

const callbackAfterFetch = () => {
	loading.value = false;
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("aos-show");
			} else {
				entry.target.classList.remove("aos-show");
			}
		});
	});
	let hiddenElements = document.querySelectorAll(".aos-left, .aos-right, .aos-down, .aos-up, .aos-down-right, .aos-up-left, .aos-down-left, .aos-up-right");
	hiddenElements.forEach((el) => observer.observe(el));
};

onMounted(() => {
	try {
		if (!("geolocation" in navigator)) {
			console.log("Geolocation is not available.");
		} else {
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					weatherStore.fetchForecast(pos.coords.latitude, pos.coords.longitude, callbackAfterFetch);
				},
				(err) => {
					console.log(err.message);
				},
			);
		}
	} catch (err) {
		error.value = err;
		console.log(err);
	}
});
</script>
