<script lang="ts">
  export let onUsernameSet : (username: string) => void;
  let username;
</script>

<main>
  <input
    type="text"
    bind:value={username}
  />
  <button
    on:click={() => onUsernameSet(username)}
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