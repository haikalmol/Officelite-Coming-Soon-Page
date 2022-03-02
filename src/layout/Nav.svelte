<script lang="ts">
  // Graphic Assets
  import OfficeliteLogo from "../assets/shared/logo.svg"
  // Third Party
  import { Link } from "svelte-routing"
</script>

<Link to="/">
  <nav class="nav" tabindex="0">
    <img src={OfficeliteLogo} alt="Officelite Logo" class="nav__logo">
  </nav>
</Link>

<style lang="scss">
  @use "../styles/query";

  .nav {
    margin-top: 4.6rem;
    text-align: center;

    @include query.respond(tab) {
      padding-inline: var(--spacing-l--1);
      text-align: left;
      margin-top: 7.2rem;
    }

    @include query.respond(desktop) {
      padding-inline: 16.5rem;
    }
  }
</style>