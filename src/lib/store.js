import { writable } from 'svelte/store';

export let steps = writable(0);
export let locationStore = writable(null);
