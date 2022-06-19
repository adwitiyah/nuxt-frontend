<template>
  <div class="signup">
    <div class="hero is-info">
      <div class="hero-body has-text-centered" style="background-color: white">
        <h1 class="title" style="color: #3f8ecf">Sign Up</h1>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <form v-on:submit.prevent="submitForm">
              <div class="field">
                <label>User Name</label>
                <div class="control">
                  <!-- <input
                    type="text "
                    class="input"
                    v-model="form.first_name"
                    v-model.trim="FirstName"
                  /> -->
                  <input type="text " class="input" v-model.trim="username" />
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
                  <input type="text " class="input" v-model.trim="email" />
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
                  <input class="input" />
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
                  <input class="input" />
                </div>
              </div>

              <!-- <div class="notification is-danger" v-if="errors.length">
                <p v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </p>
              </div> -->

              <div class="field">
                <div class="control">
                  <button class="button is-dark">Sign up</button>
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
export default {
  auth: "guest",
  data() {
    return {
      success: false,
      err: [],
      username: "",
      email: "",
      password: "",
    };
  },
  mounted() {
    document.title = "Signin | SkillProofed";
  },
  methods: {
    async userRegister() {
      try {
        if (this.username === "") {
          this.err.push("The username is missing!");
        }

        if (this.password === "") {
          this.err.push("The password is missing!");
        }

        if (this.password !== this.password2) {
          this.err.push("The passwords are not matching!");
        }
        if ((err = null)) {
          this.$axios.setToken(false);
          await this.$axios.post("/auth/local/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          });
          console.log("here");
          this.success = true;
        }
      } catch (e) {
        if (e.response) this.err = e.response.data.error.message;
      }
    },
  },
};
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
