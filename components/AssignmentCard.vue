<template>
  <div>
    <div class="card">
      <div class="card-content">
        <div>
          <div class="content">
            <p class="is-size-5">{{ i.attributes.Title }}</p>
            <p>{{ i.attributes.Description.substring(0, 100) }}...</p>
            <!-- <p>{{ i.attributes.Slug }}</p> -->
          </div>
        </div>
        <br />
        <NuxtLink
          :to="{
            name: 'assignments-slug',
            params: { slug: i.attributes.Slug },
          }"
          >know more...
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["i"],
};
</script>
