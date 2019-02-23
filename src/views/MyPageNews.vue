<template>
  <div>
    <my-header/>
    <v-card elevation="0">
      <v-img height="300"></v-img>
      <v-card-text class="px-0"></v-card-text>
    </v-card>
    <my-footer/>
  </div>
</template>

<script>
export default {
  name: "MyPageNews",
  props: ["headline"]
};
</script>

