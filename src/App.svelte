<script lang="ts">
  // Pages
  import Home from "./pages/Home.svelte"
  import SignUp from "./pages/SignUp.svelte"
  // Third Party Libraries
  import { Router, Route } from "svelte-routing"

  export let url = ""
</script>

<main>
  <Router url="{url}">
    <Route path="/" component="{Home}" />
    <Route path="/sign-up" component="{SignUp}" />
  </Router>
</main>

<style lang="scss" global>
  @use "./main" as *;

  main { 
    position: relative; 
    overflow-x: hidden;
  }

</style>
