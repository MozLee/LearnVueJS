<template>
  <div id="app">
    <img src="./assets/logo.png"  @click="$store.state.count++">
    <HelloWorld/>
    <h2>{{$store.state.count}}</h2>
  </div>
</template>
<script>
import HelloWorld from "./components/add";
import { getList } from "./server/index";
export default {
  name: "App",
  components: {
    HelloWorld
  },
  created() {
    getList().then((data) => {
      console.log(data);
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
