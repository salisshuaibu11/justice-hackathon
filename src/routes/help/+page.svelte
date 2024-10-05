<script>
	import Navbar from '$lib/components/Navbar.svelte';

	let isModalOpen = false;
	let requestReceived = false
</script>

<Navbar />

<a href="/" class="flex items-center p-4">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_3_447" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
			<rect width="24" height="24" fill="#D9D9D9"/>
		</mask>
		<g mask="url(#mask0_3_447)">
			<path d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z" fill="#1C1B1F"/>
		</g>
	</svg>
	<span class="text-center block flex-1">I need help</span>
</a>

{#if !requestReceived}
	<form class="p-4 space-y-4">
		<div>
			<label for="help-text" class="block text-sm font-medium leading-6 text-gray-900">What do you need help with</label>
			<div class="mt-1">
				<input
					type="text"
					name="help-text"
					id="help-text"
					placeholder="I was raped"
					class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#C2C2C2] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
				>
			</div>
		</div>

		<div>
			<label for="date-of-incidence" class="block text-sm font-medium leading-6 text-gray-900">Date of incidence</label>
			<div class="mt-1">
				<input
					type="text"
					name="date-of-incidence"
					id="date-of-incidence"
					placeholder="21-10-24"
					class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#C2C2C2] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
				>
			</div>
		</div>

		<div>
			<label for="details-of-incidence" class="block text-sm font-medium leading-6 text-gray-900">Details of incidence</label>
			<div class="mt-1">
			<textarea
				name="details-of-incidence"
				id="details-of-incidence"
				placeholder="Details"
				rows="5"
				class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#C2C2C2] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
			></textarea>
			</div>
		</div>

		<div>
			<label for="date-of-incidence" class="block text-sm font-medium leading-6 text-gray-900">Your mobile number</label>
			<div class="mt-1">
				<input
					type="text"
					name="phone-number"
					id="phone-number"
					placeholder="09034848075"
					inputmode="tel"
					pattern="[0-9]{11}"
					class="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#C2C2C2] focus:ring-1 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
				>
			</div>
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
			on:click={() => isModalOpen = true}
			class="w-full rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800"
		>
			Send
		</button>
	</form>
	{:else}
	<section class="h-screen flex flex-col justify-center px-4">
		<div>
			<p class="text-center font-semibold text-[#181C1F] text-xl">
				Your request has been received and your location has been shared with emergency units, Help is on your way.
				Please keep your phone on.
			</p>
			<img class="mx-auto mt-10" src="/help.png" alt="help" />
		</div>
	</section>
{/if}

{#if isModalOpen}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
		<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
			<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">

					<div class="mt-3 text-center sm:mt-5">
						<h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
							Do you need a call for help?
						</h3>
					</div>

					<div class="mt-10 space-y-2">
						<button
							type="button"
							on:click={() => {
								requestReceived = true;
								isModalOpen = false;
							}}
							class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Yes, inform emergency units
						</button>
						<button
							type="button"
							on:click={() => isModalOpen = false}
							class="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
						>
							No
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

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