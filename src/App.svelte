<script lang="ts">
  import { Router, Route } from "svelte-routing"
  import Home from "./routes/Home.svelte";
  import Test from "./routes/Test.svelte";
  import { joinBase, getRoute } from "./utils"
</script>

<main>
  <Router>
    <Route path="" component={Home} />
    <Route path="{joinBase('test')}" component={Test} />
    <Route path="{joinBase('test/:id')}" component={Test} />
  </Router>
</main>

<style>
</style>