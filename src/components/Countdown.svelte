<script lang="ts">
  // Animations
  import { countdownAnim } from "../animations"
  // Core
  import { onMount } from "svelte"

  export let theme: string

  onMount(() => countdownAnim())
</script>

<article class="countdown {theme}" tabindex="0">
  <p class="countdown__deadline">Coming <span>4 Nov 2020</span></p>
  <div class="countdown__time">
    <div class="countdown__days" tabindex="0">
      <span class="countdown__amount">47</span>
      <span class="countdown__unit">days</span>
    </div>
    <div class="countdown__hours" tabindex="0">
      <span class="countdown__amount">07</span>
      <span class="countdown__unit">hours</span>
    </div>
    <div class="countdown__minutes" tabindex="0">
      <span class="countdown__amount">56</span>
      <span class="countdown__unit">min</span>
    </div>
    <div class="countdown__seconds" tabindex="0">
      <span class="countdown__amount">14</span>
      <span class="countdown__unit">sec</span>
    </div>
  </div>
</article>

<style lang="scss">
  @use "../styles/mixins";
  @use "../styles/query";

  .countdown {
    text-align: center;

    @include mixins.flexColCenter;

    &.dark {
      .countdown__deadline { color: #fff; }
    }

    &.light {
      .countdown__deadline { color: var(--color-headline); }
      .countdown__time > div { background-color: #E9EDFB; }
      .countdown__amount { color: var(--color-accent); }
      .countdown__unit { color: var(--color-headline); }
    }

    &__deadline {
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: .5rem;
      line-height: 4.8rem;
      text-transform: uppercase;

      span { color: var(--color-accent); }

      @include query.respond(desktop) {
        align-self: flex-start;
      }
    }

    &__time {
      display: flex;
      gap: 1.3rem;
      margin-top: var(--spacing-s--2);

      @include query.respond(tab) {
        gap: 1.6rem;
      }

      & > div {
        background-color: var(--color-headline);
        border-radius: .4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.05rem 1.65rem;

        &:focus-visible { outline: 3px solid var(--color-accent); }

        @include query.respond(tab) {
          border-radius: 1.3rem;
          height: 12.8rem;
          width: 10rem;
        }
      }
    }

    &__amount {
      --fsize-clamped: #{clamp(var(--fsize-l), 5vw, var(--fsize-xxl))};

      color: #fff;
      font-size: var(--fsize-clamped);
      font-weight: 700;
      line-height: 4.8rem;
    }

    &__unit {
      color: rgba(#fff, .5);
      font-size: var(--fsize-xs);
      font-weight: 700;
      line-height: 2.8rem;
    }
  }
</style>