<script>
  import { Link } from 'svelte-routing';
  
  import { testQueryName } from '../store'
  export let id;
  const array = ['Anthony', 'John', 'Jane'];
</script>
<main class="pl-10 pr-10 mt-10 flex-col" style="font-size:2rem;">
  <div>
    {#if id} <!-- https://svelte.dev/tutorial/else-if-blocks -->
      {#each array as name} <!--https://svelte.dev/tutorial/each-blocks -->
        <p class="margin-around">Hello {id}: {name}</p>
      {/each}
    {:else}
      <div class="margin-around">
        <p>you can use path parameter [:id] as 123  >>  </p>
      </div>
      <div class="margin-around margin-vertical text-amber-200">
        <Link to="test/123">Go to "test/123"</Link>
      </div>
      <div class="margin-around">
        <p>you can use Query parameter [name] as yours  >>  </p>
      </div>
      <div class="margin-around margin-vertical text-red-500">
        <!-- Bad practice, DO NOT USE a tag when you redirect page -->
        <a href="/test?name=Anthony">[BAD PRACTICE] Go to "test?name=Anthony" with "a" tag</a>
        <br><br><p>=> Use a tag when you redirect outer page</p>
      </div>
      <div class="margin-around margin-vertical text-amber-200">
        <Link to="test?name=Anthony" on:click={()=>{testQueryName.set("Anthony")}}> Push query param with no refresh </Link>
        -> Push query and check state
      </div>
      <div class="margin-around margin-vertical text-amber-200">
        <Link to="query?name=Joe"> Go to "query?name=Joe" with Link</Link>
        -> Use Link when you redirect inner page
      </div>
    {/if}
  </div>
  <div class="ml-2 mt-10">
    <button><Link to="/">Go to Home</Link></button>
  </div>
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