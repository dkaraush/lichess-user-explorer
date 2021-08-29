<script>
  export let location, navigate;

  let username;
</script>

<main>
  <input
    type="text"
    bind:value={username}
  />
  <button
    on:click={() => navigate(`/${username}`)}
  >
    Go
  </button>
</main>

<style lang="scss">
  main {
    > input {

    }
  }
</style>