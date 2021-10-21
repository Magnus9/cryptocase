<template>
  <div class="card">
    <img src="@/assets/crypto.png" />
    <div class="card-content">
      <span>Welcome to CryptoCase. Press the button to view top crypto currencies</span>
      <b-button variant="success">
        <router-link to="/coins">View Currencies</router-link>
      </b-button>
    </div>
  </div>
</template>

<style lang="css">
  .card {
    border-radius: 4px;
    border-color: gray;
    padding: 0px 0px 0px 0px;
  }
  .card-content {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
  }
  .card img {
    max-width: 60rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component({

  })
  export default class Home extends Vue {
    
  } 
</script>
