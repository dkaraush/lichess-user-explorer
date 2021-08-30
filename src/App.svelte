<script lang="ts">
	import { Router, Route, Link } from 'svelte-navigator';
	import MainPage from './MainPage.svelte';
	import UserPage from './UserPage.svelte';

	let username = location.hash.substring(1);
	window.addEventListener('hashchange', () =>
		username = location.hash.substring(1)
	);

</script>

{#if username}
	<UserPage username={username} />
{:else}
	<MainPage
		onUsernameSet={u => {
			location.hash = u;
			username = u
		}}
	/>
{/if}