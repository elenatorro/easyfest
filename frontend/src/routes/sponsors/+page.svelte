<script lang="ts">
  let { data } = $props();
</script>

<section class="section">
    <section class="hero page-title">
        <h3 class="title">{data.title}</h3>
    </section>
    <div class="container">
        <ul class="list has-hoverable-list-items">
            {#each data.sponsors as sponsor}
                <li class="list-item box">{sponsor.level} - {sponsor.order}: {sponsor.name} {sponsor.description}</li>
            {/each}
        </ul>
    </div>
</section>
