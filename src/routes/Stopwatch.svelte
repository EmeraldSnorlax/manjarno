<script lang="ts">
	import { onMount } from 'svelte';
	import event from './event';

	/**
	 * Pad a number with zeros such that it always has a length of `length`.
	 * @param number The number to pad.
	 * @param length The length of the resulting string.
	 */
	function pad(number: number, length: number): string {
		let str = '' + number;
		while (str.length < length) {
			str = '0' + str;
		}

		return str;
	}
	let days = '??';
	let hours = '??';
	let minutes = '??';
	let seconds = '??';

	onMount(() => {
		setInterval(() => {
			const time = new Date().getTime() - new Date(event.date).getTime();
			days = String(Math.floor(time / (1000 * 60 * 60 * 24)));
			hours = pad(Math.floor(time / (1000 * 60 * 60)) % 24, 2);
			minutes = pad(Math.floor(time / (1000 * 60)) % 60, 2);
			seconds = pad(Math.floor(time / 1000) % 60, 2);
		}, 200);
	});
</script>

<div class="w-full flex items-center justify-center mb-32">
	<div>
    <noscript class="text-center inline-block w-full text-red-600">
      Enable JavaScript to see the stopwatch.
    </noscript>
		<span class="block text-2xl text-center">It has been</span>
		<span class="font-display block text-5xl text-center my-2"
			>{days}d {hours}h <span class="hidden md:inline-block">{minutes}m</span> <span class="hidden lg:inline-block">{seconds}s</span>
      </span>
		<span class="block text-xl text-center"
			>since Manjaro <span class="inline-block font-display">!$%&?*#</span> up.</span
		>
		<span class="block">
			On <span class="inline-block font-display">2021-12-27 </span>, they {event.reason}
		</span>
	</div>
</div>
