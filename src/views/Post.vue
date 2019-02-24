<template>
  <div class="myContainer">
    <p style="font-size: 32px; line-height: 36px; font-weight: 700;">{{post.title}}</p>
    <v-img width="750" :src="post.urlToImage"></v-img>
    <p
      style="font-size: 16px; line-height: 22px; font-weight:700; padding: 10px 0;"
    >{{post.description}}</p>
    <div class="text-xs-center">
      <v-btn class="test4" :href="post.url">Full</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["post"])
  }
};
</script>

