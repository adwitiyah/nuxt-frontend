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
      <div v-for="i in article.attributes.image.data" v-bind:key="i.id" class="image-container">
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
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,800&display=swap');
div {
  font-family: 'Montserrat', sans-serif;
}
.hero-container {
  height: auto;
}
.section-container {
  display: flex;
  background-color: #333;
  justify-content: space-between;
}
.section-container img{
  width: auto;
}
.text-container {
  height: 300px;
  padding-top: 60px;
  padding-left: 80px;
  /* color: #fff; */
  
}
.image-container {
  width: 45%;
  display: flex;
  justify-content: center;
}
.image-container figure{
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
}
.text-container h1 {
  color: #fff;
  font-size: 36px;
  font-weight: 600;
}
.text-container h3 {
  color: #fff;
  font-size: 24px;
}
.assessment-container {
  margin-top: 45px;
  margin-left: 60px;
  margin-bottom: 60px;
}
@media screen and (max-width: 50em) {
  .section-container{
    flex-direction: column-reverse;
    padding-bottom: 30px;
  }
  .text-container {
    padding-left: 15px;
    padding-right: 15px;
  }
  .text-container h1{
    line-height: 45px;
    padding-bottom: 20px;
  }
  .text-container h3{
    padding-top: 10px;
    font-size: 20px;
  }
  .image-container {
    width: auto;
  }
  .image-container figure{
  width: 100%;
  margin-top: 0;
  margin-left: 0;
  }
  .assessment-container {
  margin-top: 45px;
  margin-left: 10px;
  margin-right: 10px;
  }
}
</style>
