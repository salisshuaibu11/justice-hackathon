<script>
	import { steps } from '$lib/store.js';
</script>

<button type="button" on:click={() => steps.set(0)} class="flex items-center justify-between w-full p-4">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_3_447" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
			<rect width="24" height="24" fill="#D9D9D9"/>
		</mask>
		<g mask="url(#mask0_3_447)">
			<path d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z" fill="#1C1B1F"/>
		</g>
	</svg>
	<span class="text-center block flex-1">Create account</span>
</button>

<form class="p-4 space-y-4">
	<div>
		<label for="phone-number" class="block text-sm font-medium leading-6 text-[#545F71]">Phone Number</label>
		<div class="mt-1">
			<input
				type="text"
				name="phone-number"
				required
				id="phone-number"
				placeholder="Enter your phone number"
				class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
			>
		</div>
	</div>

	<div>
		<label for="email" class="block text-sm font-medium leading-6 text-[#545F71]">Email</label>
		<div class="mt-1">
			<input
				type="email"
				name="email"
				required
				id="email"
				placeholder="Enter your email"
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

	<div>
		<label for="password" class="block text-sm font-medium leading-6 text-[#545F71]">Password Again</label>
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

	<p class="text-center font-light">
		By signing up, you agree to our <a href="#" class="text-dark font-medium">Terms</a> and <a href="#" class="text-dark font-medium">Privacy Policy</a>
	</p>
</form>

<div class="px-4 mt-[6rem]">
	<button
		type="button"
		on:click={() => steps.set(2)}
		class="inline-block text-center rounded-full w-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	>
		Create Account
	</button>
</div>