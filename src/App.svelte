<script lang="ts">
	import { Router, Route, Link } from 'svelte-navigator';
	import MainPage from './MainPage.svelte';
	import UserPage from './UserPage.svelte';

</script>

<Router primary={false}>
	<Route path="/" component={MainPage} />
	<Route path="/:username" component={UserPage} />
</Router>