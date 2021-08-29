<script lang="ts">
  export let value: boolean;
  export let onChange: (newValue: boolean) => void;
</script>

<div
  class:active={value}
  on:click={() => onChange?.(!value)}
>
  <slot />
</div>

<style lang="scss">
  div {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 12px;
    margin-right: 4px;

    user-select: none;
    cursor: pointer;
    
    background-color: #F5F5F5;
    transition: background-color 0s ease-in-out;
    &.active {
      background-color: #E0E0E0;
    }
  }
</style>