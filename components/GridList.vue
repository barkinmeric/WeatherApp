<template>
	<div class="grid grid-cols-2 bg-gray-800 sm:grid-cols-4">
		<GridListItem v-for="(weather, index) in weatherStore.rest" :key="index" :weather="weather" :location="weatherStore.location" />
	</div>
</template>

<script setup>
import { useWeatherStore } from "@/stores/WeatherStore";
const weatherStore = useWeatherStore();
</script>
