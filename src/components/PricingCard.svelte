<script lang="ts">
  // Components
  import Button from "./Button.svelte"

  // Exports
  export let info: any
  export let isProPack

  const selectMargin = () => {
    const screenW = window.innerWidth

    if (screenW >= 768 && screenW <= 1200) return "m--1"
    return "m--2"
  }
</script>

<article class="pricing-card {isProPack ? "pro" : ""}" tabindex="0">
  <div class="pricing-pack" tabindex="0">
    <h2 class="pricing-title">{info.package}</h2>
    <div class="pricing-option">
      <p class="pricing-option__price">{info.price}</p>
      <p class="pricing-option__billing">
        {info.billing}
      </p>
    </div>
  </div>
  <ul class="pricing-features" tabindex="0">
    {#each info.features as feature}
      <li class="pricing-features__item">{feature}</li>
    {/each}
  </ul>
  <Button 
    content="Try for Free"
    btnType={isProPack ? "3" : "2"}
    marginTop={selectMargin()} />  
</article>

<style lang="scss">
  @use "../styles/mixins";
  @use "../styles/query";

  .pricing-card {
    background-color: #fff;
    box-shadow: 0 5rem 5rem -2.5rem rgba(#4B5C9A, .1);
    border-radius: 1.3rem;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: var(--spacing-l--1) 0;
    text-align: center;

    &:focus { outline: 3px solid var(--color-accent); }

    @include mixins.flexColCenter;

    @include query.respond(tab) {
      display: grid;
      grid-template-areas: 
        "pricing-pack pricing-features";
      padding: 4.8rem 0;
      padding-inline: 4.8rem 9rem;
      text-align: left;
    }

    @include query.respond(desktop) {
      grid-template-areas:
        "pricing-pack"
        "pricing-features";
      padding: 4rem 6.5rem;
      text-align: center;
    }

    &.pro {
      background-color: var(--color-accent);
      background-image: url("src/assets/home/bg-pattern-pricing.svg");
      background-size: 226%;
      background-position: center -75vw;
      background-repeat: no-repeat;

      &:focus { outline: 3px solid #fff; }

      @include query.respond(tab) {
        background-size: 180%;
        background-position: 90% -60vw;
      }
      
      & p, h2, li { color: #fff; }
    }
  }

  .pricing-pack {
    grid-area: pricing-pack;
  }

  .pricing-title {
    color: var(--color-headline);

    @include mixins.fontStyle(var(--fsize-m), 700, 2.8rem);
  }

  .pricing-option {
    margin-top: var(--spacing-l--1);

    @include query.respond(tab) {
      margin-top: var(--spacing-s--1);
    }

    &__price {
      @include mixins.fontStyle(var(--fsize-xxl), 700, 6.4rem);
    }

    &__billing {
      color: var(--color-headline);
      margin-top: .8rem;
      line-height: 2.8rem;
    }
  }

  .pricing-features {
    grid-area: pricing-features;
    margin-top: var(--spacing-l--2);

    &__item {
      color: var(--color-body-text);
      list-style: none;

      @include mixins.fontStyle(var(--fsize-s), 400, 2.8rem);

      &:not(:first-of-type) {
        margin-top: var(--spacing-s--1);
      }
    }
  }
</style>