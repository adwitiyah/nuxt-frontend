<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div>
          <div class="content">
            <h2 class="is-size-5">{{ i.attributes.Title }}</h2>
            <p>{{ i.attributes.Description.substring(0, 100) }}...</p>
            <!-- <p>{{ i.attributes.Slug }}</p> -->
          </div>
        </div>
        <br />
        <div class="button-container">
        <NuxtLink
          :to="{
            name: 'assignments-slug',
            params: { slug: i.attributes.Slug },
          }" class="start-button"
          >Start assessment
        </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["i"],
};
</script>
<style scoped>
.button-container {
  background-color: #1666f7;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  color: #fff;
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
}
.start-button {
  color: #fff;
}
</style>