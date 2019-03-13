<template>
  <div>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card raised>
          <v-container fill-height fluid>
            <v-layout align-start row>
              <v-flex xs2 flexbox>
                <v-icon class="no_selection" @click="vote(+1)">arrow_upward</v-icon>
                <span class="vote_number">{{votes}}</span>
                <v-icon class="no_selection" @click="vote(-1)">arrow_downward</v-icon>
              </v-flex>
              <v-flex xs10>
                <span class="headline">{{question}}</span>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container fill-height fluid>
            <v-layout row align-end justify-end>
              <v-flex xs12>
                <v-layout align-center justify-center>
                  <span class="joke_answer">{{answer}}</span>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueVote: 0
    };
  },
  props: ["question", "answer", "votes"],
  methods: {
    vote(val) {
      if (this.votes + val >= 0) {
        this.votes += val;
      }
    }
  }
};
</script>

<style scoped>
.no_selection {
  -webkit-user-select: none; /* webkit (safari, chrome) browsers */
  -moz-user-select: none; /* mozilla browsers */
  -khtml-user-select: none; /* webkit (konqueror) browsers */
  -ms-user-select: none; /* IE10+ */
}

.joke_answer {
  font-size: 22px;
  font-style: italic;
}
.vote_number {
  font-size: 20px;
  margin: 0 5px;
}

.v-icon {
  cursor: pointer;
}
</style>