<script lang="ts">
  import { Router, Route } from "svelte-routing"
  import Home from "./routes/Home.svelte";
  import Query from "./routes/Query.svelte";
  import Test from "./routes/Test.svelte";
  import { joinBase } from "./utils"
</script>

<main>
  <Router>
    <Route path="" component={Home} />
    <Route path="{joinBase('test')}" component={Test} />
    <Route path="{joinBase('test/:id')}" component={Test} />
    <Route path="{joinBase('query')}" component={Query} />
  </Router>
</main>

<style>
</style>