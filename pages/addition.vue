<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <questions-card
        v-if="!isFinished"
        :items="questions"
        calc-type="addition"
        :current-index="currentIndex"
        :disabled="dialog"
        @answer="answer"
      ></questions-card>

      <finished-card
        v-else
        :all-clear="allClear"
        calc-type="addition"
        @revenge="revengeQuestion"
      ></finished-card>

      <v-dialog v-model="dialog" hide-overlay persistent width="300">
        <v-card dark :color="isCorrect ? 'green' : 'red'">
          <v-card-text class="text-center py-2">
            {{ isCorrect ? 'せいかい！' : 'ふせいかい。。' }}
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-col>

    <v-col cols="12" class="text-center">
      <answers-card :items="answers" calc-type="addition"> </answers-card>
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
    QuestionsCard,
    AnswersCard,
    FinishedCard
  },
  data() {
    return {
      dialogVal: false,
      currentIndex: 0,
      answers: [],
      questions: [],
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
      return this.questions[this.currentIndex]
    },
    isFinished() {
      return this.questions.length === this.answers.length
    },
    allClear() {
      return this.answers.every((answer) => answer[3])
    }
  },
  mounted() {
    this.questions = this.additions
  },
  methods: {
    answer(value) {
      this.dialog = true
      const correct = this.question[0] + this.question[1]
      this.isCorrect = value === correct
      this.answers.push(this.question.concat([value, this.isCorrect]))
      this.currentIndex++
    },
    revengeQuestion() {
      const answers = this.answers
      const wrongQuestions = []
      this.currentIndex = 0
      this.answers = []
      this.questions = []
      answers.forEach((answer) => {
        if (answer[3]) {
          this.answers.push(answer)
          this.currentIndex++
        } else {
          wrongQuestions.push(answer.slice(0, 2))
        }
      })

      this.questions = this.answers
        .map((answer) => answer.slice(0, 2))
        .concat(wrongQuestions)
    }
  },
  head() {
    return { title: 'たしざん' }
  }
}
</script>
