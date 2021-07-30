<template>
  <v-card class="answers-card">
    <v-card-title class="justify-center">
      かいとういちらん
    </v-card-title>

    <v-card-text class="text-body-1">
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key="`item-${i}`"
          cols="12"
        >
          {{ item[0] }} {{ calc }} {{ item[1] }} = {{ item[2] }}
          <v-icon
            v-if="item[3]"
            color="green"
          >mdi-circle-outline</v-icon>
          <v-icon
            v-else
            color="red"
          >mdi-close</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
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
    }
  },
  computed: {
    calc() {
      return this.calcType === 'addition' ? '+' : '-'
    },
  }
}
</script>
