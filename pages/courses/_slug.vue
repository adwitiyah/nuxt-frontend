<template>
  <div>
    <div
      v-for="article in articles.data"
      v-bind:key="article.id"
      class="hero-container"
    >
      <!-- <div
        v-if="article.content"
        id="editor"
        v-html="$md.render(article.content)"
      ></div> -->
      <div class="section-container">
        <div class="text-container">
          <h1>{{ article.attributes.Title }}</h1>
          <h3>{{ article.attributes.Description }}</h3>
        </div>
        <div
          v-for="i in article.attributes.image.data"
          v-bind:key="i.id"
          class="image-container"
        >
          <figure>
            <img
              :src="`http://localhost:1337${i.attributes.url}`"
              alt=""
              srcset=""
            />
          </figure>
        </div>
      </div>
      <div class="coulmn is-10">
        <div class="columns is-multiline assessment-container">
          <div
            class="column is-4 mt-2"
            v-for="i in article.attributes.assignments.data"
            v-bind:key="i.id"
          >
            <AssignmentCard :i="i" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { articleQuery } from "../../graphql/articleQuery";
export default {
  data() {
    return {
      articles: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articleQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
};
</script>
