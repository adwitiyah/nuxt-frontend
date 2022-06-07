<template>
  <div class="coulmn is-10">
    <div class="cloumns is-multiline">
      <div
        class="column is-2"
        v-for="message in messages.data"
        v-bind:key="message.id"
      >
        <Cards :message="message" />
      </div>
    </div>
  </div>
</template>

<script>
import { messageQuery } from "../graphql/query";
export default {
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
