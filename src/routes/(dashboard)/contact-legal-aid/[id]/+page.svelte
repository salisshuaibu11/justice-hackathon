<!-- <script context="module">
	export async function load({ params }) {
		const { id } = params;
	}
</script> -->

<script>
	const lawyer = {
		id: 0,
		imgSrc: '/lawyer.png',
		name: 'Chinedu Okafor',
		role: 'Family Law Lawyer',
		price: 'From N20,000'
	};
</script>

<section class="p-5 mt-5 text-center">
	<img src={lawyer.imgSrc} class="mx-auto" alt={lawyer.name} />
	<p class="text-center font-semibold text-xl mt-3 mb-1">{lawyer.name}</p>
	<p class="text-center">{lawyer.role}</p>
	<div class="my-10 p-5 flex items-center justify-between border-2 rounded-lg">
		<div class="flex flex-col gap-2">
			<img src="/star.svg" alt="" class="w-10 h-10 mx-auto" />
			<p>4.5/5</p>
		</div>
		<div class="flex flex-col gap-2">
			<img src="/dollar.svg" alt="" class="w-10 h-10 mx-auto" />
			<p class="whitespace-nowrap">{lawyer.price}</p>
		</div>
		<div class="flex flex-col gap-2">
			<img src="/cases.svg" alt="" class="w-10 h-10 mx-auto" />
			<p class="whitespace-nowrap">300 Cases</p>
		</div>
	</div>
	<button
		class="border border-primary px-10 rounded-xl py-4 bg-primary/5 flex items-center mx-auto space-x-3 text-sm"
	>
		<img src="/message.png" alt="" class="w-5 h-5" />
		<span>Send message</span>
	</button>
</section>
