<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-btn nuxt to='/' text link>
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
