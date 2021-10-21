import { shallowMount } from '@vue/test-utils'
import Coin from '@/views/Coin.vue'
import API from '@/api/API'

describe('API', () => {
  it('gets a 200 success response', async () => {
    const resp = await API.getTopCryptoCurrencies()
    expect(resp.status.code).toEqual(200)
  })
  it('has Data attribute in response', async () => {
    const resp = await API.getTopCryptoCurrencies()
    expect(resp.data.Data).toBeDefined()
  })
  it('has data content', async () => {
    const resp = await API.getTopCryptoCurrencies()
    expect(resp.data.Data.length).toBeGreaterThan(0)
  })
})

describe('Coin.vue', () => {
  it('should have the correct id', () => {
    const wrapper = shallowMount(Coin, {
      propsData: { id: 1024 }
    })
    expect(wrapper.props().id).toEqual(1024)
  })
})
