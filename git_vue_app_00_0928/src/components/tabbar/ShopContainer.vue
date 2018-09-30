<template>
    <div class="app_shopContainer">
        <div class="mui-card">
            <div class="mui-card-header">购物车</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-for="item in list" :key="item.id">
                    <span class="product">{{item.name}}</span>
                     <span class="price"> {{item.price}}</span>
                     <div class="mui-numbox">
                        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub(item.id)">-</button>
                        <input class="mui-input-numbox" type="number" :value="item.count"/>
                        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="goAdd(item.id)">+</button>
                    </div>
                </div>
            </div>
            
            <div class="mui-card-footer">
                <span class="sum" >小计:{{getsubtotal}}</span>
            </div>
        </div>
      
    </div>
</template>
<script>
// import numBox from "../subCompoonents/numBox.vue"
    export default{
        data(){
            return {
                num:0,
                list:[],
                sum:0
            }
        },
          methods:{
            
            goSub(id){
               for(var item of this.list){
                   if(item.id == id){
                    //    console.log(1)
                       if(item.count<=0){
                           item.count=0;
                           break;
                       }else{
                            item.count--;
                       }
                   }
               }
             
            },
            goAdd(id){
                for(var item of this.list){ //通过遍历点击add传过来的id 和数据库里面数据的id是否相等 如果相等就count++
                    if(item.id == id){
                        item.count++;
                    }
                }
                 
            },
            getCartList(){
                this.$http.get("cardlist/list").then(result=>{
                    this.list = result.body.msg;
                    // console.log(1,this.list)
                })
            }
            
        },
        created(){
            this.getCartList()
        },
        computed:{  //通过计算属性改变小计的值   
            getsubtotal:function(){
                var sum = 0;
                for(var item of this.list){
                    sum+=item.price*item.count;
                }
                return sum;
            }
        }
    }
</script>
<style scoped>
.mui-card-content-inner{
    display: flex;
    justify-content:space-between;
}
span.price{
    color:red;
}
</style>
