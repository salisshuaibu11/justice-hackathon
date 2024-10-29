<script>
	let searchQuery = ''; // bind this to the input
	const LAWYERS = [
		{
			id: 0,
			imgSrc: '/lawyer.png',
			name: 'Chinedu Okafor',
			role: 'Family Law Lawyer',
			price: 'From N20,000'
		},
		{
			id: 1,
			imgSrc: '/lawyer.png',
			name: 'Amina Bello',
			role: 'Criminal Defence Attorney',
			price: 'Free'
		},
		{
			id: 2,
			imgSrc: '/lawyer.png',
			name: 'Tunde Adebayo',
			role: 'Immigration Lawyer',
			price: 'From N18,000'
		},
		{
			id: 3,
			imgSrc: '/lawyer.png',
			name: 'Ngozi Nwosu',
			role: 'Personal Injury Attorney',
			price: 'From N22,000'
		},
		{
			id: 4,
			imgSrc: '/lawyer.png',
			name: 'Emeka Eze',
			role: 'Human Right Lawyer',
			price: 'Free'
		},
		{
			id: 5,
			imgSrc: '/lawyer.png',
			name: 'Funke Adeyemi',
			role: 'Real Estate Attorney',
			price: 'From N28,000'
		}
	];

	// Filter contacts based on the search query
	$: filteredContacts = LAWYERS.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<section class="space-y-5 mt-5 px-5">
	<p class="text-center">Contact Legal Aids</p>
	<div class="w-full">
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

	<ul class="space-y-4 pb-24">
		{#each filteredContacts as { id, imgSrc, name, role, price }}
			<!-- Link to lawyer details page based on lawyer ID -->
			<a href={`/contact-legal-aid/${id}`}>
				<li class="p-2 w-full flex items-center justify-between cursor-pointer">
					<div class="flex items-center space-x-3">
						<img class="w-16 h-16 rounded-full" src={imgSrc} alt={name} />
						<div class="space-y-1">
							<span class="inline-block font-semibold text-lg">{name}</span>
							<p class="font-light text-sm">{role}</p>
						</div>
					</div>
					<div>
						{#if price === 'Free'}
							<span class="text-xs bg-green-400 px-5 py-1 rounded-full">{price}</span>
						{:else}
							<span class="text-xs bg-[#E9E1FF] px-5 py-1 rounded-full">{price}</span>
						{/if}
					</div>
				</li>
			</a>
		{/each}
	</ul>
</section>
