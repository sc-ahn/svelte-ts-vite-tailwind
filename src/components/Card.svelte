<script>
  export let title=""
  export let description=""
  export let image_url = ""
  export let width = "w-full"
  export let height = 200 // px
  export let titleSize = 48 // px
  export let fontStyle = "normal";
</script>

<div class="{width}" style="height:{height}px;">
  <div class="bg-cover bg-center p-4" style="background-image: url({image_url}); height: {height}px;">
    <p class="text-white font-bold leading-tight mt-2 mb-4" style="font-size:{titleSize}px; font-style:{fontStyle};">{title}</p>
    <p class="text-white" style="font-size:{titleSize/2}px; font-style:{fontStyle};">{description}</p>
  </div>
</div>

<style>
</style>