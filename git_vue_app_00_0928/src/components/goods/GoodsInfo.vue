<template>
    <div class="app_goodsinfo">
        <h1>GoodsInfo.vue 页面</h1>
      
     <!-- 第一部分 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    图片轮播
                    <v-swiper :list="imagelist"></v-swiper>
                </div>
            </div>  
		</div>
        <!-- 第二部分 购买区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						大小<br/>
                        颜色<br/>   
					</div>
				</div>
				<div class="mui-card-footer">添加至购物车，立即购买</div>
			</div>
    </div>
</template>
<script>
import swiper from "../subComponents/swiper.vue"
    export default{
       
        data(){
            return {
                imagelist:[]
            };
        },
        methods:{
            getImageList(){
                var url = "goodslist/list"
                this.$http.get(url).then(result=>{
                    if(result.body.code ==1 ){
                        this.imagelist = result.body.msg; 
                        console.log(1,this.imagelist);
                    }
                })
            }
        },
        components:{
            "v-swiper":swiper
        },
        created(){
            this.getImageList();
        }
        
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
