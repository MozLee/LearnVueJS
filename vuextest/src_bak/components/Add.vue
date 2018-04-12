<template>
  <div>
    <button @click="addCount">+</button>  
  </div>
</template>
<script>
import { getUsers } from "../server/index";
export default {
  methods: {
    addCount() {
      //  this.$store.commit('changeCount')
      this.$store.dispatch("changeN");
    }
  },
  created() {
    getUsers({ method: "post" })
      .then(data => {
        console.log(data);
      })
      .catch(e => {
        console.error("请求数据错误", e);
      });
  }
};
</script>
