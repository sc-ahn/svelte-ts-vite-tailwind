<script lang="ts">
  import Card from "../components/Card.svelte"
  import { mockResponse } from "../store"
  import { onMount } from "svelte"
  import { fetcher, type Response } from "../fetcher"
  import { getRoute } from "../utils"
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  onMount(async () => {
    const res:Response = await fetcher("GET", "https://jsonplaceholder.typicode.com/todos/1")
    mockResponse.set(res.data)
  })
</script>
<main class="flex-col">
  <div class="flex-col">
    <Card
      title="Svelte + Typescript + Vite + TailwindCSS"
      description={loremIpsum}
      width="w-full"
      height={400}
      titleSize={48}
      fontStyle="italic"
    />
  </div>
  <div class="flex">
    <Card
      image_url="https://picsum.photos/1024/300"
      width="w-1/4"
      height={300}
    />
    <Card
      image_url="https://picsum.photos/1023/300"
      width="w-1/4"
      height={400}
    />
    <Card
      image_url="https://picsum.photos/1022/300"
      width="w-1/4"
      height={500}
    />
    <Card
      image_url="https://picsum.photos/1021/300"
      width="w-1/4"
      height={200}
    />
  </div>
  <div class="pl-10 pr-10 mt-10" style="font-size: 4rem">
    <a href="{getRoute('/test')}" class="text-amber-200"> Go to Test page</a>
  </div>
  <div class="pl-10 pr-10 mt-10" style="font-size: 4rem">
    <p class="text-pink-200"> {`Fetched: ${$mockResponse.title}` ?? "Fetching..."}</p>
  </div>
</main>