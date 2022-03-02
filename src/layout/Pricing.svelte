<script lang="ts">
  // Components
  import PricingCard from "../components/PricingCard.svelte"
  // Animations
  import { pricingCardsAnim } from "../animations"
  // Core
  import { onMount } from "svelte"

  onMount(() => pricingCardsAnim())

  const generateCardInfo = (pack, price, billing, features) => {
    return {
      package: pack,
      price,
      billing,
      features
    }
  }

  const cards = [
    {
      info: generateCardInfo("Basic", "Free", "Up to 5 users for free", ["Basic document collaboration", "2 GB storage", "Great security and support"]),
      isProPack: false
    },
    {
      info: generateCardInfo("Pro", "$9.99", "Per user, billed monthly", ["All essential integrations", "50 GB storage", "More control and insights"]),
      isProPack: true
    },
    {
      info: generateCardInfo("Ultimate", "$19.99", "Per user, billed monthly", ["Robust work management", "100 GB storage", "VIP support"]),
      isProPack: false
    }
  ]

</script>

<section class="pricing-section">
  {#each cards as card} 
    <PricingCard 
      info={card.info}
      isProPack={card.isProPack} />
  {/each}
</section>

<style lang="scss">
  @use "../styles/query";

  .pricing-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m--2);
    padding-inline: var(--spacing-m--1);
    position: relative;
    margin-top: 10rem;

    @include query.respond(tab) {
      padding-inline: var(--spacing-l--1);
    }

    @include query.respond(desktop) {
      flex-direction: row;
      justify-content: center;
      padding-inline: 16.5rem;
    }

    &::before {
      background-color: var(--color-footer-bg);
      bottom: -1rem;
      content: "";
      height: 51%;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: -1;
    }
  }
</style>