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
      <v-row v-if="calculatorMode">
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
      <v-row v-else>
        <v-col cols="12" class="text-center">
          <span
            class="text-h3"
            v-text="answerNumber"
          ></span>
        </v-col>
        <v-col cols="12">
          <v-slider
            v-model="answerNumber"
            color="primary"
            min="1"
            max="100"
          ></v-slider>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn
            :disabled="disabled"
            color="primary"
            @click="$emit('answer', Number(answerNumber))"
          >
            けってい
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
  data() {
    return {
      answerNumber: 1
    }
  },
  computed: {
    question() {
      return this.items[this.currentIndex]
    },
    calc() {
      const attirbutes = {
        addition: '+',
        subtraction: '-',
        multiplication: '×',
        division: '÷'
      }
      return attirbutes[this.calcType]
    },
    calculatorMode() {
      return this.calcType === 'addition' || this.calcType === 'subtraction'
    }
  }
}
</script>
