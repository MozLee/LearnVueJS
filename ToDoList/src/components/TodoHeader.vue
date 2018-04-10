<template>
    <header class="header" >
        <h1>todos</h1>
        <input
        v-model="inputValue" 
        class="new-todo" 
        placeholder="请输入内容" 
        @keyup.enter="addTodo"
        @keyup.esc="escTodo"
        />
    </header>
</template>
<script>
    export default{
        props:{
            todoList:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                inputValue:'',
                chose:false,  
            }
        },
        methods:{
            addTodo(){
                // console.log(this.inputValue);
                if(this.inputValue.trim().length>=1){
                    this.todoList.push({
                    id:Date.now()+Math.random(),
                    title:this.inputValue,
                    todo:false})
                    this.inputValue = ''
                }else{
                    this.inputValue = ''                    
                }
            },
            escTodo(){
                this.inputValue = ''
            },
           
        }
        
    }
</script>
