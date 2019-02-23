<template>
  <v-flex md2 offset-md5 class=mt-3>
    <v-card elevation="0">
      <v-img height="300" :src="post.urlToImage"></v-img>
      <v-card-text class="px-0 test">{{post.title}}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState([
      'post'
    ])
  }
}
</script>

