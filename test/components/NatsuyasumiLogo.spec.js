import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import NatsuyasumiLogo from '@/components/NatsuyasumiLogo.vue'

describe('NatsuyasumiLogo', () => {
  let wrapper

  beforeEach(() => {
    const vuetify = new Vuetify()

    wrapper = mount(NatsuyasumiLogo, {
      vuetify,
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
})
