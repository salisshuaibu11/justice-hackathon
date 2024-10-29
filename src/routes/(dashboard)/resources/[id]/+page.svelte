<script>
	const resource = {
		id: 0,
		imgSrc: '/featured1.png',
		title: 'Understanding and Addressing Gender-Based Violence',
		author: 'Chinedu Okafor',
		authorImg: '/user2.png',
		readTime: '5 mins',
		text: 'Gender-based violence (GBV) is a pervasive issue that affects individuals across the globe, regardless of age, race, or socioeconomic status. It encompasses a range of harmful behaviors directed at individuals based on their gender, including physical, sexual, emotional, and psychological abuse. Addressing GBV requires a multifaceted approach that includes education, legal reforms, and support services for survivors. One of the key steps in combating GBV is raising awareness about its prevalence and impact. Education programs that challenge gender stereotypes and promote equality can help prevent violence before it starts. Additionally, legal frameworks must be strengthened to protect victims and hold perpetrators accountable.	Support services, such as counseling and shelters, are crucial for helping survivors rebuild their lives. Community involvement and collaboration among various stakeholders, including governments, NGOs, and the private sector, are essential for creating a comprehensive response to GBV.	By understanding the root causes of gender-based violence and implementing effective strategies to address it, we can work towards a safer and more equitable society for all.'
	};
</script>

<section>
	<div class="relative">
		<li class="w-full">
			<div class="">
				<img
					class="object-cover object-center h-[304px] w-full"
					src={resource.imgSrc}
					alt={resource.title}
				/>
			</div>
			<div class="space-y-1 absolute bottom-0 h-full linear flex flex-col items-end justify-end">
				<div class="text-white p-3">
					<span class="font-bold text-xl block mb-5">{resource.title}</span>
					<p class="flex items-center space-x-10 text-xs">
						<span class="flex items-center space-x-3">
							<img src={resource.authorImg} alt="" class="w-5 h-5 rounded-full" />
							<span>{resource.author}</span>
						</span>
						<span class="flex items-center space-x-3">
							<img src="/clock.svg" alt="" class="w-5 h-5 rounded-full" />
							<span>{resource.readTime}</span>
						</span>
					</p>
				</div>
			</div>
		</li>
	</div>
	<p class="p-5">{resource.text}</p>
</section>
