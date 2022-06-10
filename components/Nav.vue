<template>
  <nav
    class="navbar is-info"
    role="navigation"
    aria-label="main naviation"
    style="min-height: 5rem"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item is-size-4" to="/">
        <div class="logo-container">
          <img
            src="../assets/SkillProofed.png"
            class="logo"
            alt="SkilledProof.png"
          />
        </div>
      </router-link>
      <div
        class="navbar-burger"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <!-- <div v-if="$store.state.user.isAuthenticated">
          <router-link to="/courses" class="navbar-item">Roles</router-link>
        </div>
        <div v-else>
          <router-link to="/login" class="navbar-item">Roles</router-link>
        </div> -->
        <!-- <router-link
          v-if="$store.state.user.isAuthenticated"
          to="/courses"
          class="navbar-item"
          >Roles</router-link
        > -->
        <router-link to="/role" class="navbar-item">Roles</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="isAuthenticated">
              <router-link to="/user/me">My-Account</router-link>
              <a
                class="button is-info"
                href="/logout"
                @click.prevent="userLogout"
                >Logout</a
              >
            </template>

            <template v-else>
              <router-link to="/signup" class="button is-primary"
                ><strong
                  ><span class="sign-up">Sign up</span></strong
                ></router-link
              >
              <router-link to="/login" class="button is-light"
                >Log in</router-link
              >
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  data: function () {
    return {
      showNav: false,
    };
  },
  methods: {
    async userLogout() {
      await this.$auth.logout();
    },
  },
};
</script>

<style scoped>
img.logo {
  padding-left: 20px;
  padding-top: 10px;
}
div.navbar-brand {
  min-height: 4.25rem;
}
/* .sign-up {
  margin-right: 15px;
} */
.buttons {
  gap: 15px;
}
.navbar-burger {
  margin-top: 10px;
}
</style>
