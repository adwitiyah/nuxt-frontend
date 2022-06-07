<template>
  <div>
    <div v-for="article in articles.data" v-bind:key="article.id">
      <p class="is-size-5">{{ article.attributes.Title }}</p>
      <br />
      <p>Description:</p>
      <p>{{ article.attributes.Description }}</p>
      <br />
      <p>Rules</p>
      <p>{{ article.attributes.Rules }}</p>
      <p>Files required for the project</p>
      <br />
      <div v-for="i in article.attributes.Files.data" v-bind:key="i.id">
        <p>Click here to download the files for the project</p>
        <a :href="`http://localhost:1337${i.attributes.url}`" download=""
          >Download</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { assignmentQuery } from "../../graphql/assignmentQuery";
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
      query: assignmentQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
};
</script>
