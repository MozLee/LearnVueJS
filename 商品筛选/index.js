console.log('indexjs加载成功');
Vue.component('cell-phone', {
    methods: {
        onstatus(item, index) {
            this.currentIndex = this.currentIndex === index ? -1 : index;
            this.$emit('mozlee', item)
        }
    },
    template: `<li>
                {{title}}
                <a 
                href="javascript:;" 
                v-for="item,index in info"
                @click="onstatus(item,index)"
                :style="{color:index===currentIndex?'rgb(40, 165, 196)':'#000'}"
                >{{item.item}}</a>
               </li>`,
    props: {
        title: {
            type: String,
            default: 'Apple'
        },
        info: {
            type: Array,
            default () {
                return [1, 2, 3]
            }
        },
    },
    data: () => {
        return {
            currentIndex: -1,
        }
    }
});
let vm = new Vue({
    el: "#wrap",
    data: {
        band: data,
        cl:[[],[],[],[]],
    },
    methods: {
        showInfo(item) {
            console.log(item);
            item.on = !item.on;
            if(item.on){
                if(this.cl[item.pid].length>0){
                    this.cl[item.pid].splice(0,1);
                }
                this.cl[item.pid].push(item.item); 
                                                     
            }else{
                this.cl[item.pid].splice(0,1)
            } 
        },
    }
})