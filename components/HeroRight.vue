<template>
	<section class="bg-gray-900 py-12 px-8 sm:py-16 sm:px-12">
		<div class="mx-auto grid max-w-screen-xl cursor-pointer grid-cols-12 grid-rows-1 sm:gap-8" @click="isOpen = true">
			<div class="aos-right z-10 col-start-1 col-end-13 row-start-1 mx-auto max-w-sm opacity-20 sm:col-start-1 sm:col-end-6 sm:max-w-xl sm:opacity-100">
				<img :src="weatherStore.today.condition?.icon.replace('64x64', '128x128')" />
			</div>
			<div class="aos-left z-20 col-start-2 col-end-12 row-start-1 my-auto text-center text-white sm:col-start-6 sm:col-end-13">
				<p>
					{{
						(weatherStore.location.name ? weatherStore.location.name + " / " : "") +
						(weatherStore.location.region ? weatherStore.location.region + " / " : "") +
						(weatherStore.location.country ? weatherStore.location.country : "")
					}}
				</p>
				<p>
					{{
						(weatherStore.today.daily_chance_of_rain ? "Precipitation: " + weatherStore.today.daily_chance_of_rain + " / " : "") +
						(weatherStore.today.avghumidity ? "Humidity: " + weatherStore.today.avghumidity + " / " : "") +
						(weatherStore.today.maxwind_kph ? "Wind: " + weatherStore.today.maxwind_kph + " km/h " + weatherStore.today.maxwind_mph + " mph" : "")
					}}
				</p>
				<h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">{{ weatherStore.today.condition?.text }}</h1>
				<p class="max-w-2xl font-light md:text-lg lg:text-xl">
					{{ (weatherStore.today.avgtemp_c ? weatherStore.today.avgtemp_c + "°C / " : "") + (weatherStore.today.avgtemp_f ? weatherStore.today.avgtemp_f + "°F" : "") }}
				</p>
			</div>
		</div>
		<Modal :isOpen="isOpen" :location="weatherStore.location" :weather="weatherStore.today" @closeModal="isOpen = false" />
	</section>
</template>

<script setup>
import { ref } from "vue";
import { useWeatherStore } from "@/stores/WeatherStore";
const weatherStore = useWeatherStore();

const isOpen = ref(false);
</script>
