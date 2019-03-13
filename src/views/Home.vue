<template>
  <div>
    <div v-for="joke in jokes.jokes" :key="joke.id">
      <ListJokes :question="joke.question" :answer="joke.answer" :votes="joke.votes"/>
      <br>
    </div>
    <v-layout>
      <v-flex sm2 offset-sm6></v-flex>
      <v-btn :to="{name: 'add'}" color="red" large>Add Joke</v-btn>
    </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import ListJokes from "@/components/ListJokes.vue";
import { mapGetters } from "vuex";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("initStore");
  },
  data() {
    return {
      jokeList: {}
    };
  },
  components: {
    ListJokes
  },
  computed: {
    ...mapGetters(["jokes"])
  }
};
</script>
