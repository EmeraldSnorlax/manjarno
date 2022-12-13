<script lang="ts">
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

	const currentTime = new Date().getTime() - new Date(event.date).getTime();
	let days = String(Math.floor(currentTime / (1000 * 60 * 60 * 24)));
	let hours = pad(Math.floor(currentTime / (1000 * 60 * 60)) % 24, 2);
	let minutes = pad(Math.floor(currentTime / (1000 * 60)) % 60, 2);
	let seconds = pad(Math.floor(currentTime / 1000) % 60, 2);

</script>

<div class="w-full flex items-center justify-center mb-32">
	<div>
		<span class="block text-2xl text-center">It has been</span>
		<span class="font-display block text-5xl text-center my-2"
			>{days}d {hours}h <span class="hidden md:inline-block">{minutes}m</span>
			<span class="hidden lg:inline-block">{seconds}s</span>
		</span>
		<span class="block text-xl text-center"
			>since Manjaro <span class="inline-block font-display">!$%&?*#</span> up.</span
		>
		<span class="block">
			On <span class="inline-block font-display"
				>{event.date.getFullYear()}-{pad(event.date.getMonth() + 1, 2)}-{pad(
					event.date.getDate(),
					2
				)}
			</span>, they {event.reason}
		</span>
	</div>
</div>
