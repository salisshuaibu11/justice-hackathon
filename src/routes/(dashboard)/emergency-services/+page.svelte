<script>
	let searchQuery = ''; // bind this to the input
	const EMERGENCY_CONTACTS = [
		{
			id: 0,
			imgSrc: '/civil-defence.png',
			name: 'Nigeria Security & Civil Defence Corps',
			code: '165',
			phoneNumber: '09034848075'
		},
		{
			id: 1,
			imgSrc: '/police.png',
			name: 'Nigeria Police Force',
			code: '165',
			phoneNumber: '09034848075'
		},
		{
			id: 2,
			imgSrc: '/kadvs.png',
			name: 'Kaduna Vigilante Service',
			code: '165',
			phoneNumber: '09034848075'
		},
		{
			id: 3,
			imgSrc: '/woman-affairs.png',
			name: 'Federal Ministry of Women Affairs',
			code: '165',
			phoneNumber: '09034848075'
		},
		{
			id: 4,
			imgSrc: '/kadbusa.png',
			name: 'Kaduna Bureau of Substance Abuse',
			code: '165',
			phoneNumber: '09034848075'
		},
		{
			id: 5,
			imgSrc: '/naptip.png',
			name: 'NGO for gender based violence',
			code: '165',
			phoneNumber: '09034848075'
		}
	];

	// Filter contacts based on the search query
	$: filteredContacts = EMERGENCY_CONTACTS.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<section class="space-y-5 mt-5">
	<p class="text-center">Emergency Services</p>
	<div class="w-full px-5">
		<div class="flex items-center w-full border border-black rounded-xl p-2 mb-10">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="size-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>
			<input
				type="text"
				bind:value={searchQuery}
				name="search"
				id="search"
				class="border-none focus:ring-0 w-full"
				placeholder="Search"
			/>
		</div>
	</div>

	<ul class="grid px-5 gap-4 pb-24">
		{#each filteredContacts as { imgSrc, name, code, phoneNumber }}
			<li class="p-2 text-center w-full bg-[#F6F6F6] border border-[#A8A8A8] rounded-md">
				<img class="mx-auto" src={imgSrc} alt={name} />
				<span class="inline-block my-3">{name}</span>
				<div class="flex items-center justify-between">
					<span class="flex items-center space-x-4">
						<img src="/phone.svg" alt="" />
						<span class="text-red-500 underline">{code}</span>
					</span>
					<span class="flex items-center space-x-4">
						<img src="/phone.svg" alt="" />
						<a href="tel:{phoneNumber}" class="text-red-500 underline">{phoneNumber}</a>
					</span>
				</div>
			</li>
		{/each}
	</ul>
</section>
