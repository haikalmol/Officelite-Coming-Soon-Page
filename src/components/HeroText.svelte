<script lang="ts">
  // Animations
  import { heroTextAnim } from "../animations"
  // Components
  import Button from "./Button.svelte"
  // Core
  import { onMount } from "svelte"

   // Variable exports
  export let content
  export let hideBtn: boolean = false

  onMount(() => {
    heroTextAnim()
  })
</script>

<article class="hero-text" tabindex="0">
  <h1 class="hero-text__headline">{content.headline}</h1>
  <p class="hero-text__description">{content.description}</p>
  {#if !hideBtn}
    <Button 
      content="Get Started"
      btnType="1"
      marginTop="m--1" />
  {/if}
</article>

<style lang="scss">
  @use "../styles/mixins";
  @use "../styles/query";

  .hero-text {
    --fsize-clamped: #{clamp(var(--fsize-l), 5.3vw, var(--fsize-xxl))};
    --lheight-clamped: #{calc(var(--fsize-clamped) + .8rem)};

    margin-top: var(--spacing-xl--1);
    text-align: center;

    &__headline::selection {
        background-color: var(--color-accent);
        color: #fff;
    }

    &__description::selection {
        background-color: var(--color-accent);
        color: #fff;
    }

    @include query.respond(tab) {
      margin-top: unset;
      text-align: left;
    }

    &__headline {
      @include mixins.fontStyle(var(--fsize-clamped), 700, var(--lheight-clamped));

      @include query.respond(tab) {
        width: 60%;
      }
    }

    &__description {
      color: var(--color-body-text);
      margin-top: var(--spacing-m--1);

      @include mixins.fontStyle(var(--fsize-s), 400, 2.6rem);

      @include query.respond(tab) {
        width: 59%;
      }
    }
  }
</style>