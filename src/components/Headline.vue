<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex class="px-5" :key="headline.id" v-for="headline in headlines" md4 sm6 lg4>
        <v-card elevation="0">
          <v-img height="300" :src="headline.urlToImage"></v-img>
          <v-card-text>{{headline.title}}</v-card-text>
        </v-card>
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








