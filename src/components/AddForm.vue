<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Add Joke</h1>
        <v-card raised>
          <v-container fill-height fluid>
            <v-flex xs-12 sm-6 justify-center>
              <v-text-field v-model="question" label="Joke Question"></v-text-field>
            </v-flex>
          </v-container>
          <v-container fill-height fluid>
            <v-flex xs-12 sm-6 justify-center>
              <v-text-field v-model="answer" label="Joke Answer"></v-text-field>
            </v-flex>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex sm3 offset-sm8>
        <v-btn @click="addJoke" color="red" large>Add</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: ""
    };
  },
  methods: {
    addJoke() {
      const latestId = this.$store.getters.latestId;
      this.$store.dispatch("addJoke", {
        question: this.question,
        answer: this.answer,
        id: latestId + 1,
        votes: 0
      });
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped>
</style>