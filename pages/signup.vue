<template>
  <div class="signup">
    <div class="hero is-info">
      <div class="hero-body has-text-centered" style="background-color:white">
        <h1 class="title" style="color:#3f8ecf">
          Sign Up
        </h1>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <form v-on:submit.prevent="submitForm">
              <div class="field">
                <label>First Name</label>
                <div class="control">
                  <!-- <input
                    type="text "
                    class="input"
                    v-model="form.first_name"
                    v-model.trim="FirstName"
                  /> -->
                  <input
                    type="text "
                    class="input"
                    v-model.trim="FirstName"
                  />
                </div>
              </div>

              <div class="field">
                <label>Last Name</label>
                <div class="control">
                  <!-- <input
                    type="text "
                    class="input"
                    v-model="form.last_name"
                    v-model.trim="LastName"
                  /> -->
                  <input
                    type="text "
                    class="input"
                    v-model.trim="LastName"
                  />
                </div>
              </div>

              <div class="field">
                <label>Email</label>
                <div class="control">
                  <!-- <input
                    type="text "
                    class="input"
                    v-model="form.email"
                    v-model.trim="email"
                  /> -->
                  <input
                    type="text "
                    class="input"
                    v-model.trim="email"
                  />
                </div>
              </div>

              <div class="field">
                <label>Password</label>
                <div class="control">
                  <!-- <input
                    :type="show === true ? 'text' : 'password'"
                    class="input"
                    v-model="form.password"
                  /> -->
                  <input
                    :type="show === true ? 'text' : 'password'"
                    class="input"
                  />
                </div>
              </div>

              <div class="field">
                <label>Confirm password</label>
                <div class="control">
                  <!-- <input
                    :type="show === true ? 'text' : 'password'"
                    class="input"
                    v-model="form.confirm_password"
                  /> -->
                  <input
                    :type="show === true ? 'text' : 'password'"
                    class="input"
                  />
                </div>
              </div>

              <!-- <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </p>
              </div> -->

              <div class="field">
                <div class="control">
                  <button class="button is-dark">
                    Sign up
                  </button>
                </div>
                <hr />
                <div class="control">
                  <button
                    class="button google-signup is-dark"
                    @click="
                      {
                        loginGoogle();
                      }
                    "
                  >
                    Sign up with Google
                    <i class="fa-brands fa-google"></i>
                  </button>
                </div>
              </div>
            </form>
            <p class="link">
              Or <router-link to="/login">click here</router-link> to log in!
            </p>
            <p class="link">
              Or <router-link to="/signin-recuiter">click here</router-link> to
              signup as a recruiter!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
// import { inject } from "vue";
// // import { RouterLink } from "vue-router";
// var querystring = require("querystring");
// // import { library } from '@fortawesome/fontawesome-svg-core';
// // import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
// // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

// export default {
//   setup() {
//     const Vue3GoogleOauth = inject("Vue3GoogleOauth");
//     return {
//       Vue3GoogleOauth,
//     };
//   },
//   data() {
//     return {
//       form: {
//         first_name: "",
//         last_name: "",
//         email: "",
//         password: "",
//         confirm_password: "",
//       },
//     };
//   },
//   mounted() {
//     document.title = "Sign up | SkillProofed";
//   },
//   methods: {
//     submitForm() {
//       console.log("submitForm");

//       this.errors = [];

//       if (this.username === "") {
//         this.errors.push("The username is missing!");
//       }

//       if (this.password === "") {
//         this.errors.push("The password is missing!");
//       }

//       if (this.password !== this.password2) {
//         this.errors.push("The passwords are not matching!");
//       }

//       if (!this.errors.length) {
//         const formData = {
//           first_name: this.form.first_name,
//           last_name: this.form.last_name,
//           email: this.form.email,
//           password: this.form.password,
//         };
//         axios
//           .post("/signup", formData, {
//             headers: {
//               "Content-Type": "application/json; charset=utf-8",
//               "Access-Control-Allow-Origin": "*",
//               // "Access-Control-Allow-Methods": "POST",
//               // "Access-Control-Allow-Headers": "Authorization"
//               // "Access-Control-Allow-Credentials": "true"
//             },
//           })
//           .then((res) => {
//             console.log(res);
//             if (res.data.status) {
//               this.$router.push("/login");
//             } else {
//               //
//               this.$toast.open({
//                 message: "Please fill all the fields",
//                 type: "error",
//                 position: "top-right",
//               });
//             }
//           })
//           .catch((error) => {
//             // error.response.status Check status code
//             console.log(error);
//           })
//           .finally(() => {
//             //Perform action in always
//           });
//       }
//     },
//     async loginGoogle() {
//       try {
//         console.log("hello");
//         const googleUser = await this.$gAuth.signIn();
//         //const loggedIn = this.googleUser.isAuthorized();

//         if (!googleUser) {
//           return null;
//           //this.$router.push("/login");
//         }
//         console.log("getBasicProfile", googleUser.getBasicProfile().tf);

//         // this.isInit = this.$gAuth.isInit;
//         if (this.Vue3GoogleOauth.isAuthorized) {
//           console.log(this.isSignedIn);
//           const forms = {
//             username: this.username,
//             password: this.password,
//           };
//           this.$router.push("/dashboard/my-account");
//           this.$store.state.user.isAuthenticated = true;
//           // axios
//           //   .post("/api/v1/users/", forms.data)
//           //   .then((response) => {
//           //     console.log(response);
//           //     this.$router.push("/log-in");
//           //   })
//           //   .catch((error) => {
//           //     if (error.response) {
//           //       for (const property in error.response.data) {
//           //         this.errors.push(
//           //           `${property}: ${error.response.data[property]}`
//           //         );
//           //       }

//           //       console.log(JSON.stringify(error.response.data));
//           //     } else if (error.message) {
//           //       this.errors.push("Something went wrong. Please try again");

//           //       console.log(JSON.stringify(error));
//           //     }
//           //   });
//         }

//         //formData.password = googleUser.getBasicProfile().getEmail()

//         // const GoogleOauthIsAuthorized = inject('Vue3GoogleOauth');
//         // return {
//         //   GoogleOauthIsAuthorized,
//         // };
//         // if (GoogleOauthIsAuthorized.isAuthorized) {
//         //   document.getElementById("login-state").innerHTML("Logged In");
//         // }
//       } catch {
//         (error) => console.log(error);
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
.fa-google {
  color: #fff;
}
.google-signup {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  /* background-color: white; */
  background-repeat: no-repeat;
  background-position: 12px 11px;
}
</style>
