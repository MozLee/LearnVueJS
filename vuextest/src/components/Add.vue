<template>
  <div>
    <button @click="addCount">+</button>  
  </div>
</template>
<script>
  export default {
    methods:{
      addCount(){
        //  this.$store.commit('changeCount')
        this.$store.dispatch('changeN')
      }
    }
  } 
</script>
