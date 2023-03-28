<template>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" class="relative z-10" @click="$emit('closeModal')">
			<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div class="flex min-h-full items-center justify-center p-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<div class="flex items-center justify-between px-2 pt-4 pb-2 text-black">
								<h1 class="font-bold">
									{{ location.name + " / " + location.region + " / " + location.country }}
								</h1>
								<button @click="$emit('closeModal')">
									<svg class="h-8 w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
									</svg>
								</button>
							</div>
							<ul class="px-2 pt-4 pb-2 text-black">
								<li class="text-xl">
									<p v-if="celsius" class="mr-1 inline">
										{{ weather.avgtemp_c ? weather.avgtemp_c : "" }}
									</p>
									<p v-if="!celsius" class="mr-1 inline">
										{{ weather.avgtemp_f ? weather.avgtemp_f : "" }}
									</p>
									<button :class="{ 'text-black': celsius, 'text-gray-500': !celsius }" @click="celsius = true">°C</button>
									<button :class="{ 'text-black': !celsius, 'text-gray-500': celsius }" @click="celsius = false">°F</button>
								</li>
								<li>
									{{ weather.daily_chance_of_rain ? "Precipitation: " + weather.daily_chance_of_rain + "%" : "" }}
								</li>
								<li>
									{{ weather.avghumidity ? "Humidity: " + weather.avghumidity + "%" : "" }}
								</li>
								<li>
									{{ weather.maxwind_kph ? "Wind: " + weather.maxwind_kph + " km/h " + weather.maxwind_mph + " mph" : "" }}
								</li>
							</ul>
						</DialogPanel>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	isOpen: {
		type: Boolean,
		default: false,
	},
	weather: {
		type: Object,
		default: null,
	},
	location: {
		type: Object,
		default: null,
	},
});

const celsius = ref(true);
</script>
