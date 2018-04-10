<template>
  <section class="main">
    <input class="toggle-all" type="checkbox" @click="checkAll" v-model="chose"/>
    <ul class="todo-list">
        <li 
        :class="{
                    editing:editItem===item,
                    completed:item.todo
               }"
        v-for="(item,index) in todoList"
        :key="item.id"
        >
            <div class="view">
                <input @click="check(item)" class="toggle" type="checkbox" v-model="item.todo"/>
                <label 
                @dblclick="todoEditing(item,index)"
                >{{item.title}}</label>
                <button  
                class="destroy"
                @click="deletTodo(index)"
                ></button>
            </div>
            <input class="edit" 
            v-model="item.title"
            @keyup.enter="todoNormal(item)"
            @keyup.esc="escTodo(item)"
            />
        </li>
    </ul>
</section>
</template>
<script>
    export default {
        props:{
            todoList:{
                type:[Array,Object],
                default:['请传入数据']
            }
        },
        data(){
            return {
                editItem:null,
                editValue:'',   
                chose:false,             
            }
        },
        methods:{
            todoEditing(item,index){
                this.editItem=item;
                this.editValue=item.title;
                this.$nextTick(() => {
                    let editInputs = document.querySelectorAll('.edit');
                    editInputs[index].focus();
                })
            },
            todoNormal(item){
                this.editItem=null;
                if(item.title.trim() === ''){
                    this.deletTodo(item)
                }    
            },
            deletTodo(index){
                this.todoList.splice(index,1)
            },
            escTodo(item){
                item.title = this.editValue;
                this.editValue = '';
                this.editItem=null;
            },
            checkAll(){
                this.chose = !this.chose;
                this.todoList.forEach(x => {
                x.todo = this.chose
                   }); 
                // this.$emit('update:todoList')
            },check(item){
                item.todo=!item.todo;
                if(this.todoList.every(x=>x.todo)){
                     this.chose=true;
                }else{
                    this.chose=false;
                }
                console.log(this.chose);
            }
        }
    }
</script>
