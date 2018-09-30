<template>
  <div class="app">
  <!--主页组件HomeContainer.vue-->
    <!-- 1 轮播组件 :key 提高排序速度 不加也可以 会有一个提示 -->
    <mt-swipe :auto="4000"  class="lbt">
      <mt-swipe-item  v-for="item in list" :key="item.id">
        <img :src="item.img_url" alt="" >
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <router-link to="/home/newslist">
                            <img src="../../img/menu1.png" alt="">
                            <div class="mui-media-body">新闻资讯</div>
                      </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                      <router-link to="/home/goodslist">
                            <img src="../../img/menu2.png" alt="">
                            <!-- <span class="mui-badge">1</span> -->
                            <div class="mu  i-media-body">商品</div>
                      </router-link>
                    </li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                           <img src="../../img/menu3.png" alt="">
                            <div class="mui-media-body">Chat</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                          <img src="../../img/menu4.png" alt="">
                            <div class="mui-media-body">location</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                           <img src="../../img/menu5.png" alt="">
                            <div class="mui-media-body">Search</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../img/menu6.png" alt="">
                            <div class="mui-media-body">购物车</div></a></li>
            </ul>

      

  </div>
</template>

<script>
//因为Toast组件只有这个文件里面使用 所以单独引入而不是在main.js引入 ，main.js里面引入的是全局都用的公共组件
import {Toast} from "mint-ui";
export default{
  data(){
    return{ 
      list:[]
    }
  },
  methods:{
    getImageList(){
      //获取图片轮播的数据
      // console.log(123);
      var url = "http://localhost:3000/imagelist/list";
      this.$http.get(url).then(result=>{
        console.log(result);
        if(result.body.code == 1 ){
          this.list = result.body.msg;
        }else{
          Toast("加载轮播图片失败");
        }
      })
    }
  },
  created(){
    this.getImageList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .lbt{
     height:200px;
  }
  .lbt img{
    height:200px; 
    width:100%;
   
  }
  .mui-grid-9 li img{
width: 60px;
    height: 60px;
  }
  .mui-grid-view.mui-grid-9{
    background: #fff;
  }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size:13px;
  }
</style>
