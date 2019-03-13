<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Add Login</h1>
        <v-card raised>
          <v-container fill-height fluid>
            <v-flex xs-12 sm-6 justify-center>
              <v-text-field v-model="username" label="UserName"></v-text-field>
            </v-flex>
          </v-container>
          <v-container fill-height fluid>
            <v-flex xs-12 sm-6 justify-center>
              <v-text-field v-model="password" label="password" type="password"></v-text-field>
            </v-flex>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm3 offset-sm8>
        <v-btn @click="addLogin" color="red" large>Add</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("test");
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    addLogin() {
      this.$store.commit("ADD_USERNAME", this.username);
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
</style>