<template>
  <div class="courses">
    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <h1 class="title">Roles</h1>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2">
            <aside class="menu">
              <p class="menu-label">Categories</p>

              <ul class="menu-list">
                <li>
                  <a> All Roles </a>
                </li>
                <li
                  v-for="data in roles"
                  v-bind:key="data"
                  @click="setActiveCategory(data)"
                >
                  <a>{{ data.attributes.Title }}</a>
                </li>
              </ul>
            </aside>
          </div>

          <div class="column is-10">
            <div class="columns is-multiline">
              <div
                class="column is-4"
                v-for="message in messages.data"
                v-bind:key="message.id"
              >
                <Cards :message="message" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { messageQuery } from "../graphql/query";
export default {
  mounted() {
    document.title = "Roles | SkillProofed";
  },
  name: "IndexPage",
  data() {
    return {
      messages: [],
    };
  },
  apollo: {
    messages: {
      prefetch: true,
      query: messageQuery,
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,800&display=swap");
div {
  font-family: "Montserrat", sans-serif;
}
</style>
