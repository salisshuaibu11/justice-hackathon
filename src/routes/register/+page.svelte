<script>
	import { classNames } from '$lib';
	import { steps } from '$lib/store.js';
	import Navbar from '$lib/components/Navbar.svelte';
	import CreateAccount from './_components/CreateAccount.svelte';
	import CompleteKyc from './_components/CompleteKyc.svelte';

	const OPTIONS = [
		{ id: 0, name: 'Victim', value: 'victim' },
		{ id: 1, name: 'Lawyers and human rights advocates', value: 'lawyers'},
		{ id: 2, name: 'Security agencies', value: 'security_agencies' },
	]
	let selected = "";

</script>

<Navbar />

{#if $steps === 0}
	<a href="/" class="flex items-center justify-between w-full p-4">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<mask id="mask0_3_447" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
				<rect width="24" height="24" fill="#D9D9D9"/>
			</mask>
			<g mask="url(#mask0_3_447)">
				<path d="M9 18L3 12L9 6L10.4 7.4L6.8 11H21V13H6.8L10.4 16.6L9 18Z" fill="#1C1B1F"/>
			</g>
		</svg>
		<span class="text-center block flex-1">Signed up as</span>
	</a>

	<fieldset aria-label="Privacy setting">
		<div class="rounded-md bg-white p-4 space-y-2">
			{#each OPTIONS as { name, value }}
				<button
					 type="button"
					 on:click={() => selected = value}
					class={
					classNames(
						"relative w-full justify-between flex cursor-pointer rounded-md rounded-br-md border py-4 px-3 focus:outline-none",
						selected === value ? 'text-primary border-primary border-2' : 'text-[#9BA5B7] border-[#545F71]'
					)}>
				<span class="flex flex-col">
					<span class='block text-sm font-medium'>{name}</span>
				</span>
					<input
						type="radio"
						name={selected}
						bind:value={value}
						class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer border-gray-300 text-primary focus:ring-primary active:ring-2 active:ring-primary active:ring-offset-2">
				</button>
			{/each}
		</div>

		<div class="px-4 mt-[14rem]">
			<button
				type="button"
				on:click={() => steps.set(1)}
				class="inline-block text-center rounded-full w-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
			>
				Proceed
			</button>
		</div>
	</fieldset>
	{:else if $steps === 1}
	<CreateAccount />
	{:else if $steps === 2}
	<CompleteKyc />
{/if}
