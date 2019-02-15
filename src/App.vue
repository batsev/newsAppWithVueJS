<template>
  <v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>-->
    <my-header/>
    <v-content>
      <router-view/>
    </v-content>
    <my-footer/>
  </v-app>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
export default {
  components: {
    MyHeader,
    MyFooter
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>

