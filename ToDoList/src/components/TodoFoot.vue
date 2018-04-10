<template>
  <footer class="footer">
	<span class="todo-count">
		<strong>{{uncheck}}</strong>
		<span>条未选中</span>
	</span>
	<ul class="filters">
		<li><a href="#/all" 
				:class="{selected:currentHash ==='all'}" 
				@click="changeHash"
		>All</a></li> 
		<li><a href="#/active" 
					:class="{selected:currentHash ==='active'}" 
		 			@click="changeHash"
					 >Active</a></li> 
		<li><a href="#/completed" 
				:class="{selected:currentHash ==='completed'}"  		
				@click="changeHash"
				>Completed</a></li>
	</ul>
</footer>
</template>
<script>
	export default{
		props:{
			todoList:{
				type:Array,
				default:[1,2,3]
			},
			activeData:{
				type:Array,
				default:null
			}
		},
		data(){
			return {
				currentHash : 'all'
			}
			},
		methods:{
			changeHash(){
				this.$nextTick(() => {
					this.currentHash = location.hash.slice(2,location.hash.length);
					console.log(this.currentHash);
					if(this.currentHash){ 
							if(this.currentHash==='all'){
									this.$emit('update:activeData', this.todoList)
							}else if(this.currentHash==='active'){
									this.$emit('update:activeData', this.todoList.filter(x=>x.todo==false))
							}else if(this.currentHash==='completed'){
									this.$emit('update:activeData', this.todoList.filter(x=>x.todo==true))
							}
					}
				})
			},
		},
		computed:{
			uncheck(){
				return this.activeData.filter(x=>x.todo==false).length
			}
		}
	}
let hashkey = {
		all:true,
		active: true,
    completed: true
}

</script>