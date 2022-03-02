<script lang="ts">
  // SVG Components
  import IllustrationChart from "../components/svg/IllustrationChart.svelte"
  // Components
  import HeroText from "../components/HeroText.svelte"

  let text = {
    headline: "A simple solution to complex tasks is coming soon",
    description: "Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity"
  }

</script>

<section class="hero-section">
  <IllustrationChart />
  <HeroText content={text} />
</section>

<style lang="scss">
  @use "../styles/mixins";
  @use "../styles/query";

  .hero-section {
    padding-inline: var(--spacing-m--1);
    position: relative;
    margin-top: var(--spacing-xl--2);

    @include mixins.flexColCenter;

    @include query.respond(tab) {
      flex-direction: row-reverse;
      padding-inline: var(--spacing-l--1);
    }

    @include query.respond(desktop) {
      padding-inline: 16.5rem;
    }
  }

</style>