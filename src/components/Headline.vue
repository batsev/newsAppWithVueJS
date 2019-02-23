<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex class="px-5" :key="headline.id" v-for="headline in headlines" md4 sm6 lg4>
        <v-card class="test1" @click="goTo(headline)" elevation="0" style="cursor: pointer">
          <v-img height="300" :src="headline.urlToImage"></v-img>
          <v-card-text class="px-0 test">{{headline.title}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "headline",
  props: ["headlines"],
  methods: {
    goTo: function(post) {
      this.$store.commit('SET_POST', post)
      this.$router.push('/post')
    }
  }
};
</script>








