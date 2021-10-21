<template>
  <div>
    <b-navbar type="dark" variant="primary" sticky>
      <div style="margin-left: 2%"></div>
      <b-navbar-brand>
        <router-link to="/">CryptoCase</router-link>
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/coins">Coin List</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="css">
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}
.navbar a:link {
  color: white !important;
  text-decoration: none;
}
.navbar a:visited {
  color: white !important;
}
.navbar a:hover {
  color: white !important;
}
.navbar a:active {
  color: white !important;
}
</style>
