<template>
  <div id="app">
    <section class="todoapp">
       <div>
         <todoHeader :todoList.sync="todoData"/>
         <todo-main :todoList="activeData"/>
         <todoFooter :todoList="todoData" :activeData.sync='activeData'/>
       </div>    
    </section>
  </div>
</template>

<script>
let data = [
          {
            id:Date.now()+Math.random(),
            title:'记得要和特朗普好好谈谈',
            todo:false,
          },
          {
            id:Date.now()+Math.random(),            
            title:'记得要和习大大好好谈谈',
            todo:false,
          },
          {
            id:Date.now()+Math.random(),            
            title:'记得不要和小姐姐好好谈谈',
            todo:false,
          }
        ]
//引入模板模块
import todoHeader from "./components/TodoHeader";
import todoMain from "./components/TodoMain";
import todoFooter from "./components/TodoFoot";
export default {
  name: "App",
  //注册模板
  components: {
    todoHeader,
    todoMain,
    todoFooter
  },
  data(){
    return {
        todoData:data,
        activeData:data,
        hash:'',
    }
  }
};
</script>


