<script>
  import { Link } from "svelte-routing";
  import { get } from "svelte/store"
  import { testQueryName } from "../store";
  const urlParams = new URLSearchParams(window.location.search);
  const isNameExist = urlParams.has('name');
</script>

<main>
  {#if isNameExist}
    <p class="text-2xl margin-around">Hello {urlParams.get('name')}</p>
    <p class="text-2xl margin-around">from store => {get(testQueryName)}</p>
  {:else}
    Hello
  {/if}
  <Link to="/">Go to Home</Link>
</main>