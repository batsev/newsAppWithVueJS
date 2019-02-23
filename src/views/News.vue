<template>
  <div id="app">
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
    this.getNews(this.$route.path)
  },
  methods: {
    getNews (path) {
      const category = path.replace('/', '')
      axios
        .get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4ddbcf5bce9f487297a630ba3a90c3ed`)
        .then(res => (this.headlines = res.data.articles));      
    }
  },
  watch: {
    '$route' (to, from) {
      this.getNews(to.path)
    }
  }
};
</script>