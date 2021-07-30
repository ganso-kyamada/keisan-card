<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
      color="cyan"
    >
      <v-btn to="/" text>
        <v-toolbar-title v-text="title" />
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'けいさんカード'
    }
  }
}
</script>

<style>
div[data-app='true'] {
  background: url('/assets/background.jpg') no-repeat center center fixed !important;
  background-size: cover;
}
</style>
