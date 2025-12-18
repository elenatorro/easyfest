<script lang="ts">
  import SvelteMarkdown from '@humanspeak/svelte-markdown'
  let { data } = $props();
</script>
<section class="section">
    <section class="hero page-title">
      <h3 class="title">{data.title}</h3>
    </section>
    <div class="container">
        <div class="content content-border">
          {#if data.content}
          <SvelteMarkdown options={{mangle: false}} source={data.content}/>
          {/if}
        </div>
    </div>
</section>
