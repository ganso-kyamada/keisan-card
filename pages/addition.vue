<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <questions-card
        v-if="!isFinished"
        :items="additions"
        calc-type="addition"
        :current-index="currentIndex"
        :disabled="dialog"
        @answer="answer"
      ></questions-card>

      <finished-card v-else calc-type="addition">
      </finished-card>

      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card :color="isCorrect ? 'green' : 'red'">
          <v-card-text class="text-center py-2">
            {{ isCorrect ? 'せいかい！' : 'ふせいかい。。' }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>

    <v-col cols="12" class="text-center">
      <answers-card :items="answers" calc-type="addition">
      </answers-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import QuestionsCard from '@/components/QuestionsCard'
import AnswersCard from '@/components/AnswersCard'
import FinishedCard from '@/components/FinishedCard'

export default {
  components: {
    QuestionsCard, AnswersCard, FinishedCard
  },
  data() {
    return {
      dialogVal: false,
      currentIndex: 0,
      answers: [],
      isCorrect: false,
    }
  },
  computed: {
    ...mapGetters(['additions']),
    dialog: {
      get() {
        return this.dialogVal
      },
      set(value) {
        if (!value) return

        this.dialogVal = value
        setTimeout(() => (this.dialogVal = false), 1000)
      },
    },
    question() {
      return this.additions[this.currentIndex]
    },
    isFinished() {
      return this.additions.length === this.answers.length
    }
  },
  methods: {
    answer(value) {
      this.dialog = true
      const correct = this.question[0] + this.question[1]
      this.isCorrect = value === correct
      this.answers.push(this.question.concat([value, this.isCorrect]))
      this.currentIndex++
    }
  },
  head() {
    return { title: 'たしざん' }
  }
}
</script>
