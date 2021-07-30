<template>
  <v-card class="finished-card">
    <v-card-title class="justify-center">
      おつかれさまでした！
      <v-icon>mdi-thumb-up</v-icon>
    </v-card-title>

    <v-card-text class="text-body-1">
      おとなのひとに「かいとういちらん」をかくにんしてもらおう！
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn :href="moreLink">もういちどチャレンジする</v-btn>
      <v-btn href="/">もどる</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    calcType: {
      type: String,
      required: true,
    }
  },
  computed: {
    moreLink() {
      return `/${this.calcType}`
    },
  },
}
</script>
