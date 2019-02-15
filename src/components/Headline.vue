<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap style="padding:0 300px">
      <v-flex class="px-4" :key="headline.id" v-for="headline in headlines" md4 sm6 lg4>
        <v-img height="200" :src="headline.urlToImage"></v-img>
        <v-card-text class="px-0">{{headline.title}}</v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "headline",
  props: ["headlines"]
};
</script>

<style scoped>
</style>


