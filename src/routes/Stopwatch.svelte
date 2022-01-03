<script lang="ts">
	import { onMount } from 'svelte';
	import event from './event';

	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	onMount(() => {
		setInterval(() => {
			const time = new Date().getTime() - new Date(event.date).getTime();
			days = Math.floor(time / (1000 * 60 * 60 * 24));
			hours = Math.floor(time / (1000 * 60 * 60)) % 24;
			minutes = Math.floor(time / (1000 * 60)) % 60;
			seconds = Math.floor(time / 1000) % 60;
		}, 200);
	});
</script>

<div class="w-full flex items-center justify-center mb-4">
	<div>
		<span class="block text-2xl text-center">It has been</span>
		<span class="font-display block text-5xl text-center my-2"
			>{days}d {hours}h {minutes}m {seconds}s</span
		>
		<span class="block text-xl text-center"
			>since Manjaro <span class="inline-block font-display">!$%&?*#</span> up.</span
		>
		<span class="block">
			On <span class="inline-block font-display">2021-12-27 </span>, they {event.reason}
		</span>
	</div>
</div>
