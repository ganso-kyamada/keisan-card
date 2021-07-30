<template>
  <v-card class="question-card">
    <v-card-title class="justify-center">
      {{ items.length }}もんちゅう
      {{ currentIndex + 1 }}もんめ
    </v-card-title>

    <v-card-text class="text-h3">
      {{ question[0] }} {{ calc }} {{ question[1] }} = ?
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col v-for="(_, i) in new Array(9)" :key="`val-${i}`" cols="4">
          <v-btn fab :disabled="disabled" color="primary" @click="$emit('answer', i + 1)">
            {{ i + 1 }}
          </v-btn>
        </v-col>

        <v-col cols="4" offset="4">
          <v-btn
            v-if="calc === '+'"
            :disabled="disabled"
            color="primary"
            fab
            @click="$emit('answer', 10)"
          >
            10
          </v-btn>
          <v-btn
            v-else
            :disabled="disabled"
            color="primary"
            fab
            @click="$emit('answer', 0)"
          >
            0
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    calcType: {
      type: String,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
    }
  },
  computed: {
    question() {
      return this.items[this.currentIndex]
    },
    calc() {
      return this.calcType === 'addition' ? '+' : '-'
    }
  }
}
</script>
