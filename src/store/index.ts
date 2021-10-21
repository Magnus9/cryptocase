import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api/API'
import { State, CoinInfo } from '@/types/index'

Vue.use(Vuex)

const state: State = {
  coins: [],
  error: null
}

export default new Vuex.Store({
  state,
  getters: {
    getCurrentCoin: (state) => (id: string) => {
      return state.coins.find(coin => coin.id === id)
    }
  },
  mutations: {
    setCoins(state, coins: CoinInfo[]) {
      state.coins = coins
    },
    setError(state, error: string) {
      state.error = error
    }
  },
  actions: {
    async getTopCryptoCurrencies(context) {
      setTimeout(async () => {
        const resp = await API.getTopCryptoCurrencies()
        const { data, status } = resp
        
        if (status.code === 200) {
          const coins: CoinInfo[] = data.Data.map((item: any) => {
            const usd = item.DISPLAY ? item.DISPLAY.USD : { }
            return {
              id:              item.CoinInfo.Id,
              fullName:        item.CoinInfo.FullName,
              name:            item.CoinInfo.Name,
              imageUrl:        `https://cryptocompare.com${item.CoinInfo.ImageUrl}`,
              url:             `https://cryptocompare.com${item.CoinInfo.Url}`,
              algorithm:       item.CoinInfo.Algorithm,
              proofType:       item.CoinInfo.ProofType,
              maxSupply:       item.CoinInfo.MaxSupply,
              assetLaunchDate: item.CoinInfo.AssetLaunchDate,
              blockNumber:     item.CoinInfo.BlockNumber,
              blockTime:       item.CoinInfo.BlockTime,
              blockReward:     item.CoinInfo.BlockReward,
              coinMetrics: usd
            }
          })
          context.commit('setCoins', coins)
          console.log(coins)
        } else {
          context.commit('setError', status.text)
        }
      }, 100)
    },
  }
})
