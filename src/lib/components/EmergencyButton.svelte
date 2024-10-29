<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { locationStore } from '$lib/store.js';

	const isLoading = writable(false);
	const errorMessage = writable('');
	const address = writable(null);

	async function getAddressFromCoordinates(latitude, longitude) {
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
				{
					headers: {
						'Accept-Language': 'en-US,en;q=0.9',
						'User-Agent': 'Emergency Location App'
					}
				}
			);
			if (!response.ok) throw new Error('Failed to fetch address');
			const data = await response.json();
			return {
				city: data.address.city || data.address.town || data.address.village || 'N/A',
				state: data.address.state || 'N/A',
				country: data.address.country || 'N/A',
				fullAddress: data.display_name || 'N/A'
			};
		} catch (error) {
			console.error('Error fetching address:', error);
			throw new Error('Could not determine address from coordinates');
		}
	}

	async function handleEmergencyClick() {
		isLoading.set(true);
		errorMessage.set('');
		address.set(null);

		try {
			if (!navigator.geolocation) {
				throw new Error('Geolocation is not supported by your browser');
			}

			const position = await new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject, {
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0
				});
			});

			const location = {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				timestamp: new Date().toISOString()
			};

			const addressInfo = await getAddressFromCoordinates(location.latitude, location.longitude);
			location.address = addressInfo;

			localStorage.setItem('emergencyLocation', JSON.stringify(location));
			locationStore.set(location);
			address.set(addressInfo);
		} catch (error) {
			console.error('Error:', error);
			errorMessage.set(error.message || 'Failed to get location');
		} finally {
			isLoading.set(false);
		}
	}

	onMount(() => {
		const savedLocation = localStorage.getItem('emergencyLocation');
		if (savedLocation) {
			const location = JSON.parse(savedLocation);
			locationStore.set(location);
			if (location.address) {
				address.set(location.address);
			}
		}
	});

	function formatCoordinate(coord) {
		return coord ? coord.toFixed(6) : 'N/A';
	}

	function formatTimestamp(timestamp) {
		if (!timestamp) return 'N/A';
		return new Date(timestamp).toLocaleString();
	}
</script>

<div class="flex flex-col items-center justify-center p-10 space-y-3">
	<button on:click={handleEmergencyClick} disabled={$isLoading} class="relative">
		<img
			src="/emergency.svg"
			alt="Emergency assistance"
			class="w-32 {$isLoading ? 'animate-pulse opacity-50' : ''}"
		/>
		{#if $isLoading}
			<div class="absolute inset-0 flex items-center justify-center">
				<div
					class="w-6 h-6 border-4 border-t-transparent border-red-500 rounded-full animate-spin"
				></div>
			</div>
		{/if}
	</button>
	<p class="text-xl">Ask for help</p>
	{#if $errorMessage}
		<p class="text-red-500 text-sm">{$errorMessage}</p>
	{/if}
	{#if $locationStore}
		<div class="mt-4 p-4 bg-gray-100 rounded-lg shadow-sm w-full max-w-md">
			<h3 class="text-lg font-semibold mb-2">Current Location</h3>
			<div class="space-y-2 text-sm">
				{#if $address}
					<div class="mb-4 p-3 bg-white rounded-md">
						<p class="font-medium text-base mb-2">Address Information:</p>
						<p>
							<span class="font-medium">City:</span>
							{$address.city}
						</p>
						<p>
							<span class="font-medium">State:</span>
							{$address.state}
						</p>
						<p>
							<span class="font-medium">Country:</span>
							{$address.country}
						</p>
						<p class="mt-2 text-xs text-gray-600">
							<span class="font-medium">Full Address:</span>
							{$address.fullAddress}
						</p>
					</div>
				{/if}
				<p>
					<span class="font-medium">Latitude:</span>
					{formatCoordinate($locationStore.latitude)}°
				</p>
				<p>
					<span class="font-medium">Longitude:</span>
					{formatCoordinate($locationStore.longitude)}°
				</p>
				<p class="text-gray-600">
					<span class="font-medium">Last Updated:</span>
					{formatTimestamp($locationStore.timestamp)}
				</p>
			</div>
		</div>
	{/if}
</div>
