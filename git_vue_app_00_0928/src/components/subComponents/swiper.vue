<template>
    <div>
         <h3>轮播图子组件 </h3>
         <mt-swipe :auto="4000"  class="lbt">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" alt="" >
            </mt-swipe-item>
        
          </mt-swipe>
          <!-- <button @click="getList()">打印 list</button> -->

    </div>
</template>
<script>
export default {
    data(){
        return({
          
        })
    },
    methods:{
        // getList(){
        //   console.log(this.list)

        // }
    },
    props:["list"]
   

   
}
</script>
<style scoped>
    .lbt{
        height:200px;
    }
  .lbt img{
    height:200px; 
    width:100%;
   
  }
</style>
