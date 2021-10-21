<template>
  <b-table-simple striped hover responsive bordered>
    <thead>
      <th>#</th>
      <th>Coin</th>
      <th>Price</th>
      <th>Market Cap</th>
    </thead>
    <tbody>
      <tr v-for="(coin, index) in this.$store.state.coins" :key="index">
        <td>
          {{ index+1 }}
        </td>
        <td>
          <router-link :to="`/coins/${coin.id}`">
          <div class="coin_col1">
            <img :src="coin.imageUrl" />
              <div class="name">
                {{ coin.fullName }}<br />
                {{ coin.name }}
              </div>
          </div>
          </router-link>
        <td>
          {{ coin.coinMetrics.PRICE }}
        </td>
        <td>
          {{ coin.coinMetrics.MKTCAP }}
        </td>
      </tr>
    </tbody>
  </b-table-simple>
</template>

<style lang="css">
  .coin_col1 {
    display: flex;
    align-items: center;
  }
  .coin_col1 img {
    width: 25px;
    height: 25px;
  }
  .coin_col1 .name {
    display: inline-flex;
    flex-direction: column;
    padding-left: 20px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import store from '@/store'

  @Component({

  })
  export default class Coins extends Vue {
    created() {
      store.dispatch('pollTopCryptoCurrencies')
    }
  }
</script>
