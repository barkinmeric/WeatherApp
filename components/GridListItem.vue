<template>
	<section>
		<div class="group mx-auto grid cursor-pointer grid-cols-1 grid-rows-1" @click="isOpen = true">
			<div class="col-start-1 row-start-1 my-auto text-center text-white opacity-0 transition-all duration-500 group-hover:z-20 group-hover:opacity-100">
				<p>{{ props.weather.date ? props.weather.date : "" }}</p>
				<h1 class="mb-4 leading-none tracking-tight">{{ props.weather.day.condition?.text }}</h1>
				<p class="font-light">
					{{ (props.weather.day.avgtemp_c ? props.weather.day.avgtemp_c + "°C / " : "") + (props.weather.day.avgtemp_f ? props.weather.day.avgtemp_f + "°F" : "") }}
				</p>
			</div>
			<div class="col-start-1 row-start-1 mx-auto transition-all duration-500 group-hover:z-10 group-hover:opacity-20">
				<img :src="props.weather.day.condition?.icon.replace('64x64', '128x128')" />
			</div>
		</div>
		<Modal :isOpen="isOpen" :location="location" :weather="weather.day" @closeModal="isOpen = false" />
	</section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	weather: {
		type: Object,
		required: true,
	},
	location: {
		type: Object,
		required: true,
	},
});

const isOpen = ref(false);
</script>
