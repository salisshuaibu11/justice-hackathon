<script>
import { steps } from '$lib/store.js';
import { goto } from '$app/navigation';
</script>

<button type="button" on:click={() => steps.set(1)} class="flex items-center justify-between w-full p-4">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_3_447" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
			<rect width="24" height="24" fill="#D9D9D9"/>
		</mask>
		<g mask="url(#mask0_3_447)">
			<path d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z" fill="#1C1B1F"/>
		</g>
	</svg>
	<span class="text-center block flex-1">Complete KYC</span>
</button>

<form class="p-4 space-y-4">
	<div>
		<label for="full-name" class="block text-sm font-medium leading-6 text-[#545F71]">Full Name</label>
		<div class="mt-1">
			<input
				type="text"
				name="full-name"
				required
				id="full-name"
				placeholder="Enter your name"
				class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
			>
		</div>
	</div>

	<div>
		<label for="location" class="block text-sm font-medium leading-6 text-[#545F71]">Location</label>
		<div class="mt-1">
			<input
				type="text"
				name="location"
				required
				id="location"
				placeholder="(Geo-location detection or manual entry)"
				class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
			>
		</div>
	</div>

	<div>
		<label for="preferred-service" class="block text-sm font-medium leading-6 text-[#545F71]">Preferred service</label>
		<select id="preferred-service" name="preferred-service" class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6">
			<option selected>Legal assistance</option>
			<option>Report</option>
			<option>Emergency</option>
		</select>
	</div>

	<div>
		<label for="id-type" class="block text-sm font-medium leading-6 text-[#545F71]">ID type</label>
		<select id="id-type" name="id-type" class="block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-[#9BA5B7] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6">
			<option selected>Drivers license</option>
			<option>International Passport</option>
		</select>
	</div>

	<div class="text-center flex items-center space-x-2">
		<img class="w-auto" src="/image-thumbnail.png" alt="thumbnail" />
		<div class="text-xs text-left text-gray-600 space-y-2">
			<p>Please upload image of any Evidence , size less than 100KB</p>
			<input type="file" accept="image/*">
		</div>
	</div>

	<button
		type="button"
		on:click={() => goto("/home")}
		class="inline-block text-center rounded-full w-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
	>
		Submit
	</button>
</form>

<style>
    input[type=file] {
        max-width: 100%;
        color: #444;
        background: #F8FCFF;
        border-radius: 10px;
        padding: 2px;
    }

    input[type=file]::file-selector-button {
        margin-right: 20px;
        border: 1px solid #084cdf;
        background: transparent;
        padding: 10px 20px;
        border-radius: 5px;
        color: #084cdf;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }
</style>