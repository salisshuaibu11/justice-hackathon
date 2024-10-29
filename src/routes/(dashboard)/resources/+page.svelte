<script>
	let searchQuery = '';
	const FEATURED_RESOURCES = [
		{
			id: 0,
			imgSrc: '/featured1.png',
			title: 'Understanding and Addressing Gender-Based Violence',
			author: 'Chinedu Okafor',
			authorImg: '/user2.png',
			readTime: '5 mins'
		},
		{
			id: 1,
			imgSrc: '/featured2.png',
			title: 'Legal Rights of Domestic Workers in Nigeria',
			author: 'Amina Bello',
			authorImg: '/user2.png',
			readTime: '7 mins'
		}
	];
	const TOP_RESOURCES = [
		{
			id: 0,
			imgSrc: '/resource-img.png',
			title: 'Understanding and Addressing Gender-Based Violence',
			author: 'Chinedu Okafor',
			authorImg: '/user2.png',
			readTime: '5 mins'
		},
		{
			id: 1,
			imgSrc: '/resource-img.png',
			title: 'Legal Rights of Domestic Workers in Nigeria',
			author: 'Amina Bello',
			authorImg: '/user2.png',
			readTime: '7 mins'
		},
		{
			id: 2,
			imgSrc: '/resource-img.png',
			title: 'Navigating the Nigerian Immigration System',
			author: 'Tunde Adebayo',
			authorImg: '/user2.png',
			readTime: '10 mins'
		},
		{
			id: 3,
			imgSrc: '/resource-img.png',
			title: 'Personal Injury Claims: What You Need to Know',
			author: 'Ngozi Nwosu',
			authorImg: '/user2.png',
			readTime: '8 mins'
		},
		{
			id: 4,
			imgSrc: '/resource-img.png',
			title: 'Human Rights Violations and Legal Remedies',
			author: 'Emeka Eze',
			authorImg: '/user2.png',
			readTime: '6 mins'
		},
		{
			id: 5,
			imgSrc: '/resource-img.png',
			title: 'Real Estate Law: Buying and Selling Property',
			author: 'Funke Adeyemi',
			authorImg: '/user2.png',
			readTime: '9 mins'
		},
		{
			id: 6,
			imgSrc: '/resource-img.png',
			title: 'Family Law: Child Custody and Support',
			author: 'Chinedu Okafor',
			authorImg: '/user2.png',
			readTime: '5 mins'
		},
		{
			id: 7,
			imgSrc: '/resource-img.png',
			title: 'Criminal Defense: Your Rights and Options',
			author: 'Amina Bello',
			authorImg: '/user2.png',
			readTime: '7 mins'
		},
		{
			id: 8,
			imgSrc: '/resource-img.png',
			title: 'Understanding Immigration Visas and Permits',
			author: 'Tunde Adebayo',
			authorImg: '/user2.png',
			readTime: '10 mins'
		},
		{
			id: 9,
			imgSrc: '/resource-img.png',
			title: 'Personal Injury: Steps to Take After an Accident',
			author: 'Ngozi Nwosu',
			authorImg: '/user2.png',
			readTime: '8 mins'
		},
		{
			id: 10,
			imgSrc: '/resource-img.png',
			title: 'Human Rights: Legal Framework and Enforcement',
			author: 'Emeka Eze',
			authorImg: '/user2.png',
			readTime: '6 mins'
		}
	];

	$: filteredResources = TOP_RESOURCES.filter((resource) =>
		resource.title.toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<section class="space-y-5 mt-5 px-5">
	<p class="text-center">Resources</p>
	<div class="w-full">
		<div class="flex items-center w-full border border-black rounded-xl p-2 mb-10">
			<img src="/search.svg" alt="" class="w-5 h-5" />
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

	<ul class="grid grid-cols-2 gap-4 pb-10 overflow-hidden overflow-x-scroll">
		{#each FEATURED_RESOURCES as { id, imgSrc, title, author, authorImg, readTime }}
			<a href={`/resources/${id}`} class="relative rounded-xl overflow-hidden">
				<li class="w-full cursor-pointer">
					<div class="">
						<img class="object-cover object-center h-[304px] w-full" src={imgSrc} alt={title} />
					</div>
					<div
						class="space-y-1 absolute bottom-0 h-full linear flex flex-col items-end justify-end"
					>
						<div class="text-white p-3">
							<span class="">{title}</span>

							<span class="flex items-center space-x-3 text-xs mt-5">
								<img src={authorImg} alt="" class="w-5 h-5 rounded-full" />
								<span>{author}</span>
							</span>
						</div>
					</div>
				</li>
			</a>
		{/each}
	</ul>
	<h3 class="font-semibold text-2xl pb-5">Top Resources</h3>
	<ul class="space-y-4 pb-24">
		{#each filteredResources as { id, imgSrc, title, author, authorImg, readTime }}
			<a href={`/resources/${id}`}>
				<li class="p-2 w-full flex items-center justify-between cursor-pointer">
					<div class="flex items-center space-x-3">
						<img class="w-[129px] h-[129px]" src={imgSrc} alt={title} />
						<div class="space-y-1">
							<span class="">{title}</span>
							<p class="flex items-center justify-between text-xs">
								<span class="flex items-center space-x-3">
									<img src={authorImg} alt="" class="w-5 h-5 rounded-full" />
									<span>{author}</span>
								</span>
								<span class="flex items-center space-x-3">
									<img src="/clock.svg" alt="" class="w-5 h-5 rounded-full" />
									<span>{readTime}</span>
								</span>
							</p>
						</div>
					</div>
				</li>
			</a>
		{/each}
	</ul>
</section>
