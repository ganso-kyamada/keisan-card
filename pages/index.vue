<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <natsuyasumi-logo />
      </v-card>

      <v-card flat>
        <v-card-title class="justify-center text-h4">
          けいさんカード
        </v-card-title>

        <v-card-actions>
          <v-row>
            <v-col cols="12">
              <v-btn
                color="primary"
                nuxt
                to="/addition"
                block
              >
                たしざんをはじめる
              </v-btn>
            </v-col>

            <v-col cols="12">
              <v-btn
                color="primary"
                nuxt
                to="/subtraction"
                block
              >
                ひきざんをはじめる
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import NatsuyasumiLogo from '@/components/NatsuyasumiLogo'

export default {
  components: {
    NatsuyasumiLogo
  },
  head() {
    return { title: 'ホーム' }
  }
}
</script>
