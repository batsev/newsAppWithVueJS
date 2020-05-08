<template>
  <div id="app">
    <v-responsive style="background-color: #e9ecef;height: 300px;">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h3 class="display-3">Welcome to the most reliable news source!</h3>
            <span class="subheading">The one good, reliable, unbiased daily world news source</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <headline v-bind:headlines="headlines"/>
  </div>
</template>

<script>
import headline from "../components/Headline";
import axios from "axios";

export default {
  components: {
    headline
  },
  data() {
    return {
      headlines: []
    };
  },
  created() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=*apiKey**"
      )
      .then(res => (this.headlines = res.data.articles));
  }
};
</script>

