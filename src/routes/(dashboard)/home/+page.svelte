<script>
	import EmergencyButton from '$lib/components/EmergencyButton.svelte';

	const name = 'Aminu';
</script>

<section class="px-5 pb-20">
	<div class="flex items-center justify-between py-5">
		<p>
			Welcome {name}
		</p>
		<img src="/user2.png" alt="user" />
	</div>
	<EmergencyButton />
	<div class="grid grid-cols-2 gap-4 px-5 mt-10">
		<a href="/report-incident"> <img src="/report.png" alt="" /></a>
		<a href="/emergency-services"> <img src="/emergency-services.png" alt="" /></a>
		<a href="/contact-legal-aid"> <img src="/legal-aid.png" alt="" /></a>
		<a href="/resources"> <img src="/resources.png" alt="" /></a>
	</div>
</section>
