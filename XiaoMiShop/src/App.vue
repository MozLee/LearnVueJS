<template>
  <div id="app">
    <shop-car></shop-car>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import shopCar from './views/shopCar'
export default {
  name: 'App',
  components: {
    shopCar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
