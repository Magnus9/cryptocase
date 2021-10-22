<template>
  <b-card header-tag="header" footer-tag="footer" v-if="coin">
    <template #header>
      <h6 class="mb-0">{{ coin.fullName }} ({{ coin.name }})</h6>
    </template>
    <b-card-text>
      <div class="wrapper">
        <div>
          <img :src="coin.imageUrl" />
        </div>
        <span style="padding: 0px 0px 4px 10px;">
          <a :href="coin.url">{{ coin.url }}</a>
        </span>
      </div>
      <br />
      <b-table-simple striped hover responsive bordered>
        <thead>
          <th>Max supply</th>
          <th>Algorithm</th>
          <th>Proof Type</th>
          <th>Start date</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ coin.maxSupply }}</td>
            <td>{{ coin.algorithm }}</td>
            <td>{{ coin.proofType }}</td>
            <td>{{ coin.assetLaunchDate}}</td>
          </tr>
        </tbody>
      </b-table-simple>
      <b-table-simple striped hover responsive bordered>
        <thead>
          <th>Block Number</th>
          <th>Block Time</th>
          <th>Block Reward</th>
          <th>Last Market</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ coin.blockNumber }}</td>
            <td>{{ coin.blockTime }}</td>
            <td>{{ coin.blockReward }}</td>
            <td>{{ coin.coinMetrics.LASTMARKET}}</td>
          </tr>
        </tbody>
      </b-table-simple>
    </b-card-text>
    <template #footer>
      <em>
        <router-link :to="{ name: 'Coins' }">
          <b-button variant="primary" style="float: right;">
            Go back
          </b-button>
        </router-link>
      </em>
    </template>
  </b-card>
</template>

<style lang="css">
  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .wrapper div {
    width: 100px;
    height: 100px;
    border: 1px solid #e7e7e7;
  }
  .wrapper img {
    width: 100px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import store from '@/store'
  import { CoinInfo } from '@/types'

  @Component({

  })
  export default class Coin extends Vue {

    coin: CoinInfo | null = null

    @Prop() id!: string
    created() {
      if (!store.state.coins.length) {
        store.dispatch('pollTopCryptoCurrencies')
      } else {
        this.coin = store.getters.getCurrentCoin(this.id)
      }
      store.watch(
        () => store.state.coins,
        (coins) => {
          if (coins.length) {
            this.coin = store.getters.getCurrentCoin(this.id)
          }
        }
      )
    }
  }
</script>