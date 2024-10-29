<script>
	import Navbar from '$lib/components/Navbar.svelte';

	const ITEMS = [
		{
			id: 0,
			img: "/safety.png",
			alt: "Your Safety is our priority",
			name: 'Your Safety, Our Priority',
			description: 'Empowering you to stay safe and take action in times of need.'
		},
		{
			id: 1,
			img: "/help.png",
			alt: "help",
			name: 'Help is Just a Tap Away',
			description: 'Use the Panic Button to instantly alert nearby responders in case of an emergency.',
		},
		{
			id: 2,
			img: "/support.png",
			alt: "Support",
			name: 'Access Legal Aid & Support',
			description: 'Connect with trusted legal experts and victim support services at subsidized rates.',
		},
	];

	let duration = 3000;

	$: current = 0;
	setInterval(() => {
		if (current === ITEMS.length - 1) {
			current = 0;
		} else {
			current++;
		}
	}, duration);
</script>

<Navbar />

<section class="px-4 pt-14">
	<div class="carousel">
		<div class="flex transition-all">
			{#each ITEMS as {img, alt, name, description}, index}
				<div class="{current === index ? 'block' : 'hidden'}" data-value={index}>
					<img class="mx-auto" src={img} {alt} />

					<div class="space-y-3 text-center my-10">
						<h2 class="font-bold text-2xl">{name}</h2>
						<p>{description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<a
		href="/register"
		class="inline-block text-center rounded-full w-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	>
		Get started
	</a>

	<p class="text-center my-2">Or</p>

	<a href="/sign-in" class="inline-block text-center bg-[#EEF1F4] rounded-full w-full px-4 py-2.5 text-sm text-gray-600">
		Already have an account?
		<span class="text-gray-900">Sign in</span>
	</a>
</section>