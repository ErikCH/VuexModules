<template>
  <div id="app">
    <v-app>
      <!-- <div class="headline text-xs-center pa-5">Jokes app</div> -->
      <v-toolbar light>
        <v-toolbar-title>
          <router-link to="/">Jokes App</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn v-if="!userName" :to="{name: 'login'}" flat>Login</v-btn>
          <v-btn v-if="userName" flat>Welcome {{userName}}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <br>
      <!-- <router-link to="/" class="headline pa-5">Jokes App</router-link> -->
      <!-- <router-link to="/about">About</router-link> -->
      <router-view/>
    </v-app>
  </div>
</template>
<script>
export default {

  data() {
    return {};
  },
  computed: {
    userName() {
      return this.$store.getters.username;
    }
  }
};
</script>

<style scoped>
.headline,
a {
  text-decoration: none;
  color: black;
}
</style>
