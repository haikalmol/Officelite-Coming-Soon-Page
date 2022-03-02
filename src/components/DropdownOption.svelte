<script lang="ts">
  // Graphic Assets
  import IconCheck from "../assets/sign-up/icon-check.svg"

  export let content
  export let isChecked
  export let selectOption
  export let index
</script>

<div on:click={selectOption} data-item={index} class="dropdown__option">
  <p>
    <span>{content.type}</span>
    <span>{content.price}</span>
  </p>
  {#if isChecked}
    <img src={IconCheck} alt="" />
  {/if}
</div>

<style lang="scss">
  .dropdown__option {
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    
    &:hover { background-color: var(--color-accent); }
    &:hover img { filter: brightness(30); }
    &:hover span:first-of-type { color: #fff; }
    &:hover span:last-of-type { color: rgba(233, 233, 233, 0.571); }

    span {
      font-size: var(--fsize-s);
      font-weight: 700;

      &:first-of-type { color: var(--color-headline); }
      &:last-of-type { color: rgba(#333950, .4); }
    }
  }
</style>