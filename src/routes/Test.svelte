<script>
  export let id;

  const urlParams = new URLSearchParams(window.location.search);
  const isNameExist = urlParams.has('name');
  const array = ['Anthony', 'John', 'Jane'];
</script>
<main class="pl-10 pr-10 mt-10" style="font-size:2rem;">
  {#if id} <!-- https://svelte.dev/tutorial/else-if-blocks -->
    {#each array as name} <!--https://svelte.dev/tutorial/each-blocks -->
	    <p class="margin-around">Hello {id}: {name}</p>
    {/each}
  {:else}
    {#if isNameExist}
      <p class="margin-around">Hello {urlParams.get('name')}</p>
    {:else}
      <div class="margin-around">
        <p>you can use path parameter [:id] as 123  >>  </p>
      </div>
      <div class="margin-around margin-vertical text-amber-200">
        <a href="/test/123" class="text-amber-200">Go to "test/123"</a>
      </div>
      <div class="margin-around">
        <p>you can use Query parameter [name] as yours  >>  </p>
      </div>
      <div class="margin-around margin-vertical text-amber-200">
        <a href="/test?name=Anthony" class="text-amber-200">Go to "test?name=Anthony"</a>
      </div>
    {/if}
  {/if}
</main>

<style>
  .margin-around {
    margin: 10px;
  }
  .margin-vertical {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>