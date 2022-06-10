<template>
  <div>
    <div v-for="article in articles.data" v-bind:key="article.id">
      <!-- <div
        v-if="article.content"
        id="editor"
        v-html="$md.render(article.content)"
      ></div> -->
      <h1>{{ article.attributes.Title }}</h1>
      <h1>{{ article.attributes.Description }}</h1>
      <div v-for="i in article.attributes.image.data" v-bind:key="i.id">
        <figure>
          <img
            :src="`http://localhost:1337${i.attributes.url}`"
            alt=""
            srcset=""
          />
        </figure>
      </div>
      <div class="coulmn is-10">
        <div class="columns is-multiline">
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

<style>

</style>
