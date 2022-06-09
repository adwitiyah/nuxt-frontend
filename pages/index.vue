<template>
  <div class="home">
    <div
      class="hero is-info is-medium"
      style="background-color:white; gap:20px"
    >
      <div class="columns ">
        <div class="column is-three-fifths hero-body  ">
          <div class="left-align">
            <h1 class="title" style="color:#fba04d">
              Welcome to ScaleUP!
            </h1>
            <br />
            <h2 class="subtitle" style="color:#393e5b">
              We help young talent get discovered by the
              leading tech companies.
            </h2>
          </div>
          <div class="column left-align">
            <a href="/signup" class="button is-info is-size-5 mt-6 "
              >Know More!</a
            >
          </div>
        </div>

        <div class="image-container">
          <img class="column" src="../assets/homedesign1.png" />
        </div>
      </div>
    </div>

    <section class="section has-text-centered">
      <div class="container">
        <div class="columns is-multiline is-justify-content-center">
          <div class="column is-3">
            <div class="box">
              <h2 class="is-size-3 mt-5 mb-5">Standard Defination</h2>

              <p>No Job requisitions required.</p>
              <p>We set clear expectations for each role, to avoid those long listskills/nice haves more suited.</p>
              <p></p>
            </div>
          </div>
          <br /><br />
          <div class="column is-3">
            <div class="box">
              <h2 class="is-size-3 mt-5 mb-5">Simple Connections</h2>

              <p>
                We Connect both sides of the hiring equation, skipping that
                awkward first date phase adn questions of 'What do they want?'
                and 'What do they offer?'
              </p>
            </div>
          </div>

          <div class="column is-3">
            <div class="box">
              <h2 class="is-size-3 mt-5 mb-5">Access to Skilled Community</h2>
              <p>
                Our users are consistently engaged, learning, growing and
                upskilling to ensure that their knowledge are kept up to date
                and relevant.
              </p>
            </div>
          </div>

          <div class="column is-12 has-text-centered">
            <a href="/signup" class="button is-info is-size-4 mt-6 mb-6"
              >Click to get started</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";

// import CourseItem from "@/components/CourseItem.vue";

export default {
  name: "Home",
  data() {
    return {
      courses: [],
    };
  },
  // components: {
  //   CourseItem,
  // },
  mounted() {
    console.log("mounted");

    document.title = "Welcome | SkillPoofed";

    // axios.get("courses/get_frontpage_courses/").then((response) => {
    //   console.log(response.data);

    //   this.courses = response.data;
    // });
  },
};
</script>

<style>
/* .image img {
  width: auto;
  height: auto;
  max-width: 50%;
  max-height: 100%;
} */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,800&display=swap');
body {
  font-family: 'Montserrat', sans-serif;
}
.body {
  max-width: 50%;
  height: auto;
}
.image-container {
  align-self: center;
}
.left-align {
  margin-left: 180px;
}
a.button {
  margin-left: -12px;
}
img.column {
  width: 85%;
  /* margin-left: 60px; */
}
.box {
  height: 350px;
  text-align: left;
}
.box h2 {
  font-weight: 600;
  line-height: 40px;
}
@media screen and (max-width: 50em) {
  .left-align {
    margin-left: 20px;
  }
  h2.subtitle {
    font-size: 16px;
  }
  .box {
    height: 350px;
  }
  .image-container {
    display: flex;
    justify-content: center;
  }
  img.column {
    width: 75%;
    margin: 0 20px;
  }
}
</style>
