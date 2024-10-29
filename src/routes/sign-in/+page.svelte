<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import { goto } from '$app/navigation';
</script>

<Navbar />
<form class="p-4 space-y-4">
	<h3 class="text-center block flex-1">Log in to your account</h3>
	<div>
		<label for="phone-number-or-email-address" class="block text-sm font-medium leading-6 text-[#545F71]">Phone Number/Email Address</label>
		<div class="mt-1">
			<input
				type="text"
				name=""
				required
				id="phone-number-or-email-address"
				placeholder="Enter your phone number or email address"
				class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
			>
		</div>
	</div>

	<div>
		<label for="password" class="block text-sm font-medium leading-6 text-[#545F71]">Password</label>
		<div class="mt-1">
			<input
				type="password"
				name="password"
				required
				id="password"
				placeholder="Enter your password"
				class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
			>
		</div>
	</div>

	<div class="mt-8">
		<button
			type="button"
			on:click={() => goto("/home")}
			class="inline-block text-center rounded-full w-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
		>
			Log in
		</button>
	</div>
</form>