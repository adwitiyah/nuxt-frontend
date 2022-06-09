<template>
  <div class="card">
    <div class="card-content">
      <div
        class="media"
        v-for="i in message.attributes.image.data"
        v-bind:key="i.id"
      >
        <div class="media-content">
          <figure class="assessment-image">
            <img
              class="role-img"
              :src="`http://localhost:1337${i.attributes.url}`"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </div>
      <div class="content-container">
      <div class="assessment-content">
        <h1 class="assessment-title" style="font-size:24px; font-weight: 600;">{{ message.attributes.Title }}</h1>
        <br />
        <!-- <p class="is-size-5">{{ message.attributes.Slug }}</p> -->
        <h4 class="">{{ message.attributes.Description.substring(0, 50) }}...</h4>
      </div>
      <div>
      <NuxtLink
        :to="{
          name: 'courses-slug',
          params: { slug: message.attributes.Slug },
        }"
        >Explore</NuxtLink
      >
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,800&display=swap');
div {
  font-family: 'Montserrat', sans-serif;
}
.card-content {
  height: 400px;
}
.assessment-image img {
  width: 300px;
  height: 200px;
  object-fit: cover;
}
.assessment-image {
  display: flex;
  justify-content: center;
}
h1.assessment-title {
  font-size: 24px;
  font-weight: 600;
}
.assessment-content h4 {
  font-size: 16px;
  font-weight: 200;
  padding-bottom: 20px;
}
/* .content-container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
} */
@media screen and (max-width: 50em) {
  .card-content {
    height: auto;
  }
  .assessment-content h4 {
  font-size: 16px;
  font-weight: 400;
}
}