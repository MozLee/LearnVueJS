<template>
  <div id="app">
	<button @click="testPush">Push</button>  
	<button @click="testReplace">testReplace</button>  
	<button @click="testGo">Go</button>  
    <js-menu></js-menu>
    <js-container></js-container>
  </div>
</template>
<script>
import jsMenu from '@/components/Menu';
import jsContainer from "@/components/Container";
export default {
  name: 'App',
  components:{
      jsMenu,
      jsContainer
  },
  methods:{
	  testPush(){
		  this.$router.push({
			  name:'Guanzhu'
		  })
	  },
	 testReplace(){
		 this.$router.replace({
			 name:'Xiaoxi'
		 })
	 } 
	  ,
	  testGo(){
		  this.$router.go(-1)
	  }
  }
}
</script>

<style>
body,ul,li {
	margin: 0;
	padding:0;
}
ul {
	list-style: none;
}
a {
	text-decoration: none;
	color: #000;
}

.header-box {
	border-bottom: 1px solid #f0f0f0;
	height: 50px;
}

.nav-list {
	height: 100%;
	width: 800px;
	margin: 0 auto;
	display: flex;
	align-content: center;
}

.nav-list li {
	flex: 1;
	text-align: center;
	align-items:center;
}

.nav-list li a {
	display: block;
	line-height: 50px;
}

.nav-list li.select {
	background: #ea6f5a;
	color: #fff;
}
.nav-list li.select a{
	color: #fff;
}

.nav-list .message {
	position: relative;
}

.message:hover .dropdown-menu {
	display: block;
}

.dropdown-menu {
	width: 200px;
	background: #fff;
	box-shadow: 0 2px 8px rgba(0,0,0,.1);
	margin: 0 auto;
	margin-top: 1px;
	display: none;
}


.container {
	width: 800px;
	margin: 0 auto;
}

.content {
	display: flex;
}

.content > div:nth-child(2) {
	flex: 1;
	text-align: center;
}

.watch-list {
	width: 300px;
}

.left-slider {
	border-right: 1px solid #f0f0f0;
}

.watch-list li {
	overflow:hidden;
	line-height: 40px;
	margin: 10px;
	padding: 10px;
	
}

.watch-list li.active {
	background: #f0f0f0;
}

.watch-list li img{
	width: 40px;
	height: 40px;
	float: left;
	padding-right: 10px;
}
</style>
