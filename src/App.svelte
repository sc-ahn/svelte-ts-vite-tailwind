<script lang="ts">
  import { Router, Route } from "svelte-routing"
  import Home from "./routes/Home.svelte";
  import Test from "./routes/Test.svelte";
</script>

<main>
  <Router>
    <Route path="/" component={Home} />
    <Route path="/test" component={Test} />
    <Route path="/test/:id" component={Test} />
  </Router>
</main>

<style>
</style>