<script lang="ts">
  // Routing
  import { Link } from "svelte-routing"

  export let content: string
  export let btnType: string
  export let marginTop: string
  export let page: string = "/"
  export let isFullWidth: string = ""
</script>


{#if page !== "sign-up"}
  <Link to="/sign-up">
    <button class="btn btn--{btnType} {marginTop}">
      {content}
    </button>
  </Link>
{:else}
  <button class="btn btn--{btnType} {marginTop} {isFullWidth}">
    {content}
  </button>
{/if}

<style lang="scss">
  @use "../styles/mixins";

  .btn {
    border: none;
    border-radius: 2.8rem;
    cursor: pointer;
    padding: 1.4rem 4rem;
    transition-property: background-color, color, transform;
    transition: all .3s ease-out;

    &:hover { transform: translateY(-5px) }
    &:focus-visible { outline: 3px solid var(--color-accent); }

    @include mixins.fontStyle(var(--fsize-s), 700, 2.8rem);

    &--1 {
      background-color: var(--color-accent);
      box-shadow: 0 2.5rem 2.5rem -1rem rgba(#3F5BC2, .24);
      color: #fff;

      &:hover { background-color: var(--color-btn-hover); }
    }

    &--2 {
      background-color: #E4EAFF;
      color: var(--color-accent);

      &:hover { background-color: #D3DDFF; }
    }

    &--3 {
      background-color: #fff;
      color: var(--color-accent);

      &:hover { color: var(--color-btn-hover); }
    }

    &.full-width { 
      width: 100%; 
    }
  }
</style>