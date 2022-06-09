<template>
  <div class="card">
    <div class="card-content">
      <div
        class="media"
        v-for="i in message.attributes.image.data"
        v-bind:key="i.id"
      >
        <div class="media-content">
          <figure class="image">
            <img
              class="role-img"
              :src="`http://localhost:1337${i.attributes.url}`"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </div>
      <div class="content">
        <p class="is-size-5">{{ message.attributes.Title }}</p>
        <br />
        <!-- <p class="is-size-5">{{ message.attributes.Slug }}</p> -->
      </div>
      <NuxtLink
        :to="{
          name: 'courses-slug',
          params: { slug: message.attributes.Slug },
        }"
        >Know More</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>
<style scoped>
.role-img {
  max-width: auto;
  height: 200px;
}
</style>