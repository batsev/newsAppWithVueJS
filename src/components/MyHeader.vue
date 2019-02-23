<template>
  <div>
    <v-toolbar height="30">
      <v-toolbar-items style="margin: auto;">
        <v-btn
          v-for="(item, i) in menuItems"
          flat
          :key="`menuItems${i}`"
          :to="item.route"
          style="height:20px; text-transform: capitalize; margin: 0 5px;"
        >{{item.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
        {
          title: "Home",
          route: "/"
        },
        {
          title: "Business",
          route: "/business"
        },
        {
          title: "Entertainment",
          route: "/entertainment"
        },
        {
          title: "Health",
          route: "/health"
        },
        {
          title: "Science",
          route: "/science"
        },
        {
          title: "Sports",
          route: "/sports"
        },
        {
          title: "Technology",
          route: "/technology"
        },
        {
          title: "About",
          route: "/about"
        }
      ];
    }
  }
};
</script>





