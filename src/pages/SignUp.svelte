<script lang="ts">
  // Components
  import HeroPattern from "../components/HeroPattern.svelte"
  import Nav from "../layout/Nav.svelte"
  import HeroText from "../components/HeroText.svelte"
  import Countdown from "../components/Countdown.svelte"
  import SignUpForm from "../components/SignUpForm.svelte"

  const text = {
    headline: "Work smarter. Save time.",
    description: "Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon."
  }

  window.scrollTo(0, 0)
</script>

<div class="sign-up">
  <div class="pattern">
    <HeroPattern />
  </div>
  <Nav />
  <div class="sign-up__grid">
    <HeroText hideBtn={true} content={text} />
    <Countdown theme={"light"} />
    <SignUpForm />
  </div>
</div>

<style lang="scss" global>
  @use "../styles/query";

  .sign-up {
    padding-inline: var(--spacing-m--1);
    padding-bottom: 8rem;

    .countdown { margin-top: var(--spacing-xl--1); }
    .form { margin-top: var(--spacing-xl--1); }

    @include query.respond(tab) {
      padding-inline: var(--spacing-l--1);
      
      .nav { padding-inline: unset; }
      .hero-pattern { display: none!important; }
      .hero-text { 
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 8rem;
        text-align: center;

        &__headline { width: 100%; }
        &__description { width: 70%; }

       }
    }

    @include query.respond(desktop) {
      padding-inline: 16.5rem;
      overflow: hidden;

      .pattern {
        background-color: var(--color-footer-bg);
        content: "";
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        width: 25vw;
        z-index: -1;

        & > div {
          transform: scale(.8)!important;
          top: 30%!important;
        }
      }

      .hero-pattern { display: flex!important; }
      
      &__grid {
        align-items: center;
        display: grid;
        gap: 0 8rem;
        grid-template-areas:
          "hero-text form"
          "countdown form";
      }

      .hero-text {
        align-items: flex-start;
        grid-area: hero-text;
        text-align: left;

        &__headline { width: 80%; }
      }

      .form { 
        grid-area: form; 
        width: 44.5rem;
      }

      .countdown { 
        align-items: flex-start!important;
        grid-area: countdown;
      }
    }
    
  }
</style>