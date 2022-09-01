<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-2 fw-bold">31</span>
      <span class="mx-1 fs-5">Agosto</span>
      <span class="mx-2 fs-5 fw-light">2022, Miercoles</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
      rerum consequuntur. Pariatur est alias commodi ipsum ea quasi minima? In
      possimus quas incidunt veniam qui pariatur. Enim, sequi fugit. Repellat.
      Modi natus nobis dolore velit perferendis beatae explicabo saepe, ab
      perspiciatis consequatur dolores molestiae veniam id
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>
