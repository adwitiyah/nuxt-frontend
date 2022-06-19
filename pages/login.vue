<template>
  <div class="login">
    <div class="hero is-info">
      <div class="hero-body has-text-centered">
        <h1 class="title">Log in</h1>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <form v-on:submit.prevent="submitForm">
              <div class="field">
                <label>Email</label>
                <div class="control">
                  <!-- <input type="email" class="input" v-model="username" /> -->
                  <input type="email" class="input" />
                </div>
              </div>

              <div class="field">
                <label>Password</label>
                <div class="control">
                  <!-- <input type="password" class="input" v-model="password" /> -->
                  <input type="password" class="input" v-model="password" />
                </div>
              </div>

              <!-- <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </p>
              </div> -->

              <div class="field">
                <div class="control">
                  <button class="button is-dark">Log in</button>
                  <hr />
                  <button
                    class="button is-dark google-login"
                    @click="
                      {
                        loginGoogle;
                      }
                    "
                  >
                    Log in with google
                  </button>
                </div>
              </div>
            </form>

            <!-- <hr /> -->

            <p class="link">
              Or <router-link to="/signup">click here</router-link> to sign up!
            </p>
            <p class="link">
              Or <router-link to="/login-recuiter">click here</router-link> to
              login as a recruiter!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = "Login | SkillProofed";
  },
};

// import axios from "axios";
// import api from "../utils/api";
// export default {
//   data() {
//     return {
//       username: "",
//       password: "",
//       errors: [],
//     };
//   },
//   mounted() {
//     document.title = "Log in | StudyNet";
//   },
//   methods: {
//     submitForm() {
//       console.log("submitForm");
//       axios.defaults.headers.common["Authorization"] = "";
//       localStorage.removeItem("token");
//       this.errors = [];
//       if (this.username === "") {
//         this.errors.push("The username is missing!");
//       }
//       if (this.password === "") {
//         this.errors.push("The password is missing!");
//       }
//       if (!this.errors.length) {
//         const formData = {
//           username: this.username,
//           password: this.password,
//         };
//         api
//           .post("/login", formData)
//           .then((response) => {
//             const token = response.data.auth_token;
//             this.$store.commit("setToken", token);
//             axios.defaults.headers.common["Authorization"] = "Token " + token;
//             localStorage.setItem("token", token);
//             this.$router.push("/dashboard/my-account");
//           })
//           .catch((error) => {
//             if (error.response) {
//               for (const property in error.response.data) {
//                 this.errors.push(
//                   `${property}: ${error.response.data[property]}`
//                 );
//               }
//               console.log(JSON.stringify(error.response.data));
//             } else if (error.message) {
//               this.errors.push("Something went wrong. Please try again");

//               console.log(JSON.stringify(error));
//             }
//           });
//       }
//     },
//   },
// };
</script>
<style scoped>
button.button {
  width: -webkit-fill-available;
}
.link {
  padding-top: 20px;
}
.google-login {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  /* background-color: white; */
  background-repeat: no-repeat;
  background-position: 12px 11px;
}
</style>
